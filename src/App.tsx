import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";
import Search from "./components/Search";
import { IUsers } from "./types/userTypes";

function App() {
  const [results, setResults] = useState<IUsers>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="flex items-center justify-center flex-wrap h-screen p-6">
      <div>
        <Header />
        <Search />
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
