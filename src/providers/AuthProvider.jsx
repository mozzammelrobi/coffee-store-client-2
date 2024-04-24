import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    return (
        <div>
            <AuthContext.Provider>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}