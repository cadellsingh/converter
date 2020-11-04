import "./App.css";
import { binaryToHex, binaryToDecimal } from "./helper";

const App = () => {
  const testValue = "0101010101011101";

  const hexa = binaryToHex(testValue);
  const decimal = binaryToDecimal(testValue);

  console.log(hexa);
  console.log(decimal);

  return <h1>test</h1>;
};

export default App;

// create helper functions folder
// binaryToHex.js
// binaryToDecimal.js
// and so on
