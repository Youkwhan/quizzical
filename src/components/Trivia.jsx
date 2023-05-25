import PropTypes from "prop-types"

function Trivia(props) {
	return (
		<div>
			<h2>{props.question}</h2>
			<form className="form-options">
				{props.choices.map((choice) => {
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
							<label htmlFor={choice}>{choice}</label>
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
}

export default Trivia
