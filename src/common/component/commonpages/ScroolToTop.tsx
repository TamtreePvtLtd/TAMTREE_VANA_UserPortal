import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";

interface scrollToTopProps {
    scrollFunction: () => void;
}

const ScrollToTop:React.FC<scrollToTopProps>= ({scrollFunction}) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
      scrollFunction()
  };

  return (
    <Box>
      {showTopBtn && (
        <KeyboardArrowUpIcon
          sx={{ color: "white" }}
          onClick={goToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "30px",
            height: "50px",
            width: "50px",
            cursor: "pointer",
            backgroundColor: "#1556fe",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            zIndex: "1",
            borderRadius: "50%",
          }}
        />
      )}
    </Box>
  );
};
export default ScrollToTop;