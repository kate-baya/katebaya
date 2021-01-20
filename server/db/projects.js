const connection = require('./connection')

function getProjects (db = connection) {
  return db('projects').select()
}

module.exports = {
  getProjects
}