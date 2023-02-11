import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../../components/Book/Book';
import HorizontalDivider from '../../components/Divider/HorizontalDivider';
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
    <div style={{ padding: '50px' }}>
      <div>
        <ul style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fafafa',
          padding: '0',
          margin: '0',
          listStyle: 'none',
          gap: '20px',
        }}
        >
          {books.map((book) => (
            <Book
              key={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
              onClick={() => handleRemoveBook(book.item_id)}
            />
          )) }
        </ul>
        <HorizontalDivider />
        <Form />
      </div>
    </div>
  );
};

export default Books;
