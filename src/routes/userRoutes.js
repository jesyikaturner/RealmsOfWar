import {
  getUsers,
  addNewUser,
  getUserByToken,
  updateUser,
  deleteUser
} from '../controllers/userController';

const userRoutes = (app) => {
  app.route('/user')
  .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)
      next();
    }, getUsers)
  // POST endpoint
  .post(addNewUser);


  app.route('/user/:token')
  // get specific contact
  .get(getUserByToken)
  // put request
  .put(updateUser)
  // delete request
  .delete(deleteUser);
}

export default userRoutes;
