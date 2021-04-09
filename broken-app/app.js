const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json())

app.post('/', async function (req, res, next) {
  try {
    let usernames = req.body.developers;
    let baseURL = "https://api.github.com/users"

    //iterate thru usernames array 
    let info = await Promise.all(usernames.map(async u => {
      return await axios.get(`${baseURL}/${u}`)
    }))
    let userInfo = info.map(i => {
      return { "name": i.data.name, "bio": i.data.bio }
    })
    return res.send(userInfo)

  }
  catch (e) {
    console.log(e)
  }
});


app.use((err, req, res, next) => {
  return res.json(err)
})

module.exports = app;
