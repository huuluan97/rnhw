import {LanguageModel} from './language';

export interface CountryModel {
  __typename: string;
  name: string;
  code: string;
  capital: string;
  phone: string;
  currency: string;
  emoji: string;
  languages: LanguageModel[];
}

export interface CountryListModel {
  countries: CountryModel[];
}
