import React from 'react';
import { Route, Link } from 'react-router-dom';

import pages from '../pages';

import Search from '../components/search';
import Blockie from '../components/blockie';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Progress = ({ search }) => {
  return search.fetching ? (
    <div
      style={{ width: "100%", height: 4 }}
      className="mdl-progress mdl-js-progress mdl-progress__indeterminate"
    />
  ) : (
    <div style={{ width: "100%", height: 4 }} />
  );
};

const Avatar = ({ address }) => {
  if (address) {
    return <Blockie seed={address} />
  }

  return <img src="blockie.svg" alt="blockie" />
};

const App = props => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header" style={{ backgroundColor: '#F0F0F3'}}>
    <header className="mdl-layout__header" style={{ backgroundColor: 'white'}}>
      <div className="mdl-layout__header-row">
        <Link to={pages.home.path} className="xm1 mdl-layout-title">
          <img alt="transmute" src="logo.svg" />
        </Link>
        <nav className="mdl-navigation">
          <Link to={pages.enterprise.path} className="mdl-navigation__link" style={{ color: '#BBBBBB'}}>
            Enterprise
          </Link>
          <Link to={pages.features.path} className="mdl-navigation__link" style={{ color: '#BBBBBB'}}>
            Features
          </Link>
          <Link to={pages.pricing.path} className="mdl-navigation__link" style={{ color: '#BBBBBB'}}>
            Pricing
          </Link>
          <Link to={pages.documentation.path} className="mdl-navigation__link" style={{ color: '#BBBBBB'}}>
            Documentation
          </Link>
          <Link to={pages.support.path} className="mdl-navigation__link" style={{ color: '#BBBBBB'}}>
            Support
          </Link>
        </nav>
        <Search />
        <div className="mdl-layout-spacer" />
        <Link to={pages.signin.path} className="mdl-navigation__link" style={{ color: '#BBBBBB'}}>
          Sign In
        </Link>
        <Avatar {...props.user} />
      </div>
    </header>
    <main className="mdl-layout__content">
      <Progress {...props} />

      <Route
        exact
        path={pages.home.path}
        component={pages.home.container}
      />
      <Route
        exact
        path={pages.signin.path}
        component={pages.signin.container}
      />
      <Route
        exact
        path={pages.search.path}
        component={pages.search.container}
      />
    </main>
  </div>
);

const mapStateToProps = state => {
  return {
    search: state.search,
    user: {},
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
