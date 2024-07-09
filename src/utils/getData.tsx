import { Dispatch, SetStateAction } from "react";
import { IEmployees } from "../types/userTypes";

export const getData = async (
  url: string,
  setData: Dispatch<SetStateAction<IEmployees | undefined>>,
  setError: Dispatch<SetStateAction<string | undefined>>,
  setLoading?: Dispatch<SetStateAction<boolean>>
) => {
  try {
    if (setLoading) setLoading(true);
    setData(undefined);
    if (setError) setError(undefined);

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Cannot retrieve data due to network error.");
    }
    const data = await res.json();
    setData(data);
  } catch (err) {
    if (setError) setError((err as Error).message);
    console.warn(err);
  } finally {
    if (setLoading) setLoading(false);
  }
};
