import React from 'react'
import Button from '../UI/Button/Button'
import classes from './FinishedQuiz.module.css'

function FinishedQuiz(props) {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }
    return total
  }, 0)

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[props.results[quizItem.id]]
          ]

          return (
            <li key={index}>
              <strong>1</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')}></i>
            </li>
          )
        })}
      </ul>
      <p>Правильно {successCount} из {props.quiz.length} </p>
      <div>
        <Button onClick={props.onRetry} type={'primary'}>Повторить</Button>
        <Button type={'success'}>Перейти в список тестов</Button>
      </div>
    </div>
  )
}

export default FinishedQuiz
