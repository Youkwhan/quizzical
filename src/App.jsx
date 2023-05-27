import { useState } from "react"

import Quiz from "./components/Quiz"
import QuizMenu from "./components/QuizMenu"
import "./App.css"

function App() {
	const [game, setGame] = useState(false)
	const [formData, setFormData] = useState({
		numOfQuestions: 5,
		category: "",
		difficulty: "",
		type: "",
	})
	return (
		<main>
			<div className="blob blob-top"></div>
			<div className="blob blob-bot"></div>

			<div className="content-container">
				{game ? (
					<Quiz setGame={setGame} />
				) : (
					<QuizMenu setGame={setGame} formData={formData} />
				)}
			</div>
			<footer className="footer">
				<p>
					&copy; 2023{" "}
					<a
						href="https://github.com/Youkwhan/quizzical"
						target="_blank"
						rel="noopener noreferrer"
					>
						Youkwhan
					</a>
				</p>
			</footer>
		</main>
	)
}

export default App
