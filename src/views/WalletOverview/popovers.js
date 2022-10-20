export const Processing = (props) => {
  return !props.on ? (
    ""
  ) : (
    <div
      className="fixed top-0 left-0 h-screen w-screen"
      style={{ zIndex: 999, backdropFilter: "blur(7px)" }}
    >
      <div
        style={{
          background:
            "linear-gradient(113.81deg, rgba(150, 51, 180, 0.7) 4.51%, rgba(26, 21, 58, 0.7) 101.36%)",
        }}
        className="w-[700px] h-[440px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>
    </div>
  );
};
export const Successful = (props) => {
  return !props.on ? (
    ""
  ) : (
    <div
      className="fixed top-0 left-0 h-screen w-screen"
      style={{ zIndex: 999, backdropFilter: "blur(7px)" }}
    >
      <div
        style={{
          background:
            "linear-gradient(113.81deg, rgba(150, 51, 180, 0.7) 4.51%, rgba(26, 21, 58, 0.7) 101.36%)",
        }}
        className="w-[700px] h-[440px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>
    </div>
  );
};
export const Failed = (props) => {
  return !props.on ? (
    ""
  ) : (
    <div
      className="fixed top-0 left-0 h-screen w-screen"
      style={{ zIndex: 999, backdropFilter: "blur(9px)" }}
    >
      <div
        style={{
          background:
            "linear-gradient(113.81deg, rgba(150, 51, 180, 0.8) 4.51%, rgba(26, 21, 58, 0.8) 101.36%)",
        }}
        className="w-[700px] h-[440px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[15px] pt-[60px]"
      >
        <div className="flex items-end justify-center">
          <img src={require("../../assets/infoError.png")} />
          <div className="font-mont text-white font-bold text-[32px] ml-[60px]">
            2 Assets <br />
            failed
          </div>
        </div>
        <div className="absolute bottom-[30px] left-[30px] flex">
          <div
            className="w-[300px] h-[74px] rounded-lg flex justify-center items-center font-mont font-bold  text-[24px] cursor-pointer"
            style={{
              background:
                "radial-gradient(86.8% 325.5% at 8% 0%, #D446F1 0%, #9A35EB 100%)",
            }}
            onClick={() => props.turn(false)}
          >
            Go Back
          </div>
          <div
            className="w-[300px] h-[74px] rounded-lg ml-[30px] flex justify-center items-center font-mont font-bold text-[24px] text-white"
            style={{
              background:
                "radial-gradient(86.8% 325.5% at 8% 0%, #D446F1 0%, #9A35EB 100%)",
            }}
          >
            Try Again
          </div>
        </div>
      </div>
    </div>
  );
};
