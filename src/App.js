import "./App.css";
import NumberSystemRow from "./components/NumberSystemRow";
import Calculations from "./components/Calculations";
import Header from "./components/Header";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <div>
      <Header />
      <GlobalProvider>
        <NumberSystemRow />
        <Calculations />
      </GlobalProvider>
    </div>
  );
};

export default App;
