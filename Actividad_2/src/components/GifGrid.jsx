import React, { useEffect, useState } from 'react'

const GifGrid = ({ category, categories }) => {
    // States para cada GIF
    const [srcImg, setSrcImg] = useState('')
    const [titleImg, setTitleImg] = useState('')

    // Llamado a la API
    const getGifs = async query => {
        const api_key = '4ZM5uWa72pAMzDjODiomOOMKarEaZqQW'
        const api_url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=1&q=${query}`;
        const response = await fetch(api_url);
        const { data } = await response.json();

        // Depurar información
        const gifs = data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }))

        // Por si no llega una respuesta
        if (gifs[0]) {
            setSrcImg(gifs[0].url)
            setTitleImg(gifs[0].title)
        } else {
            setSrcImg('')
            setTitleImg('')
        }
    }

    // Para llamarlo cada que se cree una nueva categoría
    useEffect(() => {
        return () => {
            getGifs(category)
        }
    }, [categories])

    return (
        <li>
            <img src={srcImg} alt="Imagen Default" />
            <p>{titleImg}</p>
        </li>
    )
}

export default GifGrid