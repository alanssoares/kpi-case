import { database } from '../packages/firebase';

const db = database.ref('/users');

class UserDataService {
  create(user) {
    return db.push(user).once('value');
  }
  update(key, value) {
    return db.child(key).update(value);
  }
}

export default new UserDataService();