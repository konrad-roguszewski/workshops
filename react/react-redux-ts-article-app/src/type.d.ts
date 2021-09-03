// reflects the shape of a given article
interface IArticle {
  id: number;
  title: string;
  body: string;
};

// type for state object
type ArticleState = {
  articles: IArticle[];
};

// type for action creator
type ArticleAction = {
  type: string;
  article: IArticle;
};

// type for dispatch function
type DispatchType = (args: ArticleAction) => ArticleAction;
