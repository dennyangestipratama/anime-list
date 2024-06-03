export type ButtonType = {
  handleClick: () => void;
};

export type ButtonTrailerType = ButtonType & {
  url: string;
};

export type ButtonFavoriteType = ButtonType & {
  isFavorite: boolean;
};
