const stringMiddleWare = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({ type: action });
  }
  return next(action);
};

export default stringMiddleWare;
