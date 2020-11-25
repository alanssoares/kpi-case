import { database } from '../packages/firebase';

const db = database.ref('/users');

class UserDataService {
    create(user) {
      return db.push(user).once('value');
    }
    update(key, value) {
      return db.child(key).update(value);
    }
    forgotPassword(email) {
      console.log(email);
    }
}

export default new UserDataService();