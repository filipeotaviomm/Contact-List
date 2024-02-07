import { ContactProvider } from "./providers/ContactContext";
import { UserProvider } from "./providers/UserContext";
import { RoutesMain } from "./routes/index";
import GlobalStyles from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <UserProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </UserProvider>
      <GlobalStyles />
      <ToastContainer autoClose={2 * 1000} />
    </>
  );
}

export default App;
