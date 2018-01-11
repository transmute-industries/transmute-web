import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Home = ({ search }) => (
  <div>
  
  </div>
);

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
