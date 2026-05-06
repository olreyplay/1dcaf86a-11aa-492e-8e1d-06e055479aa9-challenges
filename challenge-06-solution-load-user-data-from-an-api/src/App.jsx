import { useEffect, useState } from "react";
import { fetchUser } from "./api/user";

// Change the code below this line.
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then((response) => {
      setUser(response);
    });
  }, []);

  if (user === null) {
    return <p>Loading user...</p>;
  }

  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.job}</p>
    </>
  );
};
// Change the code above this line.

export default App;
