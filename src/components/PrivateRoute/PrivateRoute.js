import { Route } from 'react-router';

export default function PrivateRoute({ children, ...routeProps }) {
  return (<Route {...routeProps}>{children}</Route>);
}
