import { ContactProvider } from "./providers/ContactContext";
import { UserProvider } from "./providers/UserContext";
import { RoutesMain } from "./routes/index";
import GlobalStyles from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <UserProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </UserProvider>
      <GlobalStyles />
      <ToastContainer autoClose={2 * 1000} position="bottom-right" />
    </>
  );
}

export default App;
