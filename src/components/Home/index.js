import React, { useState, useEffect } from 'react';
import Navigate from '../Nav';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

function Home() {
    useEffect(() => {
        if (currentPage === 'About') {
            document.title = currentPage
        } else {
            document.title = currentPage.navLink
        }
    });

    const [currentPage, setCurrentPage] = useState('About');

    const writePage = (currentPage) => {
        switch (currentPage.navLink) {
            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            default:
                return <About />;
        }
    }

    return (
        <div>
            <Navigate currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div>
                {writePage(currentPage)}
            </div>
        </div>
    )
};

export default Home;
