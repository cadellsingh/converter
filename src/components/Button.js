import React, { useContext } from "react";
import { motion } from "framer-motion";
import { GlobalContext } from "../context/GlobalState";

const Button = ({ text, displaySteps }) => {
  const { setShowStepsFor } = useContext(GlobalContext);

  const displayButton = () => {
    return (
      displaySteps && (
        <motion.button
          name={text}
          onClick={(e) => setShowStepsFor(e.target.name)}
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
