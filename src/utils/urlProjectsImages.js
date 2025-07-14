import { urlImages } from "../data/urlProjects";

export const createUrlImage = (id) => {
   const url = urlImages.filter( (project) => project.includes(id) );
   return url;
};

