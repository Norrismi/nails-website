
import React, { useEffect, useState, useCallback } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark';
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary dark:bg-darkBg text-primaryDark dark:text-accent focus:outline-none focus:ring-2 focus:ring-primaryDark dark:focus:ring-accent transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18v2.25m-6.364-.386l1.591-1.591M3 12H5.25m-.386-6.364l1.591 1.591M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0112 21.75c-3.619 0-6.947-1.428-9.375-3.756L7.5 11.25m0 0l3.6-3.6m-3.6 3.6l-3.6-3.6m3.6 3.6V15m1.5-5.25v2.25m0 0l-3.6-3.6m3.6 3.6L12 7.5"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
