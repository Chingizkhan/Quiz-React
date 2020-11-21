import Layout from './hoc/Layout/Layout'
import React from 'react'
import Quiz from './containers/Quiz/Quiz'
import { Redirect, Route, Switch } from 'react-router-dom'
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import { useSelector, useDispatch } from 'react-redux'
import Logout from './components/Logout/Logout'
import { autoLogin } from './redux/actions/auth'

function App() {
  const isAuthenticated = useSelector(({ auth }) => !!auth.token)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(autoLogin())
  }, [])

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/quiz/:id" component={Quiz} />
      <Route exact path="/" component={QuizList} />
      <Redirect to="/" />
    </Switch>
  )

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/quiz-creator" component={QuizCreator} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/" component={QuizList} />
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <div className="App">
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default App;
