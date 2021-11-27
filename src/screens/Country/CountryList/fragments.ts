import {gql} from '@apollo/client';

const FETCH_ALL_COUNTRY_LIST = gql`
  query {
    countries {
      name
      code
      capital
      currency
      emoji
    }
  }
`;

export {FETCH_ALL_COUNTRY_LIST};
