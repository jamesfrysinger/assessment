import { FC } from "react";
import { IUser } from "../types/userTypes";
import { IResults } from "../types/resultsTypes";

const Results: FC<IResults> = ({ results }) => {
  return (
    <section className="pt-12">
      <h2 className="font-bold border-natural-400 border-b-[1px] border-solid pb-2">
        Results ({results?.length})
      </h2>
      <div className="grid grid-cols-2 pt-8">
        {results?.map((user: IUser) => (
          <div className="pb-8">
            <h3 className="font-bold">{user.name}</h3>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <div>
              <h3>Company:</h3>
              <p>{user.company.name}</p>
              <p>{user.company.catchPhrase}</p>
              <p>{user.company.bs}</p>
            </div>
            <div>
              <h3>Address:</h3>
              <p>{user.address.street}</p>
              <p>{user.address.suite}</p>
              <p>{user.address.city}</p>
              <p>{user.address.zipcode}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
