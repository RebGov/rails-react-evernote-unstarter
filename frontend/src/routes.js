// /login user sign in route
// /SignUP user sign up/create user route
// /  -> shows either 1)user notes controller page or 2) welcome page
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

// App Component:
check if token ? get user profile : redirect to welcome page
