// move the helper function into it's own file and export it
// don't forget to bring in any imports you may need to go with it
import axios from 'axios'

export const getStarships = async () => {
    try {
        const url = 'https://swapi.dev/api/starships/';
        console.log(url)
        const response = await axios.get(url);
        console.log(response.data)
        return response.data;
    }
    catch (err) {
        console.error(err.message);
    }
}