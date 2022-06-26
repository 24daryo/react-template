import { InputLabel } from "@/components/Elements/Texts/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
// state
import { StringGroup } from "@/components/Models/Forms/StringGroup";
import { NextNavigaterButton } from "@/components/Models/Navigaters";
import { useRecoilState } from "recoil";
import * as yup from "yup";
import {
  BuildingStructure,
  buildingStructureState,
  buildingYearState,
  landAreaState,
  LayoutType,
  layoutTypeState,
  livingAreaState,
  locatedFloorState,
  totalFloorState,
} from "../../state/propertyState";
import { TextForm } from "../Elements/Inputs/TextFields/UserTextField";
import {
  HStack,
  HStackStyler as HItem,
  VStack,
} from "../Elements/Layouts/Stack";
import { UserText } from "../Elements/Texts/UserText";
import { DisplaySelector } from "../Models/DisplaySelector";
import { BuildingYearSelect } from "../Models/Forms/BuildingYearSelect";
import { LayoutSelect } from "../Models/Forms/LayoutSelect";

type FormInput = {
  buildingYear: number | null;
  buildingStructure: BuildingStructure;
  livingArea: number | null;
  landArea: number | null;
  layoutType: LayoutType;
  locatedFloor: number | null;
  totalFloor: number | null;
};

// バリデーションルール
const schema = yup.object({
  buildingYear: yup.string().required("必須です"),
  livingArea: yup.string().required("必須です"),
  // locationDetail: yup.string().required("必須です"),
});

type Props = {
  next: string;
};

export const InputPage2: React.FC<Props> = ({ next }) => {
  // global state
  const [buildingYear, setBuildingYear] = useRecoilState(buildingYearState);
  const [buildingStructure, setBuildingStructure] = useRecoilState(
    buildingStructureState
  );
  const [livingArea, setLivingArea] = useRecoilState(livingAreaState);
  const [landArea, setLandArea] = useRecoilState(landAreaState);
  const [layoutType, setLayoutType] = useRecoilState(layoutTypeState);
  const [locatedFloor, setLocatedFloor] = useRecoilState(locatedFloorState);
  const [totalFloor, setTotalFloor] = useRecoilState(totalFloorState);

  // react-hook-form
  const form = useForm<FormInput>({
    mode: "onChange",
    // criteriaMode: "all",
    defaultValues: {
      buildingYear: buildingYear,
      buildingStructure: buildingStructure,
      livingArea: livingArea,
      landArea: landArea,
      layoutType: layoutType,
      locatedFloor: locatedFloor,
      totalFloor: totalFloor,
    },
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = form;

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    setBuildingYear(data.buildingYear);
    setBuildingStructure(data.buildingStructure);
    setLivingArea(data.livingArea);
    setLandArea(data.landArea);
    setLayoutType(data.layoutType);
    setLocatedFloor(data.locatedFloor);
    setTotalFloor(data.totalFloor);
  };

  return (
    <>
      <VStack spacing={3} alignItems="stretch">
        <UserText>
          査定したい物件の種類を選択し、物件の情報を入力してください（2/3)
        </UserText>

        <VStack spacing={3} alignItems="stretch">
          <div>
            <InputLabel required label="建築年" />
            <BuildingYearSelect form={form} name="buildingYear" />
          </div>

          <div>
            <InputLabel label="建築構造" />
            <StringGroup
              form={form}
              name="buildingStructure"
              options={[
                {
                  label: "鉄筋系（鉄筋コンクリート）",
                  value: "reinforced_concrete",
                },
                {
                  label: "鉄骨系（軽量鉄骨など）",
                  value: "light_weight_steel",
                },
                { label: "木造", value: "wood" },
                { label: "その他", value: "" },
              ]}
            />
          </div>

          <DisplaySelector name="apartment">
            <HStack spacing={3}>
              <HItem>
                <InputLabel required label="専有面積" />
                <TextForm
                  type="number"
                  form={form}
                  name="livingArea"
                  placeholder="50"
                />
              </HItem>
              <HItem>
                <InputLabel label="間取り" />
                <LayoutSelect form={form} name="layoutType" />
              </HItem>
            </HStack>
            <HStack spacing={3}>
              <HItem>
                <InputLabel label="所在階" />
                <TextForm
                  type="number"
                  form={form}
                  name="locatedArea"
                  placeholder="5"
                />
              </HItem>
              <HItem>
                <InputLabel label="建物の階数" />
                <TextForm
                  type="number"
                  form={form}
                  name="totalFloor"
                  placeholder="5"
                />
              </HItem>
            </HStack>
          </DisplaySelector>

          <DisplaySelector name="house">
            <HStack spacing={3}>
              <HItem>
                <InputLabel required label="居住面積" />
                <TextForm
                  type="number"
                  form={form}
                  name="livingArea"
                  placeholder="50"
                />
              </HItem>
              <HItem>
                <InputLabel required label="土地面積" />
                <TextForm
                  type="number"
                  form={form}
                  name="landArea"
                  placeholder="100"
                />
              </HItem>
            </HStack>
            <HStack spacing={3}>
              <HItem>
                <InputLabel label="間取り" />
                <LayoutSelect form={form} name="layoutType" />
              </HItem>
              <HItem>
                <InputLabel label="建物の階数" />
                <TextForm
                  type="number"
                  form={form}
                  name="totalFloor"
                  placeholder="2"
                />
              </HItem>
            </HStack>
          </DisplaySelector>

          <NextNavigaterButton
            label="次へ"
            isValid={isValid}
            next={next}
            onClick={handleSubmit(onSubmit)}
          />
        </VStack>
      </VStack>
    </>
  );
};
