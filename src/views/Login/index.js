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
import countries from "../../constants/countries.json";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [OTP, setOTP] = useState("");
  const [countryCode, setCountryCode] = useState("🇮🇳 (+91) India");

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
    if (phoneNumber && isPolicyChecked && isTermsChecked) {
      requestOTP();
    } else if (!phoneNumber) {
      toast.warning("Invalid phone number", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (!isPolicyChecked || !isTermsChecked) {
      toast.warning("Please check all fields", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const verifyOTP = () => {
    window.confirmationResult
      .confirm(OTP)
      .then((result) => {
        const user = result.user;
        navigate("/dashboard");
        console.log("USER VERIFIED", user);
        toast.success("Logged in successfully !!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.log("USER NOT VERIFIED", error);
        toast.error("Please enter correct OTP", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const resendOTP = () => {
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(
      auth,
      `+${countryCode
        .split(" ")[1]
        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")} ` + phoneNumber,
      appVerifier
    )
      .then((confirmationResult) => {
        console.log("RES", confirmationResult);
        window.confirmationResult = confirmationResult;
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  useEffect(() => {
    OTP.length === 6 && verifyOTP();
  }, [OTP]);

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
                      value={countryCode}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setCountryCode(e.target.value);
                      }}
                      className="focus:outline-none font-semibold h-full w-full bg-transparent text-white text-xl rounded-2xl focus:ring-bg focus:border-bg"
                    >
                      {countries.map((item) => {
                        return (
                          <option>
                            {item?.flag} ({item?.dial_code}) {item?.name}
                          </option>
                        );
                      })}
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
                        id="referalCode"
                        placeholder="Referal Code*(Optional)"
                        // value={phoneNumber}
                        // onChange={(e) => setPhoneNumber(e.target.value)}
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
          <div className="innerContaner w-full h-full flex  flex-col py-10 gap-16 items-center justify-center 2.5xl:w-[80%] 3xl:w-[60%]">
            <p className="text-white text-center text-2xl font-bold ">
              Fill the code
            </p>
            <p className="text-white text-center text-base font-medium  ">
              Code is sent. If you still didn’t get the code, please make sure
              you’ve filled your phone number correctly
            </p>
            <div className="inputContainer w-full flex items-center justify-center">
              <OTPInput
                value={OTP}
                onChange={(val) => {
                  console.log(val);
                  setOTP(val);
                }}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                inputStyles={{
                  backgroundColor: "#00000000",
                  color: "#fff",
                  borderWidth: "2px",
                  borderColor: "#9c27b0",
                  borderRadius: 10,
                  width: "50px",
                  height: "50px",
                  fontWeight: 600,
                  // marginLeft:5
                }}
              />
            </div>
            <div className="checkboxRow w-full items-center flex flex-col m-1">
              <div className="flex items-center">
                <p className="text-base text-center text-white font-normal 4xl:text-2xl">
                  Didn’t get the code?
                </p>
                <button
                  onClick={resendOTP}
                  className="rounded-xl text-purple-600 ml-1 text-sm font-semibold"
                >
                  Resend OTP
                </button>
              </div>
              <ThemeButton
                text="Verify"
                //  onClick={verifyOTP}
                className="mt-3 w-[70%]"
              />
            </div>
          </div>
        )}
        <div id="sign-in-button"></div>
      </div>
    </div>
  );
};

export default Login;
