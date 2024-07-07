import { FC, ReactElement } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
interface IOverlayLoading {
  children: ReactElement;
  isActive: boolean;
}
const OverlayLoading: FC<IOverlayLoading> = ({ children, isActive }) => {
  return (
    <LoadingOverlay
      active={isActive}
      spinner
      text="Searching"
      styles={{
        overlay: (base) => ({
          ...base,
          background: "rgba(255, 255, 255, 1)",
          color: "#f8dd14",
        }),
        spinner: (base) => ({
          ...base,
          "& svg circle": {
            stroke: "#f8dd14",
          },
        }),
      }}
    >
      {children}
    </LoadingOverlay>
  );
};
export default OverlayLoading;
