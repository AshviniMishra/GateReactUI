import React from 'react';
import Aux from '../../../../hoc/Aux';
import './NotFound.css';

const notFound = (props) => (
    <Aux>
        <div id="notfound" style={{ width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }}>
            <div className="notfound">
                <div className="notfound-404">
                    <div></div>
                    <h1>404</h1>
                </div>
                <h2>Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            </div>
        </div>
    </Aux>
)

export default notFound;