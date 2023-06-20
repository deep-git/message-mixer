const sectionOne = ["I hope", "I wish"];
const sectionTwo = ["you are having a"];
const sectionThree = ["great day", "fantastic day", "splendid afternoon", "great time"];

const messageContainer = {
    first_section: sectionOne,
    second_section: sectionTwo,
    third_section: sectionThree
};

let firstSelected = "";
let secondSelected = "";
let thirdSelected = "";

const randomValue = (arraySelected) => {
    let randNumber;
    randNumber = Math.floor(Math.random() * arraySelected.length);
    return arraySelected[randNumber];
};

firstSelected = randomValue(messageContainer['first_section']);
secondSelected = randomValue(messageContainer['second_section']);
thirdSelected = randomValue(messageContainer['third_section']);

console.log(`${firstSelected} ${secondSelected} ${thirdSelected}`);