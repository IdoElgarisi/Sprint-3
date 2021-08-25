const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { KeepApp } from './js/apps/keep/pages/Keep.jsx'
import { EmailApp } from './js/apps/mail/Email.jsx'
import { AppHeader } from './js/cmps/AppHeader.jsx'
import { Home } from './js/pages/Home.jsx';



export function App() {
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Switch>

          <Route path="/emailApp" component={EmailApp} />
          <Route path="/keepApp" component={KeepApp} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  );
}
