import React, { useContext } from "react";
import { motion } from "framer-motion";
import MyContext from "./MyContext";

const Button = ({ text, displaySteps }) => {
  const { handleOnButtonClick } = useContext(MyContext);

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
