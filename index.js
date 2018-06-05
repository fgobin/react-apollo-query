import React from 'react';
import { Query } from 'react-apollo';

const withQuery = ({ query, options }) => Component => (props) => {
    const opts = options ? options(props) : {};
    return (
      <Query
        query={query}
        variables={opts.variables || {}}
      >
        {({ loading, error, data }) => {
          if (loading) return (<div> Loading...</div>);
          else if (error) return (<div> Error...</div>);
          return (
            <Component {...data} {...props} />
          );
        }}
      </Query>
    );
  };
module.exports = withQuery
