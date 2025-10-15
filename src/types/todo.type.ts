type ExtraPropertyType = {
  [key: string]: string;
};

export type Todo = {
  id: string;
  title: string;
  contents: string;
  createdAt: number;
  extraProperty?: ExtraPropertyType;
};

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}
