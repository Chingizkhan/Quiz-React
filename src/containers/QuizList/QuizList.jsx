import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './QuizList.module.css'
import axios from 'axios'

export default class QuizList extends Component {
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}>
            Тест {quiz}
          </NavLink>
        </li>
      )
    })
  }

  componentDidMount() {
    async function fetchData() {
      const resp = await fetch('https://react-quiz-cf42b.firebaseio.com/quiz.json')
      const data = await resp.json()
      console.log(data)
    }
    fetchData()
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          <ul>
            {this.renderQuizes()}
          </ul>
        </div>
      </div>
    )
  }
}
