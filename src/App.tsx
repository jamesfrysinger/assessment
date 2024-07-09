import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { IUsers } from "./types/userTypes";
import { getData } from "./utils/getData";
import Results from "./components/Results";
import { Snackbar } from "@mui/material";

const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [results, setResults] = useState<IUsers>();
  const [query, setQuery] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    if (!query) {
    } else {
      setLoading(true);
      setTimeout(() => {
        if (query !== "") {
          getData(
            `https://${apiKey}.mockapi.io/employees?name=${query}`,
            setResults,
            setError,
            setLoading
          );
        } else setLoading(false);
      }, 500);
    }
  }, [query]);

  return (
    <div className="flex justify-center flex-wrap h-screen p-6">
      <div className="w-[100%] sm:w-[800px]">
        {/* <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="I love snacks"
          key={vertical + horizontal}
        /> */}
        <Header />
        <Search setQuery={setQuery} />
        <Results results={results} loading={loading} />
      </div>
    </div>
  );
}

export default App;
