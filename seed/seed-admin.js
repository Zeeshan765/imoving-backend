require('../utils/dotenv')
const User = require('../models/user')
const dbConnection = require('../config/connection')

const seedAdmin = async () => {
  let admin = await User.findOne({ email: 'admin@admin.com' })
  if (!admin) {
    admin = await User.create({
      first_name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin1234',
      role: 'admin',
    })
  }
  await admin.save()
}

dbConnection().then(async (result) => {
  if (result) {
    console.log(
      `Seeding process started in ${process.env.NODE_ENV} environment`
    )

    await seedAdmin()

    console.log(
      `Seeding process finished successfully in ${process.env.NODE_ENV} environment`
    )
    console.info('Press Ctrl + C to exit!')
  }
})