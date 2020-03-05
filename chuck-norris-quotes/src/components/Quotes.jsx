import React from "react";
import { connect } from "react-redux";
import { getQuote } from "../store/actions/reducers/cardActions";

function Quotes(props) {
  if (props.isFetching) {
    return <h2>Fetching a joke now!</h2>;
  }

  return (
    <div>
      <h1>Joke: </h1>
      <p>{props.quote}</p>
      <button onClick={props.getQuote}>Get New Joke</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

const mapDispatchToProps = {
  getQuote
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
