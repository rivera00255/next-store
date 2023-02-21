import { Method } from '@/types';

const fetcher = async (method: Method, url: string, body?: { [key: string]: any }) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export default fetcher;
