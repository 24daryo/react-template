import useMedia from "use-media";

export function useResopnsive() {
  const isPC = useMedia({ minWidth: "800px" });
  return isPC;
}
