const Main = () => {
  const fn = () => {
    console.log("click");
  }

  return <h1 onClick={fn}>main</h1>;
};

export default Main;
