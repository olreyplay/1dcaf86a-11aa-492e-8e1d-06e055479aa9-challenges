// Change the code below this line.
const UserCard = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </>
  );
};
// Change the code above this line.

const App = () => {
  return (
    <>
      <UserCard name="Emma Wilson" job="UI Designer" />
      <UserCard name="Daniel Lee" job="Frontend Developer" />
      <UserCard name="Sophia Turner" job="Product Manager" />
    </>
  );
};

export default App;
