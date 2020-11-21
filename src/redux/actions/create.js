import axios from '../../axios/axios'
import { CREATE_QUIZ_QESTION, RESET_QUIZ_CREATION } from './actionTypes'

export function createQuizQuestion(item) {
  return {
    type: CREATE_QUIZ_QESTION,
    payload: item
  }
}

export function resetQuizCreation() {
  return {
    type: RESET_QUIZ_CREATION
  }
}

export function finishCreateQuiz() {
  return async (dispatch, getState) => {
    await axios.post('quizes.json', getState().create.quiz)
    dispatch(resetQuizCreation())
  }
}