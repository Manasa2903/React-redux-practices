import { connect } from "react-redux";
import buyIceCream from "../redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h1>Ice Cream Count : {props.numOfIceCreams}</h1>
      <button onClick={props.buyIceCream}> Buy Ice cream</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  numOfIceCreams: state.iceCream.iceCreamCount,
});

const mapDispatchToProps = (dispatch) => ({
  buyIceCream: () => dispatch(buyIceCream()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
