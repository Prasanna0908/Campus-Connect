import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ children, history }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history.location]);

  return children;
}

export default withRouter(ScrollToTop);