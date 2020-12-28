export interface inputParams {
  inputQuery: string;
  inputStars: string;
  inputFork: boolean;
  responseLoading: boolean;
  inputLicense: string;
}
export interface ResultsProps {
  query: string;
  data?: RepoItem[] | any;
}
export interface RepoItem {
  name: string;
  owner: { login: string };
  html_url: string;
  description: string;
  stargazers_count: number;
  license: { name: string };
  fork: boolean;
}

export interface containerState extends inputParams {
  isResponseLoaded: boolean;
  repositories?: repositoryItem[];
  name: string;
  owner: string;
  html_url: string;
  description: string;
  invalidInput: boolean;
  licenseList: string[];
  icon: string;
}

export interface dropdownState {
  licenseList: string[];
  showlicenseList: boolean;
  selectedLicense: string;
  license: string;
  icon: string;
  handleQueryLicenseDropDown: (input: string) => void;
}

export interface repositoriesTypes {
  query?: string;
  repositories?: repositoryItem[] | any;
}

export interface repositoryItem {
  name: string;
  owner: { login: string };
  html_url: string;
  description: string;
  stargazers_count: number;
  license: { name: string };
  fork: boolean;
}

export interface responseLoadingType {
  responseLoading: boolean;
}
