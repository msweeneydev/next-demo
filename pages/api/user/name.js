module.exports = (req, res) => {
  const greetings = ['Hello', 'Hey', 'How do', 'Howdy'];
  const number = Math.floor(Math.random() * greetings.length);
  const greeting = greetings[number];

  console.log('GREETING', greeting);
  console.log('NAME', req.body);

  res.status(200).send(`${greeting}, ${req.body}!`);
};
