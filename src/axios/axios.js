import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-cf42b.firebaseio.com/'
})