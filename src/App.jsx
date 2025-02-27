import GithubUser from "./GithubUser";
import { SWRConfig } from "swr";

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    if (!res.ok) {
      throw new Error("API request failed");
    }
    return res.json();
  });

function App() {
  const handleLogin = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <SWRConfig value={{ fetcher }}>
      <div>
        <GithubUser username="sarablue17" />
      </div>
    </SWRConfig>
  );
}

export default App;
