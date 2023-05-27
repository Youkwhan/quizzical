import PropTypes from "prop-types"
import "./QuizMenu.css"
import { categories } from "../data/categories"

function QuizMenu(props) {
	const categoryOptions = categories.map((category) => (
		<option key={category.id} value={category.id}>
			{category.name}
		</option>
	))

	return (
		<div className="start-quiz">
			<h1>Quizzical</h1>
			<p className="start-quiz__description">
				<span>
					Immerse yourself in a world of trivia <br /> where curiosity is
					rewarded
				</span>
			</p>
			{/* API error */}
			{props.apiError.show && (
				<p className="api-error">{props.apiError.message}</p>
			)}
			{/* Input form */}
			<form className="form-config" onSubmit={props.handleFormConfigSubmit}>
				<div className="form-field">
					<label htmlFor="category">Category</label>
					<select
						name="category"
						id="category"
						value={props.formData.category}
						onChange={props.handleFormConfig}
					>
						<option value="">Any Category</option>
						{categoryOptions}
					</select>
				</div>

				<div className="form-field">
					<label htmlFor="difficulty">Difficulty</label>
					<select
						name="difficulty"
						id="difficulty"
						value={props.formData.difficulty}
						onChange={props.handleFormConfig}
					>
						<option value="">Any Difficulty</option>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
				</div>

				<div className="form-field">
					<label htmlFor="type">Type</label>
					<select
						name="type"
						id="type"
						value={props.formData.type}
						onChange={props.handleFormConfig}
					>
						<option value="">Any Type</option>
						<option value="multiple">Multiple Choice</option>
						<option value="boolean">True/False</option>
					</select>
				</div>

				<button className="start-quiz__btn btn">Start quiz</button>
			</form>
		</div>
	)
}

QuizMenu.propTypes = {
	formData: PropTypes.object.isRequired,
	handleFormConfig: PropTypes.func.isRequired,
	handleFormConfigSubmit: PropTypes.func.isRequired,
	apiError: PropTypes.object,
}

export default QuizMenu
