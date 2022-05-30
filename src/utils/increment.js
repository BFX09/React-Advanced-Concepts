const Increment = (currentPosition, arrayLength, rightOrLeft) => {
  if (rightOrLeft === "left") {
    if (currentPosition > 0) return currentPosition - 1;
    else return arrayLength - 1;
  } else if (rightOrLeft === "right") {
    if (currentPosition !== arrayLength - 1) return currentPosition + 1;
    else return 0;
  }
};

export default Increment;