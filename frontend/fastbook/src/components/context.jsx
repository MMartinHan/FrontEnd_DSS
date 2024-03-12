import React, {useState} from 'react';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // Aquí deberías autenticar al usuario y obtener su información
        // Por ahora, solo vamos a establecer el usuario directamente
        setUser({ username, password });
    };

    const logout = () => {
        // Aquí deberías manejar el cierre de sesión del usuario
        // Por ahora, solo vamos a establecer el usuario a null
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
