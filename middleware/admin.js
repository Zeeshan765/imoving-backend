function admin(req, res, next) {
    if (req.user.role != 'admin')
      return res.status(403).json({
        success: false,
        message: 'You are not authorized',
      })
    next()
  }
  module.exports = admin