import React, { CSSProperties, useState } from "react";
import { setSignInStatus } from "../../app/reducers/authReducer";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";

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

interface Styles {
  backgroundStyle: CSSProperties;
  mainContainerStyle: CSSProperties;
  inputFieldContainerStyle: CSSProperties;
  inputFieldStyle: CSSProperties;
  imageContainerStyle: CSSProperties;
  subHeadingTextStyle: CSSProperties;
  checkboxContainerStyle: CSSProperties;
  checkboxTextStyle: CSSProperties;
  signInButtonStyle: CSSProperties;
  separatorStyle: CSSProperties;
  otherOptionsContainerStyle: CSSProperties;
  linkTextStyle: CSSProperties;
  dotSeparatorStyle: CSSProperties;
  checkboxStyle: CSSProperties;
}

const styles: Styles = {
  backgroundStyle: {
    backgroundImage:
      "url('https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/wac.92a80da2.svg')",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  },
  mainContainerStyle: {
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
    display: "flex",
    flexDirection: "column",
    padding: "36px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "6px",
  },
  inputFieldContainerStyle: {
    display: "flex",
    flexDirection: "column",
    marginTop: "24px",
    marginBottom: "24px",
  },
  inputFieldStyle: {
    padding: "12px",
    border: "1px solid black",
    borderRadius: "2px",
    marginBottom: "12px",
    width: "16vw",
  },
  imageContainerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "12vh",
    width: "16vh",
  },
  subHeadingTextStyle: {
    fontSize: 16,
  },
  checkboxContainerStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "8px",
    cursor: "pointer",
  },
  checkboxTextStyle: {
    fontSize: 14,
  },
  signInButtonStyle: {
    padding: "12px",
    backgroundColor: "#0052cc",
    color: "white",
    border: "none",
    borderRadius: "4px",
    width: "16vw",
    cursor: "pointer",
    marginBottom: "12px",
  },
  separatorStyle: {
    width: "80%",
    height: "2px",
    backgroundColor: "#ccc",
    margin: "16px 0",
  },
  otherOptionsContainerStyle: {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    alignItems: "center",
    justifyContent: "center",
  },
  linkTextStyle: {
    fontSize: 12,
    color: "#0052cc",
    cursor: "pointer",
  },
  dotSeparatorStyle: {
    width: "4px",
    height: "4px",
    borderRadius: "100%",
    backgroundColor: "#000",
  },
  checkboxStyle: {
    width: "16px",
    height: "16px",
    cursor: "pointer",
  },
};
