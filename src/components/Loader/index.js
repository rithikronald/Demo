import { connect } from "react-redux";

const Loader = (props) => {
  return props.loaderOpen ? (
    <div className="fixed top-0 left-0 h-screen w-screen " style={{zIndex: 999, backdropFilter: 'blur(7px)',}}>
    <div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex: 1000 }}
    >
      <div class="flex space-x-2">
        <div aria-label="Loading..." role="status">
          <svg
            class="h-32 w-32 animate-spin stroke-white"
            viewBox="0 0 256 256"
          >
            <line
              x1="128"
              y1="32"
              x2="128"
              y2="64"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="224"
              y1="128"
              x2="192"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="128"
              y1="224"
              x2="128"
              y2="192"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="32"
              y1="128"
              x2="64"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
          </svg>
        </div>
      </div>
    </div>
    </div>
  ) : (
    ""
  );
};

const mapStateToProps = (state) => {
  return {
    loaderOpen: state.loader.loaderOpen,
  };
};

export default connect(mapStateToProps, null)(Loader);
