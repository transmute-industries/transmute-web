import React from 'react';
import { connect } from 'react-redux';

const SignIn = ({ search }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  }}>
    <div
      className="demo-card-wide mdl-card mdl-shadow--2dp"
      style={{
        width: 800,
        margin: '0 auto',
      }}
    >
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Sign in with Metamask</h2>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    user: {},
  };
};

export default connect(mapStateToProps)(SignIn);
