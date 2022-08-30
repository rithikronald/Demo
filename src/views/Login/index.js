import { ThemeButton } from "../../components/themeButton";
import "./style.css";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="App bg-bgl1 flex h-screen w-full">
      {/* Left Banner */}
      <div className="Left w-1/2 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 px-15 flex flex-col justify-around">
        <div className="innerConttainer  w-full h-full  flex  flex-col py-20 items-center justify-center">
          <img
            alt="welcomeImg"
            className="h-1/2 3xl:h-1/3 m-10"
            src={require("../../assets/welcomeImg.png")}
          />

          <div className="items-center justify-center flex flex-col">
            <p className="text-xl text-center text-white 3xl:text-2xl ">
              AI Powered financial manager
            </p>
            <p className="text-3xl text-center text-white font-semibold 3xl:text-4xl w-3/4 mt-2">
              Personalised portfolio for Maximum returns
            </p>
          </div>
        </div>
      </div>
      {/* Right Banner */}
      <div className="Right w-1/2  p-20  flex flex-col items-center px-40">
        <div className="innerContaner w-full h-full flex  flex-col py-10 items-center justify-center 2.5xl:w-[80%] 3xl:w-[60%]">
          <p className="text-white text-center text-2xl font-semibold 3xl:text-4xl ">
            Your Phone Number
          </p>
          <div className="inputContainer flex  flex-col  w-full items-center mt-10">
            <div className="inputCard w-full mt-4 h-20  rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-20">
              <div className="bg-bg rounded-2xl h-full flex flex-col  justify-between p-3">
                <select
                  id="countries"
                  className="focus:outline-none h-full w-full bg-transparent text-white text-xl rounded-2xl focus:ring-bg focus:border-bg"
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
            <div className="inputCard w-full mt-4 h-20  rounded-2xl bg-gradient-to-l from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-20">
              <div className="bg-bg rounded-2xl h-full flex flex-row items-center justify-between">
                <div className="flex flex-col h-full w-full">
                  <input
                    type="number"
                    className="
                    rounded-2xl
                    bg-transparent
                    form-control
                    w-full
                    h-full
                    p-4
                    font-normal
                    text-xl
                    text-white
                    placeholder-white
                    "
                    id="numberInput"
                    placeholder="Number input"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="termsAndConditions justify-center flex flex-col mt-8">
            <div className="checkboxRow justify-between flex m-1">
              <p className="font-light text-white 3xl:text-2xl w-[90%]">
                I have read and accept the
                <a href="#" className="text-purple-800 mx-2">
                  Privacy Policy
                </a>
                and agree that my personal data will be processed.
              </p>
              <input type="checkbox" class="checked:bg-purple-800" />
            </div>
            <div className="checkboxRow justify-between flex m-1 mt-3">
              <p className="font-light text-base  text-white 3xl:text-2xl w-3/4">
                I have read and accept the
                <a href="" className=" text-purple-800 mx-2">
                  Terms of Use.
                </a>
              </p>
              <input type="checkbox" class="checked:bg-bg" />
            </div>
          </div>
          <ThemeButton text="Next" className={"mt-16"} onClick={()=>navigate('/otpVerification')} />
        </div>
      </div>
    </div>
  );
};

export default Login;
