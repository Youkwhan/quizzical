import { useState, useEffect } from "react"
import Trivia from "./Trivia"
import { nanoid } from "nanoid"

function Quiz() {
	// data, array of objects. Our source of truth, no need for another state for the React elements itself
	const [triviaData, setTriviaData] = useState([])

	useEffect(() => {
		fetchTrivia()
	}, [])

	// fetch objects
	async function fetchTrivia() {
		const res = await fetch("https://opentdb.com/api.php?amount=5&category=18")
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
			return <Trivia key={item.id} {...item} />
		})
	}

	return (
		<div>
			{renderTriviaElements()}
			<button>Check answers</button>
		</div>
	)
}

export default Quiz
