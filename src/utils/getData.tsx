import { Dispatch, SetStateAction } from "react";
import { IUsers } from "../types/userTypes";

export const getData = async (
  url: string,
  setFunc: Dispatch<SetStateAction<IUsers | undefined>>,
  setLoadingFunc?: Dispatch<SetStateAction<boolean>>
) => {
  const clearLoading = () => {
    if (setLoadingFunc) setLoadingFunc(false);
  };
  setFunc(undefined);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok!");
    }
    const data = await res.json();
    setFunc(data);
    clearLoading();
  } catch (err) {
    console.warn(err);
    clearLoading();
  }
};
