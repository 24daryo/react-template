import {
  ApartmentCard,
  HouseCard,
  LandCard,
} from "@/components/Elements/Cards/PropertyCards";
import { useNavigate, useParams } from "react-router-dom";

import { buildingStructureState } from "@/state/propertyState";
import { useRecoilState } from "recoil";

// ボタンクリックで対応する物件種別のURLへ遷移
// component + state + navigation

type PropertyTypeProps = {
  propertyTypeName: "apartment" | "house" | "land";
};

export const PropertyTypeNavigaterButton: React.FC<PropertyTypeProps> = ({
  propertyTypeName,
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const { property_type } = params;
  const [, setBuildingStructure] = useRecoilState(buildingStructureState);

  const ButtonSelector = () => {
    if (propertyTypeName == "apartment") {
      return <ApartmentCard isSelected={propertyTypeName === property_type} />;
    } else if (propertyTypeName == "house") {
      return <HouseCard isSelected={propertyTypeName === property_type} />;
    } else if (propertyTypeName == "land") {
      return <LandCard isSelected={propertyTypeName === property_type} />;
    }
    return <>エラーが発生しました。開発者にお問い合わせください</>;
  };

  return (
    <div
      onClick={() => {
        navigate(`/${propertyTypeName}`);
        console.log(propertyTypeName);
        if (propertyTypeName === "apartment") {
          setBuildingStructure("reinforced_concrete");
        } else if (propertyTypeName === "house") {
          setBuildingStructure("wood");
        }
        // setPropertyType(propertyTypeName);
      }}
    >
      <ButtonSelector />
    </div>
  );
};
