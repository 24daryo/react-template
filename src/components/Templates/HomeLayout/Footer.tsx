import { useResopnsive } from "@/hooks/useResponsive";

export const Footer: React.FC = () => {
  const isPC = useResopnsive();
  return <>{isPC ? <>PC版です</> : <>スマホ版です</>}</>;
};
