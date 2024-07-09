import { Dispatch, SetStateAction } from "react";
import { IUsers } from "../types/userTypes";

export const getData = async (
  url: string,
  setData: Dispatch<SetStateAction<IUsers | undefined>>,
  setError: Dispatch<SetStateAction<string | undefined>>,
  setLoading?: Dispatch<SetStateAction<boolean>>
) => {
  try {
    if (setLoading) setLoading(true);
    setData(undefined);
    if (setError) setError(undefined);

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok!");
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
