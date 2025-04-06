import React from "react";
import { setSignInStatus } from "../../app/reducers/authReducer";
import { useDispatch } from "react-redux";

const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setSignInStatus(true));
    console.log("Clicked");
  };

  return (
    <div style={styles.backgroundStyle}>
      <div style={styles.mainContainerStyle}>
        <button onClick={handleOnClick}>SignIn</button>
      </div>
    </div>
  );
};

export default SignIn;

const styles = {
  backgroundStyle: {
    backgroundColor: "#121212",
    display: "flex",
    flex: 1,
    backgroundImage: "url(https://source.unsplash.com/random)",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainerStyle: {
    backgroundColor: "#202020",
    height: "300px",
    width: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
};
