//COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin", 
                "Big Daddy", 
                "Father Christmas"];
let insertY = ["the soup kitchen",
                "Disneyland",
                "the White House"]
let insertZ = ["spontaneously combusted",
                "melted into a puddle on the sidewalk",
                "urned into a slug and crawled away"]


function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);


    if (customName.value !== '') {
        newStory = newStory.replace("Bob", customName.value);
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300/14);
        let temperature =  Math.round((94-32)*5/9);
        newStory = newStory.replace("94", temperature).replace("fahrenheit","centigrade").replace("300", weight).replace("pounds","stones");
     

    }
    

    newStory = newStory.replace(":insertx:", xItem)
                        .replace(":inserty:", yItem)
                        .replace(":insertz:", zItem)
                        .replace(":insertx:", xItem);

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
