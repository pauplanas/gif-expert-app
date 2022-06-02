export const getGifs = async (category) => {

    const apiKey = 'b12Ks9zYLrZwrIcdR9hm7jwN6TSkgEGC';
    const limit = 6;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=${limit}`;
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