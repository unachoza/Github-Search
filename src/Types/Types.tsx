export interface UserInputs {
  query: string;
  stars: string;
  selectedLicense: string;
  fork: boolean;
  responseLoading: boolean;
}
export interface ContainerState extends UserInputs {
  isResponseLoaded: boolean;
  repositories?: RepositoryDetails[];
  invalidInput: boolean;
  licenseList: string[];
  icon: string;
}
export interface Repositories {
  repositories?: RepositoryDetails[];
}
export interface RepositoryDetails {
  name: string;
  owner: { login: string };
  html_url: string;
  description: string;
  stargazers_count: number;
  license: { name: string };
  fork: boolean;
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
