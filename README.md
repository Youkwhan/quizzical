# quizzical
Immerse yourself in a world of trivia where curiosity is rewarded!

**Link to project:** [https://harmonious-begonia-821825.netlify.app/](https://harmonious-begonia-821825.netlify.app/)

## Overview
Quizzical is the ultimate online trivia quiz designed to test your knowledge across a variety of categories. With Quizzical, players can engage in a fun and challenging experience, answering 5 random questions at a time. These trivia questions are retrieved from the Open Trivia Database API, ensuring a diverse range of content for endless entertainment.

## Demo Video

https://github.com/Youkwhan/quizzical/assets/37788922/b5249c59-4f62-4415-8b4e-463794e275ff

## Features:
- **Vast Question Bank:** Quizzical utilizes the Open Trivia Database API to access a wide array of trivia questions covering various categories.
- **Randomized Questions:** Each round presents players with 5 random questions, ensuring a unique experience every time.
- **Answer Validation:** Participants can validate their answers after completing all the questions, allowing them to assess their knowledge and accuracy.

### Built with: 
- HTML, CSS, JavaScript, React.js, Figma


## Setup
To run Quizzical locally, follow these steps:
1. clone the repository: `git clone https://`
2. Install the required dependencies: `npm install`
3. Start the application: `npm run dev`
or
- visit the site [link](#quizzical)

## Approach
<details>
  <summary><strong>1. Initial Structure and Styling:</strong></summary> 
  <p>We started by creating the general structure of our application and implementing custom CSS. Our main components include QuizMenus.jsx, Quiz.jsx, and Trivia.jsx. We focused on setting up the overall layout and applied custom styling. Additionally, we practiced using CSS techniques such as z-index to manipulate the layering of elements, and we explored glassmorphism by utilizing box-shadows. </p>
</details>

<details>
  <summary><strong>2. App.js and Game Flow:</strong></summary>
  <p>Our App.js component plays a crucial role in determining which component to render based on the game state. If the game has not started, it renders the QuizMenu.jsx component, which interacts with the user through a select form. We utilized the formData state to manage the user's trivia preferences and send the selected options to the API as a JSON-like object. We also added CSS styling and animations to enhance the user experience.</p>
</details>

<details>
  <summary><strong>3. QuizMenu.jsx:</strong></summary>
  <p>This component manages user interactions related to trivia preferences. It sends the formData and utilizes the useEffect hook to handle side effects (inside Quiz.js where we render our questions), such as fetching data from the API. The component updates the formData state and communicates with the API to retrieve relevant trivia questions based on the user's preferences.</p>
</details>

<details>
  <summary><strong>4. Quiz.jsx:</strong></summary>
  <p>In this component, we render the trivia questions obtained from the API. We implemented a form with radio inputs to emulate multiple-choice questions. To maintain a single source of truth, we created a state containing an array of objects, where each object represents a question. We passed this state to the Trivia component, which dynamically generates and renders each question and its answer choices. By adopting this approach, our React app maintains a centralized state for all questions, simplifying management and ensuring consistency.</p>
</details>

### Lessons Learned:
- **Importance of Planning:** I realized the significance of planning ahead to ensure the development of pure functions and components. As new features were added during the development process, I noticed that my code started becoming more complex and cluttered. To address this, I took a step back and went back to the drawing board. By carefully assessing the impact on performance and the structure of the code, I was able to break down the tasks and take a step-by-step approach. This allowed me to maintain a more organized and efficient codebase that I could easily follow. Although there are still areas I would like to refactor, such as addressing props drilling and extracting functions into their own files, planning ahead helped me avoid unnecessary complexity and improve the overall code quality.

- **Understanding Hooks:** Through the development of Quizzical, I gained a deep understanding of React hooks, specifically useState and useEffect. These hooks played a crucial role in managing state and handling component lifecycle events. I learned how to leverage the useState hook to create and manage state variables within functional components, enabling me to easily track and update data. The useEffect hook proved invaluable in managing side effects, such as fetching data from the API and performing actions in response to component lifecycle events. By mastering these hooks, I was able to ensure the proper flow and behavior of my application.

### Future Developments:
- User input to control number of questions.
- Timer
- Add a leaderboard to track high scores and encourage competition.
- API token, so each session will GUARENTEE a unique pool of questions, every rerun.

## Credit
A final solo project completely made from scratch as part of Scrimba's React Basic Course taught by @bobziroll!

Trivia Questions API: https://opentdb.com/api_config.php
Figma File: https://www.figma.com/file/E9S5iPcm10f0RIHK8mCqKL/Quizzical-App?type=design&node-id=0-1&t=P8lOLQwIJjSsbNcK-0

## Connect

Thank you for reading about this project. If you'd like to connect with me for mentoring, collaboration, or employment opportunities, you can do so via the following links:

- Email [Youkwhan@gmail.com](**Youkwhan@gmail.com**)
- LinkedIn [https://www.linkedin.com/in/youkwhan/](https://www.linkedin.com/in/youkwhan/)

### License
This project is licensed under the [MIT License](LICENSE.md).
