import styled from '@emotion/styled';
import {useState, useEffect} from 'react';
import Quote from './components/Quote';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid #000;
  cursor: pointer;
`;

function App() {

  const [quote, getQuote] = useState({});

  const consultAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quote = await api.json();
    getQuote(quote[0])
  }

  useEffect(() => {
    consultAPI();
  }, []);

  return (
    <Container>
      <Quote
        quote={quote}
      />

      <Button
        onClick={consultAPI}
      >
        Get Quote
      </Button>
    </Container>
  );
}

export default App;
