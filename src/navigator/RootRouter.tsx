import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import { IAuthState } from "../app/reducers/authReducer";
import SignIn from "../pages/SignIn";
import { useSelector } from "react-redux";

interface State {
  authReducer: IAuthState;
}
const RootRouter: React.FC = () => {
  const { isUserLoggedIn } = useSelector((state: State) => state.authReducer);

  return (
    <Routes>
      <Route path="/" element={isUserLoggedIn ? <Home /> : <SignIn />} />
    </Routes>
  );
};

export default RootRouter;
