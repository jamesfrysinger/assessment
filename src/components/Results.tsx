import { FC } from "react";
import { IUser } from "../types/userTypes";
import { IResults } from "../types/resultsTypes";

const Results: FC<IResults> = ({ results }) => {
  return (
    <section className="pt-12">
      <h2 className="font-bold border-natural-400 border-b-[1px] border-solid pb-2">
        Results ({results?.length || 0})
      </h2>
      <div className="grid grid-cols-2 pt-8">
        {results ? (
          results?.map((user: IUser) => (
            <div className="flex items-center pb-8">
              <img src={user.avatar} alt={user.name} />
              <div className="pl-2">
                <h3 className="font-bold">{user.name}</h3>
                <p>{user.title}</p>
                <p>{user.email}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#888", fontSize: "13px" }}>
            No results. Please search for a user via the text field above.
          </p>
        )}
      </div>
    </section>
  );
};

export default Results;
