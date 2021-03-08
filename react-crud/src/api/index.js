import axios from 'axios';
const BASE_URL = 'https://shopping-list-bc921-default-rtdb.europe-west1.firebasedatabase.app/';
// const BASE_URL = 'https://opentable.herokuapp.com/api/restaurants'; // restaurants/:id, restaurants, cities, stats => after /api/
// https://jsonplaceholder.typicode.com/users

export const createAPIEndpoint = endpoint => {
    let url = BASE_URL + endpoint + '/';
    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id)
    }
}