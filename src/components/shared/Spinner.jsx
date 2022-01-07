import FadeLoader from "react-spinners/FadeLoader";

function Spinner() {
  return (
    <div style={{ width: 100, margin: "auto", display: "block" }}>
      <FadeLoader color={"white"} height={50} margin={30} />
    </div>
  );
}

export default Spinner;
