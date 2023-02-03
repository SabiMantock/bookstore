import React, { useState } from 'react';
import Book from '../../components/Book/Book';
import Form from '../../components/Form/Form';

const Books = () => {
  const [inputState, setInputState] = useState([{
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  }]);

  const handleAddBook = () => {
    setInputState({});
  };

  return (
    <div>
      {inputState.map(({ title, id, author }) => (
        <Book key={id} title={title} author={author} onClick={handleAddBook} />
      )) }
      <Form />
    </div>
  );
};

export default Books;
