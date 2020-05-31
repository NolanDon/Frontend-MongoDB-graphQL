import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import MainPage from './containers/MainPage';
import CircularProgress from '@material-ui/core/CircularProgress';
import environment from '../environment';

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            notes {
              _id
              content
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <CircularProgress />;
          }
          return <MainPage {...props} />;
        }}
      />
    );
  }
}