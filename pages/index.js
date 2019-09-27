import Head from 'next/head';
import { useState } from 'react';

export default () => {
  const [greeting, setGreeting] = useState('Hello, User!');

  const getGreeting = async e => {
    e.preventDefault();
    const { value: name } = e.target.greeting;
    setGreeting(`Hello, ${name}!`);
  };

  //   const getGreeting = async e => {
  //     e.preventDefault();
  //     const res = await fetch(`/api/user`);
  //     const newGreeting = await res.text();
  //     setGreeting(newGreeting);
  //   };

  //   const getGreeting = async e => {
  //     e.preventDefault();
  //     const { value: name } = e.target.greeting;
  //     const res = await fetch(`/api/${name}`);
  //     const newGreeting = await res.text();
  //     setGreeting(newGreeting);
  //   };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://css.zeit.sh/v1.css"
        />
      </Head>
      <h1>{greeting}</h1>
      <form onSubmit={getGreeting}>
        <label>
          <strong>Set Greeting</strong>
        </label>
        <input name="greeting" type="text" defaultValue="" required />
        <button type="submit">Greet Me!</button>
      </form>
      <style jsx>
        {`
          form {
            display: grid;
          }
          button {
            margin-top: 1em;
          }
        `}
      </style>
    </>
  );
};
