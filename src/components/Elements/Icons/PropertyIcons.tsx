import apartment from "@/assets/images/buttons/btn_apartment.png";
import house from "@/assets/images/buttons/btn_house.png";

export const ApartmentIcon: React.FC = () => {
  return <img src={apartment} alt="apartment" />;
};

export const HouseIcon: React.FC = () => {
  return <img src={house} alt="house" />;
};
