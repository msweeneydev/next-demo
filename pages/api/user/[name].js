import createGreet from '../_utils/createGreet';

export default (req, res) => {
  console.log(createGreet());
  console.log('NAME', req.query.name);
  res.status(200).send(`${createGreet()}, ${req.query.name}!`);
};
