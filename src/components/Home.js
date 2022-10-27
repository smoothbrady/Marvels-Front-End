import React from "react"
import { Navigate } from "react-router-dom"


const Home = (props) => {
	const { user } = props
	if (user) {
		return(
			<Navigate to='/marvels' />
		)
	}

	return (
		<>
			<h2>Home Page</h2>
			<p>Sign up or Login in to see Please!</p>
		</>
	)
}

export default Home
