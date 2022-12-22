import { Book } from './interface';

async function getData(): Promise<Book[]> {
  try {
    const url =
      'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books';
    // console.log('url ->', url);
    const response: Response = await fetch(url);
    if (!response.ok) throw Error('Problem getting data from API! ⛔️');
    const data: Book[] = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
    // console.error('error.message->', error.message);
    // console.log('error->', error);
    // console.dir(error);
    throw error;
  }
}

export { getData };
