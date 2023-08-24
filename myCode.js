const wetherWidget = document.querySelector(".wether");
const button = document.querySelector(".wetherButton");

const handleClick = () => {
  const wetherClasses = wetherWidget.className;
  console.log(wetherClasses);
  if (wetherClasses.includes("isOpen")) {
    wetherWidget.className = "wether";
    return;
  } else {
    wetherWidget.className = "wether isOpen";
    return;
  }
};

button.addEventListener("click", handleClick);
