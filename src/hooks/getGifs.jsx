export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=sEpaPYRJRUMjXanuEcVr4gwhphOnZLas&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const response = await fetch(url);
    const {data} =await response.json();
    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium?.url || ''
        }
    })
    return gifs;
}

export const GifGrid = ({category}) => {
    getGifs(category)

    return (
        <>
            <h3>{category}</h3>
            <p>Hello world</p>
        </>
    )
}