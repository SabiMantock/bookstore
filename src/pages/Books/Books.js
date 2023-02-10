import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../../components/Book/Book';
import Form from '../../components/Form/Form';
import { removeBookItem } from '../../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBookItem(id));
  };

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          onClick={() => handleRemoveBook(book.item_id)}
        />
      )) }
      <Form />
    </div>
  );
};

export default Books;
