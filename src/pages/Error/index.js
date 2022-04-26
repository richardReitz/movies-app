import './error.css';

import { Link } from 'react-router-dom';

export default function Error() {
    return (
    <div className='error-view'>
        <h1 className='error-title'>Error 404</h1>
        <span className='error-text'>Ops...Page not found :(</span>
        <Link className='btn-back' to="/">Go Back Home</Link>
    </div>
    );
}