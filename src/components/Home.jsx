import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-page'>
            <h2>Home Page</h2>
            <p>Esta es la página pública</p>
            <Link to='/login'>
                <button>Iniciar sesión</button>
            </Link>
        </div>
    )
}

export default Home;