import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import MainScreen from "../components/main/MainScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
    return (
        <Router>

            <div>

                    <Switch>

                        <Route path="/auth" component={ AuthRouter } />
                        <Route exact path="/" component={ MainScreen } />

                        <Redirect to="/login" />

                    </Switch>

            </div>
            
        </Router>
    )
}

export default AppRouter
