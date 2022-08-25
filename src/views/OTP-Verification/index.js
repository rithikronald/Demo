import { GradientContainer } from "../../components/GradientContainer";
import { ThemeButton } from "../../components/themeButton";

const OTPVerification = () => {
  const OTPinput = ({ id }) => {
    return (
      <input
        id={id}
        maxlength="1"
        type="text"
        className="h-full w-full bg-transparent text-white text-2xl rounded-2xl text-center form-control "
      />
    );
  };
  return (
    <div className="App bg-bgl1 flex h-screen w-full">
      {/* Left Banner */}
      <div className="Left w-1/2 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 px-15 flex flex-col justify-around">
        <div className="innerConttainer  w-full h-full  flex  flex-col py-20 items-center justify-center">
          <div className="items-center justify-center flex flex-col">
            <p className="text-lg text-center text-white font-medium 3xl:text-3xl ">
              AI Powered financial manager
            </p>
            <p className="text-3xl text-center text-white font-medium 4xl:text-4xl w-4/5">
              Personalised portfolio for Maximum returns
            </p>
          </div>
        </div>
      </div>
      {/* Right Banner */}
      <div className="Right w-1/2  p-20  flex flex-col justify-around px-40">
        <div className="innerContaner w-full h-full flex  flex-col py-10 items-center justify-between ">
          <p className="text-white text-center text-2xl font-bold ">
            Fill the code
          </p>
          <p className="text-white text-center text-base font-medium  ">
            Code is sent. If you still didn’t get the code, please make sure
            you’ve filled your phone number correctly
          </p>
          <div className="inputContainer flex w-full items-center justify-around">
            {Array.apply(null, Array(4)).map((index, data) => (
              <GradientContainer children={<OTPinput id={index} />} />
            ))}
          </div>
          <div className="checkboxRow w-full justify-between  flex flex-col m-1">
            <p className="text-base text-center text-white font-normal 4xl:text-2xl mb-4">
              Didn’t get the code?
            </p>
            <ThemeButton text="Resend" />
            p-0.5
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
