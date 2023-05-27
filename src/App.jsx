import { useState } from "react"

import Quiz from "./components/Quiz"
import "./App.css"

function App() {
	const [game, setGame] = useState(false)
	return (
		<main>
			<div className="blob blob-top"></div>
			<div className="blob blob-bot"></div>

			<div className="content-container">
				{game ? (
					<Quiz setGame={setGame} />
				) : (
					<div className="start-quiz">
						<h1>Quizzical</h1>
						<p className="start-quiz__description">
							Some description if needed
						</p>
						{/* category, difficulty, type of question */}
						<button
							className="start-quiz__btn btn"
							onClick={() => setGame(true)}
						>
							Start quiz
						</button>
					</div>
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
