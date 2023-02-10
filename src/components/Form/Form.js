import React from 'react';

import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { addBookItem } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBookItem(
      {
        item_id: 'item4',
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        category: 'Fiction',
      },
    ));
  };

  return (
    <form onSubmit={handleAddBook}>
      <Input
        type="text"
        placeholder="title"
        value="title"
        name="title"
        onChange={(e) => console.log(e.target.value)}
      />
      <Input
        type="text"
        placeholder="author"
        value="author"
        name="author"
        onChange={(e) => console.log(e.target.value)}
      />
      <Button
        defaultProps
        title="Add Book"
        className="btn"
        onClick={() => 'clicked'}
      />
    </form>
  );
};

export default Form;
