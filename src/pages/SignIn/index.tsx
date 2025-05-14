import React, { useState } from "react";
import { setSignInStatus } from "../../app/reducers/authReducer";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import { styles } from "./styles";

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnClick = () => {
    dispatch(setSignInStatus(true));
    console.log("Clicked");
  };

  return (
    <div style={styles.backgroundStyle}>
      <div style={styles.mainContainerStyle}>
        <div style={styles.imageContainerStyle}>
          <img src={logo} width={450} height={450} alt="logo" />
        </div>
        <h5 style={styles.subHeadingTextStyle}>Sign in to continue</h5>
        <form style={styles.inputFieldContainerStyle}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            style={styles.inputFieldStyle}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            style={styles.inputFieldStyle}
          />
          <label style={styles.checkboxContainerStyle}>
            <input
              type="checkbox"
              name="remember"
              style={styles.checkboxStyle}
            />
            <p style={styles.checkboxTextStyle}>Remember me</p>
          </label>
        </form>
        <button style={styles.signInButtonStyle} onClick={handleOnClick}>
          Sign In
        </button>
        {/* separation line */}
        <div style={styles.separatorStyle} />
        <div style={styles.otherOptionsContainerStyle}>
          <p style={styles.linkTextStyle}>Forgot Password?</p>
          <div style={styles.dotSeparatorStyle} />
          <p style={styles.linkTextStyle}>Create Account</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
