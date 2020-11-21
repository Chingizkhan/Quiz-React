import { combineReducers } from 'redux'
import authReducer from './auth'
import createQuizReducer from './create'
import quizReducer from './quiz'


export default combineReducers({
  quiz: quizReducer,
  create: createQuizReducer,
  auth: authReducer
})