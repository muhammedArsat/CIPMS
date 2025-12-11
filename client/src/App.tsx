import ThemeProvider from "./hooks/ThemeContext";
import Routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Routes />
        <Toaster />
      </ThemeProvider>
    </div>
  );
};

export default App;
