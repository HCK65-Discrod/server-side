const {User} = require('../models')

module.exports = class Controller {
  static async register(req, res) {
    try {
      await User.create(req.body)
      res.status(201).json({message: 'User created'})
    } catch (error) {
      res.status(500).json(error)
    }
  } 
}