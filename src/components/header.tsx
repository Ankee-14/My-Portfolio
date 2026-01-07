// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import './header.css';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const isLight = savedTheme === 'light';
        setIsDarkTheme(!isLight);
        applyTheme(!isLight);
    }, []);

    const applyTheme = (isDark: boolean) => {
        const root = document.documentElement;
        if (isDark) {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        applyTheme(newTheme);
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                <a href="#home" className="header-logo">
                    <span className="logo-icon">⬡</span>
                    <span className="logo-text">Portfolio</span>
                </a>

                <nav className={`header-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        {navLinks.map((link, index) => (
                            <li key={index} className="nav-item">
                                <a
                                    href={link.href}
                                    className="nav-link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMobileMenuOpen ? 'hamburger-open' : ''}`}></span>
                </button>

                <button
                    className="theme-toggle-btn"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title={isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                >
                    {isDarkTheme ? '☀️' : '🌙'}
                </button>
            </div>
        </header>
    );
};

export default Header;
