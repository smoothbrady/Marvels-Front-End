import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { marvelIndex } from '../api/marvel'

const MarvelIndex = ({ user, msgAlert }) => {
    
    const [allMarvel, setAllMarvel] = useState([])

    useEffect(() => {
        marvelIndex(user)
        .then(res => {
            setAllMarvel(res.data.marvels)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Marvels failure' + error,
                variant: 'danger'
            })
        })
    }, [])
    
    const allMarvelJSX = allMarvel.map(marvel => {
        return (
            <Link to={marvel._id} key={marvel._id}>
                <li>Name: {marvel.name} power: {marvel.power}</li>
            </Link>
        )
    })

    return (
        <>
            <ul>{allMarvelJSX}</ul>
        </>
    )
}

export default MarvelIndex