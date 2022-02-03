import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    const authToken = localStorage.getItem("authToken");
    return (
        <Route
            {...rest}
            render={(props) =>
                authToken ? (
                    <Component {...props} authtoken={authToken} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    )
}

export default PrivateRoute;
