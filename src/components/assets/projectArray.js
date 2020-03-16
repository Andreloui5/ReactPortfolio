import Chicken from "./images/Chicken.png";
import GameStart from "./images/GameStart.gif";

const projectArray = [
  {
    id: 1,
    name: "Appetite",
    image: Chicken,
    description:
      "A food app designed to prompt a user to input food or drink ingredients and to supply recipes that include those ingredients."
  },
  {
    id: 2,
    name: "Trivia Game",
    image: GameStart,
    description:
      "This application is designed to walk the user through a series of trivia questions, and to present a score at the end. Each question is allotted 15seconds— with correct answers adding time to the clock, and incorrect answers subtracting time. The user's time remaining at the end of the questions is their final score."
  }
];

export default projectArray;
