import { Route } from "react-router"

export default function PublicRoute({ children,restricted = false, ...routeProps }) {
    return (
       <Route {...routeProps}>{children}</Route>
    )
}
