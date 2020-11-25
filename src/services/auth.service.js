import { database } from '../packages/firebase';

const db = database.ref('/users');

class AuthDataService {
    login(data) {
        return db.get(data).once('value');
    }
}

export default new AuthDataService();