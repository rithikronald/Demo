import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Splash = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => navigate("/loigin"), 2000);
  // }, []);
  return (
    <div className="App flex flex-col h-screen w-full bg-gradient-to-tr from-slate-900 to-purple-800  items-center justify-center">
      <p className="text-xl text-center text-white font-medium 3xl:text-3xl ">
        AI Powered financial manager
      </p>
      <p className="text-4xl text-center text-white font-semibold 4xl:text-4xl w-1/3 mt-3">
        Personalised portfolio for Maximum returns
      </p>
    </div>
  );
};

export default Splash;
