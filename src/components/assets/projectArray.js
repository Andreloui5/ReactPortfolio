import Chicken from "./images/Chicken.png";
import GameStart from "./images/GameStart.gif";
import Attend from "./images/Attend.gif";
import Template from "./images/TemplatingEngine.gif";
import Workout from "./images/FitnessTracker.gif";

const projectArray = [
  {
    id: 1,
    name: "Attend",
    image: Attend,
    description:
      "This project takes advantage of a texting service to track attendance at events. A user texts a chosen keyword to the organization's telephone number, and is linked with the event that uses the same keyword. Their data is then dynamically captured and stored in a database, and becomes searchable in the app. The organizers can then review individuals' data and text them within the app to inform about future events, etc. Currently this app uses Clearstream for the texting aspects, but could easily be converted to a company like Twilio, Trumpia, or similar companies. This app was built using the MERN stack."
  },
  {
    id: 2,
    name: "Appetite",
    image: Chicken,
    description:
      "A food app designed to prompt a user to input food or drink ingredients and to supply recipes that include those ingredients."
  },
  {
    id: 3,
    name: "Trivia Game",
    image: GameStart,
    description:
      "This application is designed to walk the user through a series of trivia questions, and to present a score at the end. Each question is allotted 15seconds— with correct answers adding time to the clock, and incorrect answers subtracting time. The user's time remaining at the end of the questions is their final score."
  },
  {
    id: 4,
    name: "Template Engine",
    image: Template,
    description:
      "This application is designed to dynamically generate an html page that contains contact information for a whole team. The user is prompted to enter the information upon initialization. Once the user adds all members of their team, the application dynamically creates a syled html document containing the information they entered."
  },
  {
    id: 5,
    name: "Workout App",
    image: Workout,
    description:
      "This application is designed to allow a user to continually track their fitness goals and to view their workout data in various forms. At the homepage, a user is prompted to either continue an ongoing workout or to begin a new one. They are then asked about the details of the workout they'd like to enter. Some of the data entered is immediately visible on the homepage (like the cumulative duration of a workout), while more data is presented by the charts on the user dashboard."
  }
];

export default projectArray;
