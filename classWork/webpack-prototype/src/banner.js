

import _ from "lodash";

import "./banner.css";

const createBanner = () => {
  const link = document.createElement("a");
  link.innerHTML = _.join(["Learn", "Webpack", "Today"], "*");
  link.href = "https://webpack.academy/";
  link.target = "_blank";
  link.classList = "banner";
  return link;
};

export default createBanner;