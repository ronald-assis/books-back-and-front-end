import { useEffect, useState } from 'react';
import { displayBooks, wellcomeMessage } from './service';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [wellcome, setWellcome] = useState('');
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    displayBooks()
      .then((result) => setBooks(result))
  
    wellcomeMessage()
      .then((result) => setWellcome(result.message))
  }, [])

  const handleClick = async () => {
    setDisplay(!display);
  }

  return (
    <div className="App">
     <h1>{wellcome}</h1>
     <p>Clique no botão abaixo para visulizar os livros</p>
     <button
      type='button'
      onClick={handleClick}
     >Visualizar livros</button>
     <div className="info-books">
      {display && (
        books.map((b, i) => (
          <div key={i}>
            <h1>{b.book}</h1>
            <p>{b.author}</p>
          </div>
        ))
      )}
     </div>
    </div>
  );
}

export default App;
