export const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Mia Anderson",
        job: "Software Engineer",
      });
    }, 800);
  });
};
