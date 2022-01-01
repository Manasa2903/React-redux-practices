import { connect } from "react-redux";
import { buyCake } from "../redux";
import { useState } from "react";

const CustomInputCake = (props) => {
  const [inputNumber, setInputNumber] = useState(1);
  return (
    <>
      <h1>Number of Cakes : {props.numOfCakes}</h1>
      <input
        type="text"
        Number
        value={inputNumber}
        onChange={(e) => {
          setInputNumber(e.target.value);
        }}
      />
      <button onClick={() => props.buyCake(inputNumber)}>
        Buy {inputNumber} cakes
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCAkes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: (inputNumber) => dispatch(buyCake(inputNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomInputCake);
