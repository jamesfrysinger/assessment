import { FC, ReactElement } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
const OverlayLoading: FC<{
  children?: ReactElement;
  isActive: boolean;
}> = ({ children, isActive }) => {
  return (
    <LoadingOverlay
      active={isActive}
      spinner
      fadeSpeed={0}
      text="Searching"
      styles={{
        content: (base) => ({
          ...base,
          margin: "50px auto",
        }),
        overlay: (base) => ({
          ...base,
          background: "#f7f7f7",
          color: "#f8dd14",
          minHeight: 300,
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
