import { Dispatch, SetStateAction } from "react";
import { IUsers } from "../types/userTypes";

export const getData = async (
  url: string,
  setFunc: Dispatch<SetStateAction<IUsers | undefined>>,
  setLoadingFunc?: Dispatch<SetStateAction<boolean>>
) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      setFunc(undefined);
      throw new Error("Network response was not ok!");
    }
    const data = await res.json();
    setFunc(data);
    if (setLoadingFunc) setLoadingFunc(false);
  } catch (err) {
    console.warn(err);
  }
};
