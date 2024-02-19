export const routeMapping: {
  [key: string]: (args?: { [key: string]: string | number }) => string;
} = {
  GetAlbums: () => {
    return "/albums";
  },
  CreateAlbums: () => {
    return "/albums";
  },

  GetPosts: () => {
    return "/posts";
  },
  CreatePosts: () => {
    return "/posts";
  },

  GetComments: (ids?: { [key: string]: string | number }) => {
    return `/posts/${ids?.["commentId"]}/comments`;
  },
};
