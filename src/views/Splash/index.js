import "./style.css";

const Splash = () => {
  return (
    <div className="App flex h-screen w-screen bg-gradient-to-tr from-slate-900 to-purple-800  items-center justify-center">
      <div className="w-screen items-center justify-center flex flex-col">
        <p className="text-xl text-center text-white font-medium 3xl:text-3xl ">
          AI Powered financial manager
        </p>
        <p className="text-4xl text-center text-white font-medium 4xl:text-4xl w-1/2">
          Personalised portfolio for Maximum returns
        </p>
      </div>
    </div>
  );
};

export default Splash;
