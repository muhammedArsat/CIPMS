import AuthProvider from "./hooks/AuthContext";
import ThemeProvider from "./hooks/ThemeContext";
import Routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <AuthProvider>
        <ThemeProvider>
          <Routes />
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
