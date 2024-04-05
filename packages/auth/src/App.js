import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";


const App = () => {
  return (
    <div>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/auth/signin" component={SignIn} />
                    <Route path="/auth/signup" component={SignUp} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
  )
}

export default App