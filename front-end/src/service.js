export const displayBooks = async () => {
  const url = 'http://localhost:3333/books';
  try {
    const reponse = await fetch(url);
    const result = await reponse.json();
    return result;
  } catch(e) {
    console.log(e.message);
  }
}

export const wellcomeMessage = async () => {
  const url = 'http://localhost:3333/';
  try {
    const reponse = await fetch(url);
    const result = await reponse.json();
    return result;
  } catch(e) {
    console.log(e.message);
  }
}