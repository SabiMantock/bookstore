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
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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
        books: state.books.filter((book) => book.item_id !== payload),
      };
    default:
      return state;
  }
};

export default books;
