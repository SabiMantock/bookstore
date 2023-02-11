import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import URL from '../../utils/constants';

const ADD_BOOK_ITEM = 'bookstore/ADD_BOOK_ITEM';
const REMOVE_BOOK_ITEM = 'bookstore/REMOVE_BOOK_ITEM';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async (post, { dispatch }) => {
  const response = await fetch(URL);
  const data = await response.json();
  const payload = Object.keys(data).map((id) => ({
    item_id: id,
    title: data[id][0].title,
    author: data[id][0].author,
    category: data[id][0].category,
  }));
  dispatch({
    type: FETCH_BOOKS,
    payload,
  });
  return payload;
});

export const addBookItem = createAsyncThunk(ADD_BOOK_ITEM, async (payload, { dispatch }) => {
  await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  dispatch({
    type: ADD_BOOK_ITEM,
    payload,
  });
  return payload;
});

export const removeBookItem = createAsyncThunk(REMOVE_BOOK_ITEM, async (payload, { dispatch }) => {
  await fetch(`${URL}/${payload}`, {
    method: 'DELETE',
  });
  dispatch({
    type: REMOVE_BOOK_ITEM,
    payload,
  });
  return payload;
});

const initialState = {
  books: [],
};

const books = createReducer(initialState,
  (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => ({
      ...state,
      books: [...payload],
    }));
    builder.addCase(addBookItem.fulfilled, (state, { payload }) => ({
      ...state,
      books: [...state.books, payload],
    }));
    builder.addCase(removeBookItem.fulfilled, (state, { payload }) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== payload),
    }));
  });

export default books;
