import Routes from "./routes/routes";
import  { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <Routes />
      <Toaster />
    </div>
  );
};

export default App;
