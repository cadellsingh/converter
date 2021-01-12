import React, { useContext } from "react";
import { motion } from "framer-motion";
import MyContext from "../MyContext";

const Button = ({ text, displaySteps }) => {
  const { handleOnButtonClick } = useContext(MyContext);

  const displayButton = () => {
    return (
      displaySteps && (
        <motion.button
          name={text}
          onClick={handleOnButtonClick}
          whileHover={{ scale: 0.9 }}
          className="button"
        >
          Show Steps
        </motion.button>
      )
    );
  };

  return <div>{displayButton()}</div>;
};

export default Button;
