import React from 'react';
import Header from '../Header';

const PrimaryLayout = ({children}) => (
    <div>
        <Header/>
        <main>
            {children}
            </main>
    </div>
)

export default PrimaryLayout;