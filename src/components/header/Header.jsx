import { useState, useEffect } from 'preact/hooks';
import Search from './Search.jsx';

export default function Header({ searchList }) {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 640) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
      setIsSearchBarOpen(false);
    }
  }, [windowWidth]);

  return (
    <header>
      <div class='header-container padding-bottom-1'>
        {!isSearchBarOpen && (
          <div class='header-left'>
            <div class='header-link'>
              <a href='/' class='text-2xl text-bold header-link'>
                Keycap Demo
              </a>
            </div>
            <div class='header-link'>
              <a href='/all' class='text-base header-link'>
                GMK
              </a>
            </div>
          </div>
        )}

        <div className={`header-right ${isSearchBarOpen ? 'expanded' : ''}`}>
          <Search
            searchList={searchList}
            isMobileView={isMobileView}
            isSearchBarOpen={isSearchBarOpen}
            setIsSearchBarOpen={setIsSearchBarOpen}
          />
        </div>
      </div>
      <div class='grey-line'></div>
    </header>
  );
}
