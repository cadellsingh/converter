import "./App.css";
import { binaryToHex } from "./utils/binaryToHex";
import { binaryToDecimal } from "./utils/binaryToDecimal";
import { decimalToBinary } from "./utils/decimalToBinary";
import { hexadecimalToDecimal } from "./utils/hexadecimalToDecimal";

const App = () => {
  const hexadecimal = "e7aa9";

  const decimal = hexadecimalToDecimal(hexadecimal);

  console.log(decimal);

  return (
    <div>
      <h1>test</h1>
      <h1>more testong</h1>
    </div>
  );
};

export default App;
