import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";
import Search from "./components/Search";
import { IUsers } from "./types/userTypes";
import { getData } from "./utils/getData";
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [results, setResults] = useState<IUsers>();
  const [query, setQuery] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!query) {
    } else {
      setLoading(true);
      setTimeout(() => {
        if (query !== "") {
          getData(
            `https://${apiKey}.mockapi.io/employees?name=${query}`,
            setResults,
            setLoading
          );
        } else setLoading(false);
      }, 1000);
    }
  }, [query]);

  return (
    <div className="flex justify-center flex-wrap h-screen p-6">
      <div className="min-w-[800px]">
        <Header />
        <Search setQuery={setQuery} />
        {query && <Results results={results} loading={loading} />}
      </div>
    </div>
  );
}

export default App;
