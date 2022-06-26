import { TextForm } from "@/components/Elements/Inputs/TextFields/UserTextField";
import { InputLabel } from "@/components/Elements/Texts/InputLabel";
import { useDebounce } from "@/hooks/useDebounce";
import {
  locationAreaState,
  locationDetailState,
  postCodeState,
  propertyNameState,
} from "@/state/propertyState";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

interface Props {
  form: UseFormReturn<any, any>;
}

export const PropertyNameInput: React.FC<Props> = ({ form }) => {
  const { property_type } = useParams();

  // global state
  const [propertyName, setPropertyName] = useRecoilState(propertyNameState);
  const [postCode, setPostCode] = useRecoilState(postCodeState);
  const [locationArea, setLocationArea] = useRecoilState(locationAreaState);
  const [locationDetail, setLocationDetail] =
    useRecoilState(locationDetailState);

  // マンションの入力についてはこちらで制御する
  const debouncedPropertyName = useDebounce(propertyName, 300);
  useEffect(() => {
    if (debouncedPropertyName.length > 0) {
      console.log("マンション入力補完：実行");
      // const mansionList = SearchMansion(debouncedPropertyName)
    }
  }, [debouncedPropertyName]);

  return (
    <>
      {property_type === "apartment" ? (
        <div>
          <InputLabel required label="マンション名" />
          <TextForm
            form={form}
            name="propertyName"
            placeholder="〇〇マンション"
            onChange={(e) => setPropertyName(e.target.value)}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
