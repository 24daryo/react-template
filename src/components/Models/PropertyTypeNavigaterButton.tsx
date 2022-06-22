import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { propertyTypeState } from "../../state/state";
import { ApartmentCard, HouseCard } from "../Elements/Cards/PropertyCards";

// ボタンクリックで対応する物件種別のURLへ遷移
// component + state + navigation

type PropertyTypeProps = {
  propertyTypeName: "apartment" | "house";
};

export const PropertyTypeNavigaterButton: React.FC<PropertyTypeProps> = ({
  propertyTypeName,
}) => {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useRecoilState(propertyTypeState);

  const ButtonSelector = () => {
    if (propertyTypeName == "apartment") {
      return <ApartmentCard isSelected={propertyType === propertyTypeName} />;
    } else if (propertyTypeName == "house") {
      return <HouseCard isSelected={propertyType === propertyTypeName} />;
    }
    return <>エラーが発生しました。開発者にお問い合わせください</>;
  };

  return (
    <div
      onClick={() => {
        navigate(`/${propertyTypeName}`);
        setPropertyType(propertyTypeName);
      }}
    >
      <ButtonSelector />
    </div>
  );
};
