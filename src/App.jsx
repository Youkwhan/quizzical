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
					<Quiz />
				) : (
					<div className="start-quiz">
						<h1>Quizzical</h1>
						<p className="start-quiz__description">
							Some description if needed
						</p>
						<button
							className="start-quiz__btn btn"
							onClick={() => setGame(true)}
						>
							Start quiz
						</button>
					</div>
				)}
			</div>
		</main>
	)
}

export default App
