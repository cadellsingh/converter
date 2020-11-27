import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, displaySteps, handleOnButtonClick }) => {
  const displayButton = () => {
    return (
      displaySteps && (
        <motion.button
          name={text}
          onClick={handleOnButtonClick}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, rotate: -50 }}
        >
          Show Steps
        </motion.button>
      )
    );
  };

  return <div className="button">{displayButton()}</div>;
};

export default Button;

// return (
//     displaySteps && (
//         <button name={text} onClick={handleOnButtonClick}>
//             Show Steps
//         </button>
//     )
// );
