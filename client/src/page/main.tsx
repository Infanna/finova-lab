import Navbar from "../layout/Navbar/Navbar";

const Main = () => {
  const fn = () => {
    console.log("click");
  };

  return (
    <>
      <Navbar />
      <h1 onClick={fn}>main</h1>
    </>
  );
};

export default Main;
