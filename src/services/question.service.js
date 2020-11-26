import { database } from '../packages/firebase';

const db = database.ref('/questions');

class QuestionDataService {
    list() {
        return db.orderByValue();
    }
}

export default new QuestionDataService();