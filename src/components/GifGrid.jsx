import { getGifs } from "../hooks/getGifs"
import { useEffect, useState } from "react"
import {GifItem} from './GifItem'

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([])

    const getImages = async() => {
        const iamges = await getGifs(category)
        setImages(images)
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((images, key) =>{
                        return <GifItem key={key} {...images}></GifItem>
                    })
                }
            </div>
        </>
    )
    
}