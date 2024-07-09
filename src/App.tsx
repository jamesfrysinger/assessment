import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { getData } from "./utils/getData";
import Results from "./components/Results";
import { Alert } from "@mui/material";
import { useAppContext } from "./contexts/AppContext";

const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const { results, setResults } = useAppContext();

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
  }, [query, setResults]);

  const handleAlertClose = () => {
    setError(undefined);
  };
  return (
    <div className="flex justify-center flex-wrap h-screen p-6">
      <div className="w-[100%] sm:w-[860px]">
        {error && (
          <Alert
            severity="error"
            className="mb-[20px]"
            onClose={handleAlertClose}
          >
            {error}
          </Alert>
        )}
        <Header />
        <Search setQuery={setQuery} />
        <Results results={results} loading={loading} />
      </div>
    </div>
  );
}

export default App;
