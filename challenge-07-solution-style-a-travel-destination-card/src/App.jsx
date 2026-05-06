import "./styles.css";

const imageUrl =
  "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop";

const descriptionStyles = {
  color: "#555",
  fontSize: "18px",
  lineHeight: "1.5",
};

// Change the code below this line.
const App = () => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Santorini" className="card-image" />

      <h2 className="title">Santorini, Greece</h2>

      <p style={descriptionStyles}>
        Beautiful sunsets, white houses, and crystal clear water.
      </p>
    </div>
  );
};
// Change the code above this line.

export default App;
