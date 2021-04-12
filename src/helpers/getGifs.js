


export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=35Y9C6OuztNEykOWLiUEpI47FB5CRv18`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    // extraer la informacion
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url// para campos undef downsized_medium
        }
    });

    return gifs;

};