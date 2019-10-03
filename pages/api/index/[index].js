export default (req, res) => {
  const greetings = ['Hello', 'Hey', 'How do', 'Howdy'];
  const number = Math.floor(Math.random() * greetings.length);
  const greeting = greetings[number];

  console.log('NAME', req.query.user);
  res.send(`${greeting}, ${req.query.user}!`);
};
