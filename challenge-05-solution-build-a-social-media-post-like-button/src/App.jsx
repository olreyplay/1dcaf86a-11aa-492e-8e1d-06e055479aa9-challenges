import { useState } from "react";

// Change the code below this line.
const App = () => {
  const [likes, setLikes] = useState(120);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <h2>Exploring Iceland</h2>

      <p>One of the most beautiful trips I've ever had.</p>

      <p>Likes: {likes}</p>

      <button onClick={handleLike}>Like Post</button>
    </>
  );
};
// Change the code above this line.

export default App;
