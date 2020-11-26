import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import QuestionDataService from '../../services/question.service';
import AnswerDataService from '../../services/answer.service';
import { useState, useEffect } from 'react';

function Feedback() {

    const [isError, setIsError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        QuestionDataService.list().once('value', snapshot => {
            setQuestions(snapshot.val());
        });
    });

    const listQuestions = questions.map(q => {
        return <p key={q.text}>{q.text}</p>
    });

    function postAnswer() {
        AnswerDataService.save({
        }).then((res) => {
            console.log(res);
        }).catch(() => {
            setIsError(true);
        });
    }

    return (
        <form className="forgot-password" autoComplete="none">
            <div>{listQuestions}</div>
            <Button Button variant="contained" color="primary" onClick={postAnswer}>Enviar</Button>
            {isError && <Alert severity="warning">Algo deu errado, tente novamente!</Alert>}
        </form>
    );
}

export default Feedback;