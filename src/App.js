import "./App.css";
import { useEffect, useState } from "react";
import OptionList from "./Components/OptionList"
import Header from "./Components/Header";
import axios from "axios";

function App() {
  let [token, setToken] = useState();
  useEffect(() => {
    axios
      .post(
        "https://findfalcone.herokuapp.com/token",
        {},
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      <div className="App">
        <Header token={token} />
        <OptionList/>
      </div>
    </>
  );
}

export default App;
