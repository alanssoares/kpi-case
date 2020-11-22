import firebase from '../packages/firebase';

const db = firebase.ref('/users');

class UserDataService {
  getAll() {
    return db;
  }

  create(user) {
    return db.push(user);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }
}

export default new UserDataService();