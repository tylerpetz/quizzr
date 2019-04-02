import axios from 'axios';

export default {
  query() {
    return axios.get('http://localhost:3000/quizzes');
  },
  create(quizData) {
    return axios.post('http://localhost:3000/quizzes', quizData)
  },
}