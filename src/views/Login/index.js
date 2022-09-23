import { ThemeButton } from "../../components/themeButton";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../src/firebas-config";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useEffect, useState } from "react";
import { GradientContainer } from "../../components/GradientContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [OTP, setOTP] = useState("");

  const generateRecaptcha = () => {
    return (window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          console.log("CAPTCHA RESPONSE", response);
          // navigate("/otpVerification");
          setPageIndex(1);
        },
      },
      auth
    ));
  };

  const requestOTP = () => {
    console.log("OTP REQUESTED");
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, "+91 " + phoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log("RES", confirmationResult);
        window.confirmationResult = confirmationResult;
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  useEffect(() => {
    console.log("Policy Checked", isPolicyChecked);
    console.log("Terms Checked", isTermsChecked);
  }, [isPolicyChecked, isTermsChecked]);

  const validation = () => {
    if (phoneNumber.length == 10 && isPolicyChecked && isTermsChecked) {
      requestOTP();
    } else {
      toast.warning("Invalid input fields", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const verifyOTP = () => {
    window.confirmationResult
      .confirm(OTP)
      .then((result) => {
        const user = result.user;
        console.log("USER VERIFIED", user);
      })
      .catch((error) => {
        console.log("USER NOT VERIFIED", error);
      });
  };

  const resendOTP = () => {
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, "+91 " + phoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log("RES", confirmationResult);
        window.confirmationResult = confirmationResult;
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  return (
    <div className="App flex h-screen w-full font-mont">
      {/* Left Banner */}
      <div className="Left  w-1/2 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 px-15 flex flex-col justify-around">
        <div className="innerConttainer  w-full h-full  flex  flex-col py-20 items-center justify-center">
          <img
            alt="welcomeImg"
            className="h-[40%] 3xl:h-1/3 m-10"
            src={require("../../assets/welcomeImg.png")}
          />
          <div className="items-center justify-center flex flex-col">
            <p className="text-md font-semibold text-center text-white 3xl:text-2xl ">
              AI Powered financial manager
            </p>
            <p className="text-3xl text-center text-white font-semibold 3xl:text-4xl w-3/4 mt-2">
              Personalised portfolio for Maximum returns
            </p>
          </div>
        </div>
      </div>
      {/* Right Banner */}
      <div className="Right bg-gradient-to-tl from-bg via-bgl1 to-darkPurple w-1/2  p-20  flex flex-col items-center px-40">
        <ToastContainer hideProgressBar autoClose={1000} closeOnClick />
        {pageIndex == 0 && (
          <div className="innerContaner w-full h-full flex  flex-col py-10 items-center justify-center 2.5xl:w-[80%] 3xl:w-[60%]">
            <p className="text-white text-center text-2xl font-semibold 3xl:text-4xl ">
              Your Phone Number
            </p>
            <div className="inputContainer flex  flex-col  w-full items-center mt-10">
              <GradientContainer
                width="w-full"
                height="h-20"
                className={"mt-4"}
                children={
                  <div className="rounded-2xl w-full  h-full flex flex-col  justify-between p-3">
                    <select
                      id="countries"
                      className="focus:outline-none font-semibold h-full w-full bg-transparent text-white text-xl rounded-2xl focus:ring-bg focus:border-bg"
                    >
                      <option selected value="+91">
                        India (+91)
                      </option>
                      <option value="+1">United States (+1)</option>

                      <option value="+33">France (+33)</option>
                      <option value="+49">Germany (+49)</option>
                    </select>
                  </div>
                }
              />
              <GradientContainer
                height="h-20"
                width="w-full"
                className={"mt-4"}
                children={
                  <div className="rounded-2xl h-full flex flex-row items-center justify-between">
                    <div className="flex flex-col h-full w-full">
                      <input
                        type="text"
                        class="form-control text-xl text-white w-full h-full  rounded-2xl flex  px-3 py-1.5 placeholder-gray-600 font-semibold bg-clip-padding transition ease-in-out bg-transparent `focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                        id="phoneNumber"
                        placeholder="Enter Phone Number"
                        maxLength={10}
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                }
              />
            </div>
            <div className="termsAndConditions justify-center flex flex-col mt-8">
              <div className="checkboxRow justify-between items-center flex m-1">
                <p className="font-light text-white 3xl:text-2xl w-[90%]">
                  I have read and accept the
                  <a href="#" className="text-purple-800 mx-2">
                    Privacy Policy
                  </a>
                  and agree that my personal data will be processed.
                </p>
                <input
                  checked={isPolicyChecked}
                  id="remember"
                  type="checkbox"
                  value=""
                  onChange={() =>
                    setIsPolicyChecked((prev) => (prev ? false : true))
                  }
                  class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="checkboxRow justify-between items-center flex m-1 mt-3">
                <p className="font-light text-base  text-white 3xl:text-2xl w-3/4">
                  I have read and accept the
                  <a href="" className=" text-purple-800 mx-2">
                    Terms of Use.
                  </a>
                </p>
                <input
                  checked={isTermsChecked}
                  onChange={() =>
                    setIsTermsChecked((prev) => (prev ? false : true))
                  }
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
            </div>
            <ThemeButton text="Next" className={"mt-16"} onClick={validation} />
          </div>
        )}
        {pageIndex == 1 && (
          <div className="innerContaner w-full h-full flex  flex-col py-10 items-center justify-between ">
            <p className="text-white text-center text-2xl font-bold ">
              Fill the code
            </p>
            <p className="text-white text-center text-base font-medium  ">
              Code is sent. If you still didn’t get the code, please make sure
              you’ve filled your phone number correctly
            </p>
            <div className="inputContainer w-full justify-around">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                secure
                inputStyles={{
                  backgroundColor: "#00000000",
                  color: "#fff",
                  borderWidth: "2px",
                  borderColor: "#9c27b0",
                  borderRadius: 10,
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <div className="checkboxRow w-full justify-between  flex flex-col m-1">
              <div className="flex items-center mb-4">
                <p className="text-base text-center text-white font-normal 4xl:text-2xl">
                  Didn’t get the code?
                </p>
                <button
                  onClick={resendOTP}
                  className="text-purple-600 ml-2 text-sm font-semibold"
                >
                  Resend OTP
                </button>
              </div>
              <ThemeButton text="Verify" onClick={verifyOTP} />
            </div>
          </div>
        )}
        <div id="sign-in-button"></div>
      </div>
    </div>
  );
};

export default Login;
