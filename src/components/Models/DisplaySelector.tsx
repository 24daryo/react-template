import { useParams } from "react-router-dom";

type PropertyTypeProps = {
  children: React.ReactNode;
  name: "apartment" | "house";
};
export const DisplaySelector: React.FC<PropertyTypeProps> = ({
  children,
  name,
}) => {
  const params = useParams();
  const { property_type } = params;
  return <>{property_type === name ? <>{children}</> : <></>}</>;
};
