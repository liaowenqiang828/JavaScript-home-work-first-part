var colors = ["Red", "Green", "White", "Black"];

function joinArrayElement(array, seperator) {
  switch (seperator) {
    case (" "):
      console.log(array.join(" "));
      break;

    case ("+"):
      console.log(array.join("+"));
      break;

    case (","):
    console.log(array.toString());
    break;

    default:
      console.log("Please input right array and seperator like  ' ', '+', ','" );
  }
}
var seperator = " ";
joinArrayElement(colors, seperator);