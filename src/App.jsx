import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home"
import UpdatePage from "./routes/UpdatePage"
import RestaurantDetailPage from "./routes/RestaurantDetailPage"
import  {RestaurantsContextProvider} from "./context/RestaurantsContext"
import Register from "./components/Register";
const App = () => {
    return <RestaurantsContextProvider>
       <div className="container">
        <Router> 
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/restaurants/:id/update" component={UpdatePage} />
                <Route exact path="/restaurants/:id" component={RestaurantDetailPage} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    </div>
    </RestaurantsContextProvider>
};
export default App; 