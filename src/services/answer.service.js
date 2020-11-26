import { database } from '../packages/firebase';

const db = database.ref('/answers');

class AnswerDataService {
    save(answer) {
        return db.push(answer);
    }
}

export default new AnswerDataService();