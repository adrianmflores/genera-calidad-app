import React from 'react';
import { login } from '../../services/authenticationService'

function AuthProvider({ AppContext, children }) {
    const [user, setUser] = React.useState(null);

    const loginApp = async (user, password) => {
        const isSuccessfulLogin = await login(user, password)
        if (isSuccessfulLogin) {
            setUser(user);
            return true
        } else {
            return false
        }
    };

    const logout = () => {
        setUser(null);
        return true
    };

    const value = { user, loginApp, logout };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AuthProvider
