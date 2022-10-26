import React, { useEffect, useState } from 'react' 
import { useParams, useNavigate } from 'react-router-dom'
import { marvelDelete, marvelShow, marvelUpdate } from '../api/marvel'
import MarvelUpdate from './MarvelUpdate'

const MarvelShow = ({ user, msgAlert }) => {

    const [marvel, setMarvel] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        marvelShow(user, id)
        .then((res) => {
            setMarvel(res.data.marvel)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Marvel Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current marvel
        // then comma and modify the key to the value you need
        setMarvel({...marvel, [event.target.name]: event.target.value})
    }

    const handleUpdateMarvel = () => {
        marvelUpdate(marvel, user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Updating Marvel',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Update Marvel Failure' + error,
                variant: 'danger'
            })
        })
    }

    const handleDeleteMarvel = () => {
        marvelDelete(user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleting a Marvel Character',
                variant: 'success'
            })
            
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Deleting a Marvel Character Failure' + error,
                variant: 'danger'
            })
        })
    }

    // logical &&
    // both sides of this check NEED to be truthy values = true
    // logical ||
    // only one side of this check needs to be truthy = true

    // oneliner
    if (deleted) navigate('/marvels')
    // if (deleted) {
    //     navigate('/marvels')
    // }

    return (
			<>
				<h3>Name: {marvel.name}</h3>
				<p>Power: {marvel.type}</p>
				<button onClick={toggleShowUpdate}>Toggle Update</button>
				{isUpdateShown && (
					<MarvelUpdate
						marvel={marvel}
						handleChange={handleChange}
						handleUpdateMarvel={handleUpdateMarvel}
					/>
				)}
                <button onClick={handleDeleteMarvel} >Delete</button>
			</>
		)
}

export default MarvelShow