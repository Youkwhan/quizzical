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
	const [apiError, setApiError] = useState({ show: false, message: "" })

	function handleFormConfig(e) {
		const { name, value } = e.target
		setFormData((prevFormData) => ({
			...prevFormData,
			// name = category/difficulty/type
			// value = which option was selected
			[name]: value,
		}))
	}

	function handleFormConfigSubmit(event) {
		event.preventDefault()
		setApiError({ show: false, message: "" })
		// reset form
		setFormData({
			numOfQuestions: 5,
			category: "",
			difficulty: "",
			type: "",
		})
		setGame(true)
	}

	function handleApiError(error) {
		setApiError({ show: true, message: error.message })
		setGame(false)
	}

	return (
		<main>
			<div className="blob blob-top"></div>
			<div className="blob blob-bot"></div>

			<div className="content-container">
				{game ? (
					<Quiz
						formData={formData}
						setGame={setGame}
						handleApiError={handleApiError}
					/>
				) : (
					<QuizMenu
						formData={formData}
						apiError={apiError}
						handleFormConfig={handleFormConfig}
						handleFormConfigSubmit={handleFormConfigSubmit}
					/>
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
