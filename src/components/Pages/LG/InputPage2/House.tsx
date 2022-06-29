import { InputLabel } from "@/components/Elements/Texts/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
// state
import { RadioGroupForm } from "@/components/Elements/Forms/RadioGroupForm";
import { SelectForm } from "@/components/Elements/Forms/SelectForm";
import { TextFieldForm } from "@/components/Elements/Forms/TextFieldForm";
import {
  HStack,
  HStackStyler as HItem,
} from "@/components/Elements/Layouts/Stack";
import { BuildingYearSelect } from "@/components/Models/Forms/BuildingYearSelectForm";
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
        <RadioGroupForm
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
          <TextFieldForm
            type="number"
            form={form}
            name="livingArea"
            placeholder="50"
          />
        </HItem>
        <HItem>
          <InputLabel required label="土地面積" />
          <TextFieldForm
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
          <SelectForm
            form={form}
            name="layoutType"
            placeholder="未選択"
            options={[
              { label: "未選択", value: "" },
              { label: "ワンルーム", value: "ワンルーム" },
              { label: "1K", value: "1K" },
              { label: "1DK/LDK", value: "1DK/LDK" },
              { label: "2K/DK/LDK", value: "2K/DK/LDK" },
              { label: "3K/DK/LDK", value: "3K/DK/LDK" },
              { label: "4K/DK/LDK", value: "4K/DK/LDK" },
              { label: "5K以上", value: "5K以上" },
            ]}
          />
        </HItem>
        <HItem>
          <InputLabel label="建物の階数" />
          <TextFieldForm
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
