import Login from "../pages/login";
// import Cookies from "js-cookie";
// import cookies from "next-cookies";
import { useSelector } from "react-redux";

const withAuth = (Component) => {
  const Auth = (props) => {
    // Login data added to props via redux-store (or use react context for example)
    const reduxState = useSelector((state) => state);
    const isLoggedIn = reduxState.auth.userData?.token;

    // console.log(isLoggedIn);
    // If user is not logged in, return login component
    if (!isLoggedIn) {
      return <Login />;
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
