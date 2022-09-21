const Loader = () => {
  return props.open ? (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-40 h-40 border-t-8 border-b-8 border-gray-400 rounded-full animate-spin"></div>
    </div>
  ) : (
    ""
  );
};
