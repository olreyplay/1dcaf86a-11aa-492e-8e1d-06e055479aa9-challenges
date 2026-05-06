// Change the code below this line.
const StatusCard = (props) => {
  return (
    <>
      <h2>{props.name}</h2>

      <p>{props.online ? ___ : ___}</p>
    </>
  );
};
// Change the code above this line.

const App = () => {
  return (
    <>
      <StatusCard name="Emma Wilson" online={true} />
      <StatusCard name="Daniel Lee" online={false} />
      <StatusCard name="Sophia Turner" online={true} />
    </>
  );
};

export default App;
