import {Switch,Route,} from "react-router-dom";

import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";
import BookCard from "./LibraryanPanel";
import ClientPanel from "./ClientPanel";

const RoutesRoot = () => (
    <Switch>
        <Route path="/AdminPanel" component={AdminPanel} />
        <Route path="/LibraryanPanel" component={BookCard} />
        <Route path='/login' component={LoginForm } />
        <Route path="/" component={ClientPanel} />
    </Switch>
)

export default RoutesRoot