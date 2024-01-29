import { RoutesMain } from "./routes/index";
import GlobalStyles from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RoutesMain />
      <GlobalStyles />
      <ToastContainer autoClose={2 * 1000} />
    </>
  );
}

export default App;
