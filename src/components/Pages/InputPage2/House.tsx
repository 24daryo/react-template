import { InputLabel } from "@/components/Elements/Texts/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
// state
import { TextForm } from "@/components/Elements/Inputs/TextFields/UserTextField";
import {
  HStack,
  HStackStyler as HItem,
} from "@/components/Elements/Layouts/Stack";
import { BuildingYearSelect } from "@/components/Models/Forms/BuildingYearSelect";
import { LayoutSelect } from "@/components/Models/Forms/LayoutSelect";
import { StringGroup } from "@/components/Models/Forms/StringGroup";
import { NextNavigaterButton } from "@/components/Models/Navigaters";
import {
  BuildingStructure,
  buildingStructureState,
  buildingYearState,
  landAreaState,
  LayoutType,
  layoutTypeState,
  livingAreaState,
  totalFloorState,
} from "@/state/propertyState";
import { useRecoilState } from "recoil";
import * as yup from "yup";

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
  landArea: yup.string().required("必須です"),
});

type Props = {
  next: string;
};

export const House: React.FC<Props> = ({ next }) => {
  // global state
  const [buildingYear, setBuildingYear] = useRecoilState(buildingYearState);
  const [buildingStructure, setBuildingStructure] = useRecoilState(
    buildingStructureState
  );
  const [livingArea, setLivingArea] = useRecoilState(livingAreaState);
  const [landArea, setLandArea] = useRecoilState(landAreaState);
  const [layoutType, setLayoutType] = useRecoilState(layoutTypeState);
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
    setTotalFloor(data.totalFloor);
  };

  return (
    <>
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

      <NextNavigaterButton
        label="次へ"
        isValid={isValid}
        next={next}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};
