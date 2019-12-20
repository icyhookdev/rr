import React from 'react';
import useInput from '../hooks/useInput';
import Form from '../components/Form/Form';
import jsonPlaceholderApi from '../api/jsonPlaceholderApi';

const CreatePost = () => {
  const { values, onChangeValuesHandler } = useInput({
    name: '',
    email: '',
    title: '',
    body: '',
  });
  const posts = JSON.parse(localStorage.getItem('posts'));

  const isFormEmpty = ({ name, email, title, body }) =>
    !name || !email || !title || !body;

  const submitPost = postData => {
    jsonPlaceholderApi.post('/posts', postData).then(({ data }) => {
      if (posts) {
        return localStorage.setItem('posts', JSON.stringify([...posts, data]));
      }

      localStorage.setItem('posts', JSON.stringify([data]));
    });
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (isFormEmpty(values)) {
      console.log('fill in the inputs');
      return;
    }

    const postData = { ...values, userId: 11 };
    if (posts) {
      postData.id = posts[posts.length - 1].id + 1;
      console.log(postData);
      submitPost(postData);
      return;
    }
    submitPost(postData);
  };

  return (
    <Form
      inputs={values}
      onChangeInput={onChangeValuesHandler}
      onSubmit={onSubmitHandler}
    />
  );
};
export default CreatePost;
