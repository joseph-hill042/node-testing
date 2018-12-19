import * as express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send({
    name: 'Joseph',
  })
})

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Mike',
      age: 27,
    },
    {
      name: 'Joseph',
      age: 39,
    },
    {
      name: 'Jen',
      age: '26',
    },
  ])
})

export const server = app.listen(3000)
console.info(`Server listening at http://localhost:3000`)
