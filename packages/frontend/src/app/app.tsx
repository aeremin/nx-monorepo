import React from 'react';

import './app.css';

import { Route, Link } from 'react-router-dom';
import { Entries, Entry } from '@alice-3.1/common';

class EntryCard extends React.Component<{value: Entry}> {
  render() {
    return (
      <div> {this.props.value.message} </div>
    );
  }
}

class EntriesList extends React.Component<unknown, Entries> {
  state = {entries: []}

  componentDidMount() {
    fetch("http://localhost:3333/api")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState(result);
        },
        (error) => {console.log(error)}
      )
  }


  render() {
    return this.state.entries.map((entry, index) =>
      (
        <EntryCard value={entry} key={index}/>
      ));
  }
}

export function App() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.css file.
   */
  return (
    <div className="app">
      <header className="flex">
        <h3>Welcome to frontend!</h3>
      </header>
      <main>
        <EntriesList/>
      </main>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </div>
  );
}

export default App;
