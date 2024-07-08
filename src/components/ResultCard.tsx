import { FC } from "react";
import { IUser } from "../types/userTypes";

const ResultCard: FC<{ user: IUser }> = ({ user }) => {
  return (
    <div className="flex items-center pb-8" key={user.id}>
      <img src={user.avatar} alt={user.name} loading="lazy" />
      <div className="pl-2">
        <h3 className="font-bold">{user.name}</h3>
        <p>{user.title}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default ResultCard;
