import PropTypes from "prop-types"
import { decode } from "html-entities"
import "./Trivia.css"

function Trivia(props) {
	return (
		// if we have a score, show the answer
		<div>
			<h2>{decode(props.question)}</h2>
			<form className="form">
				{props.choices.map((choice) => {
					// style ONLY for correct/incorrect choices
					const labelStyles = {
						backgroundColor:
							props.score !== null
								? props.correct_answer === choice
									? "#94D7A2"
									: props.selectedAnswer === choice && props.selectedAnswer != props.correct_answer
									? "#F8BCBC"
									: ""
								: "",
					}

					return (
						<div key={choice}>
							<input
								type="radio"
								id={choice}
								name={props.id}
								value={choice}
								checked={props.selectedAnswer === choice}
								onChange={props.handleSubmit}
							/>
							<label className="label" style={labelStyles} htmlFor={choice}>
								{decode(choice)}
							</label>
						</div>
					)
				})}
			</form>
			<hr />
		</div>
	)
}

Trivia.propTypes = {
	question: PropTypes.string.isRequired,
	choices: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
	selectedAnswer: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	score: PropTypes.number,
	correct_answer: PropTypes.string.isRequired,
}

export default Trivia
