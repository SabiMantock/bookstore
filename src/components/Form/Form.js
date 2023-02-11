import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
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
    if (inputState.title && inputState.author !== '') {
      dispatch(addBookItem(
        {
          item_id: uuid(),
          title: inputState.title,
          author: inputState.author,
          category: 'Fiction',
        },
      ));
    }

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
    <div>
      <h2 style={{ fontSize: '20px', color: '#888', textTransform: 'uppercase' }}>Add new book</h2>
      <form onSubmit={handleAddBook} style={{ display: 'flex', gap: '32px', marginTop: '20px' }}>
        <div style={{ width: '50%' }}>
          <Input
            type="text"
            placeholder="Book title"
            value={inputState.title}
            name="title"
            onChange={handleOnChange}
          />
        </div>
        <div style={{ width: '30%' }}>
          <Input
            type="text"
            placeholder="Book author"
            value={inputState.author}
            name="author"
            onChange={handleOnChange}
          />
        </div>
        <div style={{ width: '20%' }}>
          <Button
            defaultProps
            title="Add Book"
            className="addBook"
            onClick={() => 'clicked'}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
