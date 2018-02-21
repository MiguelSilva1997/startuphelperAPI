const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


class User {

  static allUsers() {
    return database.raw(
      "SELECT * FROM users"
    )
  }

  static addUser(id, firstName, lastName, email) {
    return database.raw(
      "INSERT INTO users (uid, firstname, lastname, email, created_at) VALUES (?,?,?,?,?) RETURNING *",
      [id, firstName, lastName, email, new Date]
    )
  }

  static findByUid(id){
    return database.raw(
      "SELECT * FROM users WHERE uid = (?)", [id]
    )
  }

  static findById(id){
    return database.raw(
        "SELECT * FROM users WHERE id = (?)", [id]
      )
  }
}

module.exports = User;
