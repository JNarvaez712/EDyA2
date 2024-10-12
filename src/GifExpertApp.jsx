import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Leonardo Dicaprio'])

    const onAddCategory = (category) => {
        setCategories(list => [...list, category]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={onAddCategory} />
            {
                categories.map((category, key) => {
                    return <GifGrid key={key} category={category}></GifGrid>
                })
            }
        </>
    )
}
