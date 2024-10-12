import { getGifs } from "../helpers/getGifs"
import { useEffect, useState } from "react"
import {GifItem} from './GifItem'

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([])

    const getImages = async() => {
        const images = await getGifs(category)
        console.log(images)
        setImages(images)
    }

    useEffect(() => {
        getImages()
    }, [category])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image, key) =>{
                        return <GifItem key={key} {...image}></GifItem>
                    })
                }
            </div>
        </>
    )
    
}