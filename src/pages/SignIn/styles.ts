import { CSSProperties } from "react";

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

export const styles: Styles = {
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
    boxShadow: "#282828 0px 0px 10px",
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
