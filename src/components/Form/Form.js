import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { addBookItem } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const [inputState, setInputState] = useState({
    title: '',
    author: '',
  });

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBookItem(
      {
        item_id: Math.random(),
        title: inputState.title,
        author: inputState.author,
        category: 'Fiction',
      },
    ));

    setInputState({
      title: '',
      author: '',
    });
  };

  const handleOnChange = (e) => {
    setInputState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleAddBook}>
      <Input
        type="text"
        placeholder="title"
        value={inputState.title}
        name="title"
        onChange={handleOnChange}
      />
      <Input
        type="text"
        placeholder="author"
        value={inputState.author}
        name="author"
        onChange={handleOnChange}
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
