import Layout from './hoc/Layout/Layout'
import React from 'react'
import Quiz from './containers/Quiz/Quiz'

function App() {
  return (
    <div className="App">
      <Layout>
        <Quiz></Quiz>
      </Layout>
    </div>
  );
}

export default App;
