import { useResopnsive } from "@/hooks/useResponsive";

export const Header: React.FC = () => {
  const isPC = useResopnsive();
  return <>{isPC ? <>PC版です</> : <>スマホ版です</>}</>;
};
