import { appClient } from '../Utils/http';
import constants from '../Utils/constants';

export const searchMovies = async (queryString: string) => {
  try {
    const searchData = await appClient.get(
      `/search/multi?api_key=${constants.apiKey}&language=en-US&include_adult=false&query=${queryString}`,
    );
    return searchData.data.results;
  } catch (e) {
    throw Error(e.message);
  }
};
