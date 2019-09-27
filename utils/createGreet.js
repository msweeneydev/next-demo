export default () => {
  const greetings = ['Hello', 'Hey', 'How do', 'Howdy'];
  const number = Math.floor(Math.random() * greetings.length);
  const greeting = greetings[number];
  return greeting;
};
