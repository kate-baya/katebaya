const express = require('express')

const db = require('../db/projects')

const router = express.Router()

router.get('/', (req, res) => {
  db.getProjects()
    .then(results => {
      res.json({ projects: results.map(project => project.project_name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Fail"})
    })
})

module.exports = router