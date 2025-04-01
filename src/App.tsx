import {BrowserRouter} from "react-router";
import RootRouter from "./navigator/RootRouter.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <RootRouter />
      </BrowserRouter>
    </>
  )
}

export default App
