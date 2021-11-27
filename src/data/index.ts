import {CountryModel} from '~/models/country';

export const DATA_COUNTRY_TEMP: CountryModel[] = [
  {
    __typename: 'Country',
    name: 'Andorra',
    code: 'AD',
    capital: 'Andorra la Vella',
    currency: 'EUR',
    emoji: '🇦🇩',
    phone: '376',
    languages: [
      {
        code: 'ca',
        name: 'Catalan',
      },
    ],
  },
  {
    __typename: 'Country',
    name: 'United Arab Emirates',
    code: 'AE',
    capital: 'Abu Dhabi',
    currency: 'AED',
    emoji: '🇦🇪',
    phone: '971',
    languages: [
      {
        code: 'ar',
        name: 'Arabic',
      },
    ],
  },
  {
    __typename: 'Country',
    name: 'Afghanistan',
    code: 'AF',
    capital: 'Kabul',
    currency: 'AFN',
    emoji: '🇦🇫',
    phone: '93',
    languages: [
      {
        code: 'ps',
        name: 'Pashto',
      },
      {
        code: 'uz',
        name: 'Uzbek',
      },
      {
        code: 'tk',
        name: 'Turkmen',
      },
    ],
  },
  {
    __typename: 'Country',
    name: 'Antigua and Barbuda',
    code: 'AG',
    capital: "Saint John's",
    currency: 'XCD',
    emoji: '🇦🇬',
    phone: '1268',
    languages: [
      {
        code: 'en',
        name: 'English',
      },
    ],
  },
];
