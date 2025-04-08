import React, { CSSProperties, useState } from "react";
import { setSignInStatus } from "../../app/reducers/authReducer";
import { useDispatch } from "react-redux";

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
        <p>Login to Continue</p>
        <div style={styles.inputFieldContainerStyle}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            style={styles.inputFieldStyle}
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            style={styles.inputFieldStyle}
          />
        </div>
        <button onClick={handleOnClick}>SignIn</button>
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
};
