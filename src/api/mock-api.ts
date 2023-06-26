import { IShortedUrlApiResponse } from "../types/ShortedUrlApiResponse";

export const shortUrl = (
  originalUrl: string
): Promise<IShortedUrlApiResponse> => {
  const id = `${Math.floor(Math.random() * 1000)}qwerty`;
  const result: IShortedUrlApiResponse = {
    id: id,
    originalUrl: originalUrl,
    shortedUrl: `http://shortly/${id}`,
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, 300);
  });
};
