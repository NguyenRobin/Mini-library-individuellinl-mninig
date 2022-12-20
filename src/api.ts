async function getData(): Promise<[]> {
  try {
    const url =
      'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books';
    // console.log('url ->', url);
    const response = await fetch(url);
    if (!response.ok) throw Error('Problem getting data from API! ⛔️');
    const data: Promise<[]> = await response.json();
    console.log('data ->', data);
    return data;
  } catch (error: any) {
    console.error('error.message->', error.message);
    console.log('error->', error);
    console.dir(error);
    throw error;
  }
}

export { getData };