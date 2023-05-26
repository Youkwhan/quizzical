import { useState, useEffect } from "react"
import Trivia from "./Trivia"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import "./Quiz.css"
import PropTypes from "prop-types"
import { useWindowSize } from "react-use"

function Quiz({ setGame }) {
	// data, array of objects. Our source of truth, no need for another state for the React elements itself
	const [triviaData, setTriviaData] = useState([])
	const [score, setScore] = useState(null)
	// calculate window size, for the Confetti will default to inital window dimensions
	const { width, height } = useWindowSize()

	useEffect(() => {
		fetchTrivia()
	}, [])

	// fetch objects
	async function fetchTrivia() {
		const res = await fetch(
			"https://opentdb.com/api.php?amount=5&category=18&type=multiple"
		)
		const data = await res.json()
		const triviaArr = data.results.map((item) => ({
			...item,
			id: nanoid(),
			choices: [...item.incorrect_answers, item.correct_answer].sort(
				() => Math.random() - 0.5
			),
			selectedAnswer: "",
		})) // This way we rerender and dont have the old data still
		setTriviaData(triviaArr)
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
			<h2>Quizzical</h2>
			{renderTriviaElements()}
			<section className="results">
				{score != null && (
					<p className="results__score">
						You scored {score}/{triviaData.length} correct answers
					</p>
				)}
				<button className="check-answers-btn btn" onClick={handleCheckAnswer}>
					{score != null ? "Play again" : "Check answers"}
				</button>
			</section>
		</div>
	)
}

Quiz.propTypes = {
	setGame: PropTypes.func.isRequired,
}

export default Quiz
