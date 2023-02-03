import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Form = () => (
  <form>
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
      title="Add Book"
      className="btn"
      onClick={() => console.log('clicked')}
    />
  </form>
);

export default Form;
