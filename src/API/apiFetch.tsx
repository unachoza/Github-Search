// import { type } from "os";
// import { RepoItem } from "Components/Results/ResultsList";

// type Response = RepoItem[]

export const fetchGithub = (
  text: string,
  license: string,
  forked: boolean,
  stars: string,
  loading: boolean
): Promise<any> => {
  loading = true;

  return fetch(
    `https://api.github.com/search/repositories?q=${encodeURIComponent(text)}+license:${encodeURIComponent(
      license
    )}+stars:${encodeURIComponent(stars)}+fork:${forked}&sort=stars&order=desc`
  );
};
