function App() {
  const imageUrl =
    "https://codefinity-content-media.s3.eu-west-1.amazonaws.com/code-1/react/introduction-to-react/computer.png";

  return (
    <>
      <>
        <img src={imageUrl} alt="Computer" width={256} />
        <h3>Computer</h3>
        <span>Price: $129.99</span>
        <p>New Model</p>
      </>
    </>
  );
}

export default App;
