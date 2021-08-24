import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const LoginScreen = ({ history }) => {


    const { dispatch } = useContext(AuthContext);

    const handleClick = () => {

        const path = localStorage.getItem('lastPath') || './';

        const action = {
            type: types.login,
            payload: {
                name: 'Juanito'
            }
        }

        dispatch(action)

        history.replace(path)
    
    };


    return (
        <div>

            {/* <Link to="/marvel" type="submit" className="btn btn-primary">Login</Link> */}
            <button onClick={handleClick} className="btn btn-primary mt-5 ml-5" >Login</button>

        </div>
    )
}
