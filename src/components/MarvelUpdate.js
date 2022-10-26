import React from 'react'

const MarvelUpdate = ({ marvel, handleChange, handleUpdateMarvel }) => {
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
            value={marvel.type} 
            name='type' 
            onChange={handleChange} 
            />
			<button onClick={handleUpdateMarvel}>Update marvel</button>
		</>
	)
}

export default MarvelUpdate