import { useState } from "react"
import "./App.css"

function App() {
	const [game, setGame] = useState(false)
	return (
		<main>
			<div className="blob blob-top"></div>
			<div className="blob blob-bot"></div>

			<div className="content-container">
				{game ? (
					<div>Hello</div>
				) : (
					<div className="start-quiz">
						<h1>Quizzical</h1>
						<p className="start-quiz__description">
							Some description if needed
						</p>
						<button className="start-quiz__btn btn">Start quiz</button>
					</div>
				)}
			</div>
		</main>
	)
}

export default App
