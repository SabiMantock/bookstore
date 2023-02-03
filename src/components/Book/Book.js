import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../Button/Button';

const Book = ({ title, author }) => (
  <li>
    {`Book Title:${title} Author:${author}` }
    <Button className="btn" onClick={() => console.log('clicked')} title="Remove" />
  </li>
);

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
