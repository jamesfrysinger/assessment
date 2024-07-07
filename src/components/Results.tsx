import { FC } from "react";
import { IUser } from "../types/userTypes";
import { IResults } from "../types/resultsTypes";
import OverlayLoading from "./common/OverlayLoading";

const Results: FC<IResults> = ({ results }) => {
  return (
    <OverlayLoading isActive={false}>
      <section className="pt-12 relative">
        <h2 className="font-bold border-natural-400 border-b-[1px] border-solid pb-2">
          Results ({results?.length || 0})
        </h2>
        <div className="grid grid-cols-2 pt-8">
          {results ? (
            results?.map((user: IUser) => (
              <div className="flex items-center pb-8" key={user.id}>
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
    </OverlayLoading>
  );
};

export default Results;
