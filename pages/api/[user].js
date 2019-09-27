// import createGreet from '../utils/createGreet';
import createGreet from '../../utils/createGreet';

export default (req, res) => {
  // const greetings = ['Hello', 'Hey', 'How do', 'Howdy'];
  // const number = Math.floor(Math.random() * greetings.length);
  // const greeting = greetings[number];
  console.log(createGreet());
  // console.log('GREETING', greeting);
  console.log('NAME', req.query.user);
  res.send(`${createGreet()}, ${req.query.user}!`);
};
