import { buyCake } from "../redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
      {console.log(props)}
      <h1>Number of Cakes : {props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    numOfCakes: state.cake.numOfCAkes,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
