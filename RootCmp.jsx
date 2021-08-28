const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { KeepApp } from './js/apps/keep/pages/Keep.jsx'
import { EmailApp } from './js/apps/mail//pages/emailApp.jsx'
import { EmailDetails } from './js/apps/mail/pages/emailDetails.jsx'
import { SendMail } from './js/apps/mail/pages/sendMail.jsx'
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
          <Route path="/keepApp/:mailId" component={KeepApp} />
          <Route path="/emailApp" component={EmailApp} />
          <Route path="/keepApp" component={KeepApp} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  );
}
