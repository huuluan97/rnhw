export interface LanguageModel {
  name: string;
  code: string;
}

export interface LanguageListModel {
  languages: LanguageModel[];
}
