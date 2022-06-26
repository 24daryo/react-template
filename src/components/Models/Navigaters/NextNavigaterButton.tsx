import { SubmitButton } from "@/components/Elements/Inputs/Buttons/SubmitButton";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  label: string;
  next: string;
  isValid: boolean;
  onClick?: () => void;
}
export const NextNavigaterButton: React.FC<Props> = ({
  label,
  isValid,
  next,
  onClick,
}) => {
  const { property_type } = useParams();
  const navigate = useNavigate();

  return (
    <SubmitButton
      label={label}
      disabled={!isValid}
      onClick={() => {
        if (onClick) onClick();
        navigate(`/${property_type}/${next}`);
      }}
    />
  );
};
