import React, { useState } from 'react' 
import { marvelCreate } from '../api/marvel'

const MarvelCreate = ({ user, msgAlert }) => {

    const defaultMarvel = {
        name: '',
        power: ''
    }

    const [marvel, setMarvel] = useState(defaultMarvel)

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current marvel
        // then comma and modify the key to the value you need
        setMarvel({...marvel, [event.target.name]: event.target.value})
    }

    const handleCreateMarvel = () => {
        marvelCreate(marvel, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Create Marvel',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Marvel Failure' + error,
                variant: 'danger'
            })
        })
    }

    return (
			<>
				<input
					type='text'
					value={marvel.name}
					name='name'
					onChange={handleChange}
				/>
				<input
					type='text'
					value={marvel.power}
					name='power'
					onChange={handleChange}
				/>
				<button onClick={handleCreateMarvel}>Create Marvel Character</button>
			</>
		)
}

export default MarvelCreate