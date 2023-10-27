import { useState } from 'preact/hooks';
import Search from './Search.jsx';
export default function Header({ searchList }) {
  console.log(window);
  return (
    <header>
      <div class='header-container padding-bottom-1'>
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
        <div class='header-right'>
          <Search searchList={searchList} />
        </div>
      </div>
      <div class='grey-line'></div>
    </header>
  );
}
