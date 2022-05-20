export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=b12Ks9zYLrZwrIcdR9hm7jwN6TSkgEGC&q=${encodeURI(category)}&limit=6`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

};