import Chicken from "./images/Chicken.png";
import GameStart from "./images/GameStart.gif";
import Attend from "./images/Attend.gif";
import Template from "./images/TemplateEngine.gif";
import Workout from "./images/FitnessTracker.gif";
import CreditCard from "./images/creditCardValidation.gif";
import Commerce from "./images/Commerce.gif";

const projectArray = [
  {
    id: 1,
    name: "Attend",
    image: Attend,
    description:
      "This project takes advantage of a texting service to track attendance at events. A user texts a chosen keyword to the organization's telephone number, and is linked with the event that uses the same keyword. Their data is then dynamically captured and stored in a database, and becomes searchable in the app. The organizers can then review individuals' data and text them within the app to inform about future events, etc. Currently this app uses Clearstream for the texting aspects, but could easily be converted to a company like Twilio, Trumpia, or similar companies. This app was built using the MERN stack.",
    gitHub: "https://github.com/Andreloui5/Attendance",
  },
  {
    id: 2,
    name: "eCommerce Cart with Three.js",
    image: Commerce,
    description:
      "This eCommerce application integrates the Chec/Commerce.js API and SDK with React and Three.js. The ReadMe serves as a guide for other developers who wish to develop similar apps. This project is also featured on Commerce.js' website (https://commerce.js/resources).",
    gitHub: "https://github.com/Andreloui5/CommerceWithThree-part2",
  },
  {
    id: 3,
    name: "Credit Card Validation",
    image: CreditCard,
    description:
      "This project was a way for me to incorporate an interactive Three.js element into something practical— a validated credit card form. The form dynamically recognizes a user's credit card type and formats it properly, enforces proper inputs, and provides alerts if a user attempts to submit invalid data. I used react-three-fiber, Three.js, and React in this project.",
    codeSandbox:
      "https://codesandbox.io/s/credit-card-validation-with-threejs-tyumm",
  },
  {
    id: 4,
    name: "Appetite",
    image: Chicken,
    description:
      "A food app designed to prompt a user to input food or drink ingredients and to supply recipes that include those ingredients.",
    gitHub: "https://github.com/cmoraes2013/APPetite-Project",
  },
  {
    id: 5,
    name: "Trivia Game",
    image: GameStart,
    description:
      "This application is designed to walk the user through a series of trivia questions, and to present a score at the end. Each question is allotted 15seconds— with correct answers adding time to the clock, and incorrect answers subtracting time. The user's time remaining at the end of the questions is their final score.",
    gitHub: "https://github.com/Andreloui5/Quiz-Game",
  },
  {
    id: 6,
    name: "Template Engine",
    image: Template,
    description:
      "This application is designed to dynamically generate an html page that contains contact information for a whole team. The user is prompted to enter the information upon initialization. Once the user adds all members of their team, the application dynamically creates a syled html document containing the information they entered.",
    gitHub: "https://github.com/Andreloui5/TemplateEngine",
  },
  {
    id: 7,
    name: "Workout App",
    image: Workout,
    description:
      "This application is designed to allow a user to continually track their fitness goals and to view their workout data in various forms. At the homepage, a user is prompted to either continue an ongoing workout or to begin a new one. They are then asked about the details of the workout they'd like to enter. Some of the data entered is immediately visible on the homepage (like the cumulative duration of a workout), while more data is presented by the charts on the user dashboard.",
    gitHub: "https://github.com/Andreloui5/NoSQL_WorkoutApp",
  },
];

export default projectArray;
