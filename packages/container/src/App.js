import React, { useState, lazy, Suspense } from 'react'
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Progress from './components/Progress';

const generateClassName = createGenerateClassName({
  productionPrefix: "co"
})

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" >
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingLazy}/>
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  )
}

export default App