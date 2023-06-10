// // Importaciones
// const axios = require('axios') 
// const URL = 'https://rickandmortyapi.com/api'

// // Las formulas de la promesa
// // const successH = (response, res) => {
// //     const {name, gender, species, origin, image, status} = data;
// //     res.writeHead(200, {'Content-Type': 'application/json'}),
// //     res.end(JSON.stringify({id, name, gender, species, origin, image, status}))};
// const errorH = (error, res) => {
//         res.writeHead(500, {'Content-Type': 'text/plain'})
//         return res.end(error.message)}


// // Aqui empieza lo bueno
// const getCharById = (res, id) => {
//     axios
//     .get (`${URL}/character/${id}`)
//     .then(({data}) => {
//         const {name, gender, species, origin, image, status} = data;
//         const character = {id, name, gender, species, origin, image, status}

//         res.writeHead(200, {'Content-Type': 'application/json'})
//         return res.end(JSON.stringify(character))
//     })
//     .catch(error => errorH(error, res))
// };

// module.exports = getCharById
const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const {id} = req.params;
    axios(URL+id)
        .then(({data}) => {
            const {name, gender, species, origin, image, status} = data;
            const character = {id, name, gender, species, origin, image, status}

            // res.status(200).json(character)
            return character.name
            ? res.status(200).json(character)
            : res.status(404).send('Not found')
        })

        .catch((err) => {
            return res.status(500).send(err.message)
        })
}

module.exports = getCharById;