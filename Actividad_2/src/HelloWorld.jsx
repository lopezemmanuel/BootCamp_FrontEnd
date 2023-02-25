import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const HelloWorld = () => {
    const [categories, setCategories] = useState(['One Punch Man', 'Dragon Ball Z'])

    const addCategory = newCategory => setCategories([...categories, newCategory])

    return (
        <div>

            <h1>Taller 2 - Bootcamp Frontend DINARA</h1>
            <p className='nombreEstudiante'>Emmanuel López Rodríguez</p>

            <AddCategory onNewCategory={e => addCategory(e)} />

            <ul>
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category} categories={categories}/>
                    })
                }
            </ul>
        </div>
    )
}

export default HelloWorld