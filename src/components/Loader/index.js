import {connect} from 'react-redux'

const Loader = (props) => {
  return props.loaderOpen ? (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{zIndex: 1000}}>
      <div className="w-40 h-40 border-t-8 border-b-8 border-gray-400 rounded-full animate-spin"></div>
    </div>
  ) : (
    ""
  );
};

const mapStateToProps = (state) => {
    return {
        loaderOpen: state.loader.loaderOpen
    }
}

export default connect(mapStateToProps, null)(Loader)
