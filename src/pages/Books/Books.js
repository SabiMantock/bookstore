import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../../components/Book/Book';
import Form from '../../components/Form/Form';
import { fetchBooks, removeBookItem } from '../../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

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
