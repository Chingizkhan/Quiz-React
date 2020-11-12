import React, { Component } from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'

export default class Auth extends Component {
  render() {
    return (
      <div className={classes.Auth}>
        <h1>Авторизация</h1>

        <form>
          <input type="text" />
          <input type="text" />

          <Button type="success">Войти</Button>
        </form>
      </div>
    )
  }
}
