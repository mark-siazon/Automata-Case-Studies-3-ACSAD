export interface Author {
  surname: string;
}

export interface Website {
  title: string;
  url: string;
  description: string;
  techStack: string[];
  authors: Author[];
  imageUrl?: string;
}

export interface WebsiteProps extends Website {
  index: number;
}
