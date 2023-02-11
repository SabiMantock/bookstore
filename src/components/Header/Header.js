import React from 'react';
import { NavLink } from 'react-router-dom';
import person from '../../assets/person.png';

const Header = () => {
  const active = {
    opacity: 1,
    color: '#121212',
    textDecoration: 'none',
    letterSpacing: '1.9px',
    textTransform: 'uppercase',
    fontSize: '13px',
  };

  const inActive = {
    opacity: 0.5,
    color: '#121212',
    textDecoration: 'none',
    letterSpacing: '1.9px',
    textTransform: 'uppercase',
    fontSize: '13px',
  };

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      padding: '24px 50px',
      gap: '40px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #e8e8e8',
    }}
    >
      <NavLink
        to="/"
        style={{
          textDecoration: 'none',
          color: '#0290ff',
        }}
      >
        <h1
          style={{ margin: 0, fontSize: '30px' }}
        >
          Bookstore CMS
        </h1>
      </NavLink>
      <ul style={{
        display: 'flex',
        flexGrow: 1,
        listStyle: 'none',
        padding: '0px',
        margin: '0px',
        gap: '40px',
      }}
      >
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? active : inActive)}
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" style={({ isActive }) => (isActive ? active : inActive)}>Categories</NavLink>
        </li>
      </ul>
      <button
        type="button"
        style={{
          borderRadius: '50%',
          padding: '10px',
          border: '1px solid #e8e8e8',
          backgroundColor: 'transparent',
        }}
      >
        <div style={{ width: '20px' }}>
          <img
            src={person}
            alt="person"
            style={{ width: '100%' }}
          />
        </div>
      </button>
    </nav>
  );
};

export default Header;
