import React, { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = e => {
        setInputValue(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()

        // Verificar que haya contenido y limpiar espacios
        if(inputValue.trim().length <= 1) return;

        // Limpiarlo y guardarlo en Categories
        onNewCategory(inputValue.trim())
        
        // Limpiar input
        setInputValue('')
    }

    return (
        <form action="" onSubmit={e => onSubmit(e)}>
            <input type="text" placeholder='Buscar GIFs' onChange={e => onInputChange(e)} value={inputValue}/>
        </form>
    )
}

export default AddCategory