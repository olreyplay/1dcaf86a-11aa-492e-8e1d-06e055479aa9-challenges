const avatarUrl =
  "https://codefinity-content-media-v2.s3.eu-west-1.amazonaws.com/courses/1dcaf86a-11aa-492e-8e1d-06e055479aa9/9ea7774a-16ac-4122-9a8b-a9a9d105e7c5/boy.png";

// Change the code below this line.
const App = () => {
  return (
    <>
      <img src={avatarUrl} alt="User Avatar" width={120} />
      <h2>Alex Johnson</h2>
      <p>Frontend Developer</p>
      <p>Loves React and building UI projects</p>
    </>
  );
};
// Change the code above this line.

export default App;
