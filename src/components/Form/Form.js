import React from 'react';
import Input from '../Input/Input';
import { FormTitle, FormContainer } from './Form.style';
import Button from '../Button/Button';

const Form = ({ inputs, onChangeInput, onSubmit }) => (
  <>
    <FormContainer onSubmit={onSubmit}>
      <FormTitle>Create Post</FormTitle>
      <Input
        type="text"
        placeholder="name"
        name="name"
        value={inputs.name}
        change={onChangeInput}
      />
      <Input
        type="email"
        placeholder="email"
        name="email"
        value={inputs.email}
        change={onChangeInput}
      />
      <Input
        type="text"
        placeholder="title"
        name="title"
        value={inputs.title}
        change={onChangeInput}
      />
      <Input
        type="text"
        placeholder="body"
        name="body"
        value={inputs.body}
        change={onChangeInput}
      />
      <Button type="submit" text="Post it!" />
    </FormContainer>
  </>
);

export default Form;
