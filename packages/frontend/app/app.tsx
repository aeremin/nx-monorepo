import React from 'react';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Link, useParams, Switch, BrowserRouter as Router, RouteComponentProps } from 'react-router-dom';
import { Entries, Entry } from '@nx-monorepo/common/dto/model.dto';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

class EntryCard extends React.Component<{ value: Entry }> {
  render() {
    return <Alert variant={'info'}> {this.props.value.message} </Alert>;
  }
}

class EntriesList extends React.Component<unknown, Entries> {
  state = { entries: [] };

  componentDidMount() {
    axios
      .get('http://localhost:3333/api')
      .then((res) => res.data)
      .then(
        (result) => {
          this.setState(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    return this.state.entries.map((entry, index) => (
      <EntryCard value={entry} key={index} />
    ));
  }
}

interface DecodedQr {
  type: number;
  kind: number;
  validUntil: number;
  payload: string;
}

class RoutedChild extends React.Component<RouteComponentProps<{id: string}>, DecodedQr> {
  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps: Readonly<RouteComponentProps<{id: string}>>) {
    if (prevProps.match.params.id != this.props.match.params.id) {
      this.fetch();
    }
  }

  fetch() {
    axios
      .get(`https://qr.aerem.in/decode?content=${this.props.match.params.id}`)
      .then((res) => res.data)
      .then(
        (result) => {
          this.setState(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    if (!this.state) return <div/>;

    return (
      <div>
        <h3>Payload: {this.state.payload}</h3>
      </div>
    );
  }
}

export function App() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.css file.
   */
  return (
    <Router>
    <div className="app">
      <header className="flex">
        <h3>Welcome to frontend!</h3>
      </header>
      <main>
        <EntriesList />
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
          <li>
            <Link to="/test/1035AQB2ZXRr2228">Test 1</Link>
          </li>
          <li>
            <Link to="/test/a20dAQB2o4hf154">Test 2</Link>
          </li>
        </ul>
      </div>
    <Switch>
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
      <Route path="/test/:id" component={RoutedChild} />
      {/* END: routes */}
    </Switch>
    </div>
      </Router>
  );
}

export default App;
