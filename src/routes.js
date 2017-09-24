import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from '../src/components/Pages/App'
import About from '../src/components/Pages/About'
import OpenSourceProjects from '../src/components/Pages/OpenSourceProjects'
import MentionsLeadership from '../src/components/Pages/MentionsLeadership'
import Quotes from '../src/components/Pages/Quotes'
import NotFound from '../src/components/Pages/NotFound'

const Routes = (props) => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/open-source-projects" component={OpenSourceProjects} />
        <Route path="/mentions-leadership" component={MentionsLeadership} />
        <Route path="/quotes" component={Quotes} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes;
