const capitalize = (inputText) => {
  if (typeof inputText !== "string") return "";
  const splitWord = inputText.split(" ");
  return inputText.indexOf(" ") === -1
    ? inputText.charAt(0).toUpperCase() + inputText.slice(1)
    : splitWord[0].charAt(0).toUpperCase() +
        splitWord[0].slice(1) +
        " " +
        capitalize(splitWord.slice(1).toString());
};

export default capitalize;
