import { FC, lazy } from "react";
import { IUser } from "../types/userTypes";
import { IResults } from "../types/resultsTypes";
import OverlayLoading from "./common/OverlayLoading";

const LazyResultCard = lazy(() => import("./ResultCard"));

const Results: FC<IResults> = ({ results, loading }) => {
  return (
    <OverlayLoading isActive={loading}>
      <section className={`pt-12 relative `}>
        <h2 className="font-bold border-natural-400 border-b-[1px] border-solid pb-2">
          Results ({results?.length || 0})
        </h2>
        <div className="grid md:grid-cols-2 pt-8">
          {results ? (
            results?.map((user: IUser) => <LazyResultCard user={user} />)
          ) : (
            <p className="text-neutral-400 text-sm">
              No results. Please search for an employee above.
            </p>
          )}
        </div>
      </section>
    </OverlayLoading>
  );
};

export default Results;
