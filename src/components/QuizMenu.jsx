import PropTypes from "prop-types"
import "./QuizMenu.css"

function QuizMenu(props) {
	return (
		<div className="start-quiz">
			<h1>Quizzical</h1>
			<p className="start-quiz__description"><span>Immerse yourself in a world of trivia <br /> where curiosity is rewarded</span></p>
			{/* 
         1. MAKE OUR INPUT FORM
         2. CONNECT SUBMIT, updating obj
         3. SEEND TO API
         
         */}
			<button
				className="start-quiz__btn btn"
				onClick={() => props.setGame(true)}
			>
				Start quiz
			</button>
		</div>
	)
}

QuizMenu.propTypes = {
	setGame: PropTypes.func.isRequired,
}

export default QuizMenu
