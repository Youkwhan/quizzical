import { useState, useEffect } from "react"
import Trivia from "./Trivia"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import "./Quiz.css"
import PropTypes from "prop-types"
import { useWindowSize } from "react-use"
import Loading from "./Loading"

function Quiz({ setGame, formData, handleApiError }) {
	// data, array of objects. Our source of truth, no need for another state for the React elements itself
	const [triviaData, setTriviaData] = useState([])
	const [score, setScore] = useState(null)
	// calculate window size, for the Confetti will default to inital window dimensions
	const { width, height } = useWindowSize()
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		fetchTrivia()
	}, [])

	// fetch objects
	async function fetchTrivia() {
		setIsLoading(true)
		try {
			const res = await fetch(
				`https://opentdb.com/api.php?amount=5&category=${formData.category}&difficulty=${formData.difficulty}&type=${formData.type}`
			)
			if (!res.ok) {
				throw new Error(
					"An error occurred while trying to get trivia questions. Please try again later."
				)
			}
			const data = await res.json()
			// No Results: not enough questions for that query
			if (data.response_code === 1) {
				throw new Error(
					"There are currenlty no results with the given opitons. Please try again with different options."
				)
			} else if (data.response_code != 0) {
				throw new Error(
					"An error occurred while trying to get trivia questions. Please try again later."
				)
			}
			// console.log(data)
			// randomize our answer choices
			const triviaArr = data.results.map((item) => ({
				...item,
				id: nanoid(),
				choices: [...item.incorrect_answers, item.correct_answer].sort(
					() => Math.random() - 0.5
				),
				selectedAnswer: "",
			})) // This way we rerender and dont have the old data still
			setTriviaData(triviaArr)
			setIsLoading(false)
		} catch (error) {
			handleApiError(error)
			setIsLoading(false)
		}
	}

	function renderTriviaElements() {
		return triviaData.map((item) => {
			return (
				<Trivia
					key={item.id}
					{...item}
					handleSubmit={handleSubmit}
					score={score}
				/>
			)
		})
	}

	// when we select a answer update, selection for that question
	function handleSubmit(event) {
		const { name, value } = event.target
		setTriviaData((prevQuestionBank) =>
			prevQuestionBank.map((question) => {
				if (question.id === name) {
					return {
						...question,
						selectedAnswer: value,
					}
				}
				return question
			})
		)
	}

	// Check if our answers are correct or not.
	function handleCheckAnswer() {
		// loop throughour data and compare our answer to the answer
		// then render the score FIRST
		if (score === null) {
			let newScore = 0
			triviaData.forEach((question) => {
				if (question.correct_answer === question.selectedAnswer) {
					newScore++
				}
			})
			setScore(newScore)
		} else {
			// Play again
			setScore(null)
			setGame(false)
		}
	}

	return (
		<div className="quiz">
			{score != null && <Confetti width={width} height={height} />}
			<h2 onClick={() => setGame(false)}>Quizzical</h2>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<section className="questionnaire">{renderTriviaElements()}</section>
					<section className="results">
						{score != null && (
							<p className="results__score">
								You scored {score}/{triviaData.length} correct answers
							</p>
						)}
						<button
							className="check-answers-btn btn"
							onClick={handleCheckAnswer}
						>
							{score != null ? "Play again" : "Check answers"}
						</button>
					</section>
				</>
			)}
		</div>
	)
}

Quiz.propTypes = {
	formData: PropTypes.object.isRequired,
	setGame: PropTypes.func.isRequired,
	handleApiError: PropTypes.func.isRequired,
}

export default Quiz
