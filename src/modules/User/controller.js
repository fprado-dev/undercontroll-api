import UserModel from './model'

export const store = async (req, res, next) => {
  res.send('HELLO WORLD')

  // const { firstName, lastName, password, email } = req.body
  // const hash = password
  // const newUser = {
  //   firstName,
  //   lastName,
  //   password: hash,
  //   email
  // }
  // try {
  //   const user = await new UserModel(newUser).save()
  //   return res.status(200).json({ user })
  // } catch (error) {
  //   return res.status(400).json({ error })
  // }
}
