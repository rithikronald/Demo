import { ThemeButton } from "../../components/themeButton";
import "./style.css";

const Login = () => {
  return (
    <div className="App bg-bgl1 flex h-screen w-full">
      {/* Left Banner */}
      <div className="Left w-1/2 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 px-15 flex flex-col justify-around">
        <div className="innerConttainer  w-full h-full  flex  flex-col py-20 items-center justify-center">
          <img
            alt="welcomeImg"
            className="h-1/2 m-10"
            src={require("../../assets/welcomeImg.png")}
          />

          <div className="items-center justify-center flex flex-col">
            <p className="text-xl text-center text-white font-medium 3xl:text-3xl ">
              AI Powered financial manager
            </p>
            <p className="text-3xl text-center text-white font-semibold 4xl:text-4xl w-3/4">
              Personalised portfolio for Maximum returns
            </p>
          </div>
        </div>
      </div>
      {/* Right Banner */}
      <div className="Right w-1/2  p-20  flex flex-col justify-around px-40">
        <div className="innerContaner w-full h-full flex  flex-col py-10 items-center justify-between ">
          <p className="text-white text-center text-2xl font-semibold ">
            Your Phone Number
          </p>
          <div className="inputContainer flex  flex-col  w-full items-center">
            <div className="inputCard w-full mt-4 h-20  rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5 3xl:h-20">
              <div className="bg-bg rounded-2xl h-full flex flex-col  justify-between ">
                <select
                  id="countries"
                  className="focus:outline-none h-full w-full bg-transparent text-gray-500 text-lg rounded-2xl focus:ring-bg focus:border-bg p-3"
                >
                  <option selected value="+91">
                    India (+91)
                  </option>
                  <option value="+1">United States (+1)</option>

                  <option value="+33">France (+33)</option>
                  <option value="+49">Germany (+49)</option>
                </select>
              </div>
            </div>
            <div className="inputCard w-full mt-4 h-20  rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5 3xl:h-20">
              <div className="bg-bg rounded-2xl h-full flex flex-row items-center justify-between">
                <div className="flex flex-col h-full w-full">
                  <input
                    type="number"
                    className="
                    rounded-2xl
                    bg-transparent
        form-control
        block
        w-full
        h-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        
        border border-solid border-gray-300
        
        transition
        ease-in-out
        m-0
        focus:text-white focus:bg-transparent focus:border-none focus:outline-none
      "
                    id="numberInput"
                    placeholder="Number input"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="termsAndConditions justify-center flex flex-col ">
            <div className="checkboxRow justify-between flex m-1">
              <p className="text-base text-white font-normal 3xl:text-2xl">
                I have read and accept the
                <a href="" className="text-purple-800 ">
                  Privacy Policy
                </a>
                and agree that my personal data will be processed
              </p>
              <input type="checkbox" class="checked:bg-purple-800" />
            </div>
            <div className="checkboxRow justify-between flex m-1">
              <p className="text-base  text-white font-normal 4xl:text-2xl w-3/4">
                I have read and accept the
                <a href="" className=" text-purple-800 ">
                  Terms of Use
                </a>
              </p>
              <input type="checkbox" class="checked:bg-bg" />
            </div>
          </div>
          <ThemeButton text="Next" />
        </div>
      </div>
    </div>
  );
};

export default Login;
