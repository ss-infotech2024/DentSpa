// client/components/data/data.js

// import logo1 from "../../assets/1.jpg";
import logo2 from "../../assets/2.jpg";
import logo3 from "../../assets/3.jpg";
import logo4 from "../../assets/5.jpg";
import logo5 from "../../assets/7.jpg";
import logo6 from "../../assets/11.jpg";

// Define category with label and their image arrays
export const portfolioData = {
  ALL: [ logo2, logo3, logo4, logo5, logo6],
  "GUM LIFT": [ logo4],
  "TEETH WHITENING": [logo2, logo6],
  "COMPOSITE BONDING": [logo3],
  "INVISALIGN®": [logo5],
  "PORCELAIN VENEERS": [ logo2],
  "DENTAL IMPLANTS": [logo4],
  "CROWNS / BRIDGES": [logo6],
};

// Export only the filter names (keys)
export const filters = Object.keys(portfolioData);
