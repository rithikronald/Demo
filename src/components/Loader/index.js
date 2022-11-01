import { connect } from "react-redux";
import { ScaleLoader } from "react-spinners";

const Loader = (props) => {
  return props.loaderOpen ? (
    <div
      className="fixed top-0 left-0 h-screen w-screen "
      style={{ zIndex: 999, backdropFilter: "blur(7px)" }}
    >
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 1000 }}
      >
        <div class="flex space-x-2">
          <div aria-label="Loading..." role="status">
            <ScaleLoader color="#fff" />
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
