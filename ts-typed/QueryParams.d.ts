

export function parseQueryParams(queryString: string): {
  [key: string]: string;
};

export function toQueryString(params: {
  [key: string]: string | number;
}): string;