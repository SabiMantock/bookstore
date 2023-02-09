const ADD_BOOK_ITEM = 'bookstore/ADD_BOOK_ITEM';
const REMOVE_BOOK_ITEM = 'bookstore/REMOVE_BOOK_ITEM';

export const addBookItem = (payload) => ({
  type: ADD_BOOK_ITEM,
  payload,
});

export const removeBookItem = (payload) => ({
  type: REMOVE_BOOK_ITEM,
  payload,
});

const initialState = {
  books: [{
    id: 1,
    title: 'Eragon',
    author: 'Christopher Paolini',
  }, {
    id: 2,
    title: 'Eragon',
    author: 'Christopher Paolini',
  }],
};

const books = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK_ITEM:
      return {
        ...state,
        books: [...state.books, payload],
      };
    case REMOVE_BOOK_ITEM:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== payload)],
      };
    default:
      return state;
  }
};

export default books;
