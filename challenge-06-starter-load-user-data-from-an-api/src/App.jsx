import { useEffect, useState } from "react";
import { fetchUser } from "./api/user";

// Change the code below this line.
const App = () => {
  const [user, setUser] = useState(___);

  useEffect(() => {
    fetchUser().then((response) => {
      setUser(___);
    });
  }, []);

  if (user === null) {
    return <p>___</p>;
  }

  return (
    <>
      <h2>{___}</h2>
      <p>{___}</p>
    </>
  );
};
// Change the code above this line.

export default App;
