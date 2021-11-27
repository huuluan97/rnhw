import {gql} from '@apollo/client';

const FETCH_COUNTRY_DETAIL = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      code
      capital
      phone
      currency
      emoji
      languages {
        code
        name
      }
    }
  }
`;

export {FETCH_COUNTRY_DETAIL};
