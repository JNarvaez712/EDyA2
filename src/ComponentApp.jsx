import {useState} from 'react'

export const GitExpertApp = () => {
    const [categories, setCategories] = useState(['primer categoria'])
    const [category, setCategory] = useState('')

    const onAddCategory = () => {
        setCategories(list=>[...list, category])
        setCategory('')
    }

    const onSetCategory = (evt) => {
        setCategory(evt.target.value)
    }

    return (
        <>
            <h1>GifExpert</h1>
            <input 
                type="text" value={category}
                onChange={(event)=>onSetCategory(event)}/>
            <button onClick={()=>onAddCategory()}>Agregar Categoria</button>
            <ol>
                {
                    categories.map(
                        (category, key) =>
                            {
                                return <li key={key}>{category}</li>
                            }
                    )
                }
            </ol>
        </>
    )
}
export default GitExpertApp