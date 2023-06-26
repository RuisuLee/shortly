export interface IShortedUrlApiResponse {
  id: string;
  originalUrl: string;
  shortedUrl: string;
}

export type Link = IShortedUrlApiResponse;
