// const React = require("react");
// const ReactDOM = require("react-dom/client");

function Book() {
  const image = React.createElement("img", {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_vuIWdS4z5Somcctla6_8buv6GTlsaZjOL8yQrvC_glExnt_M3Qrm0s&s",
    width: 250,
    height: 250,
    alt: "Physics Book Image",
  });

  const h4 = React.createElement("h4", null, "Title: Physics");
  const h3 = React.createElement("h3", null, "Price: ₹324/-");
  const bt = React.createElement("button", null, "Add To Cart");

  return React.createElement("div", { className: "card" }, image, h4, h3, bt);
}

function ThreeBook() {
  return React.createElement(
    "div",
    null,
    React.createElement(Book),
    React.createElement(Book),
    React.createElement(Book)
  );
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(React.createElement(ThreeBook));
