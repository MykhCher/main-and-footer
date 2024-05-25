import { Component } from 'react'

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './App.css'
import Footer from './components/Footer/Footer';


class App extends Component {
  state = {
    movies: [
      {
        title: 'Gladiator',
        description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
        actors: ['Russel Crowe', 'Joaquin Phoenix', 'Connie Nielsen', 'Oliver Reed'],
        info: {
          country: 'USA', 
          company: 'Dreamworks', 
          genre: 'Action', 
          year: '2000',
        },
      }, 
      {
        title: 'Harry Potter',
        description: 'Adventures of the young wizard Harry Potter and his friends Hermione Granger and Ron Weasley, who study at Hogwarts School of Witchcraft and Wizardry',
        actors: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson', 'Alan Rickman'],
        info: {
          country: 'UK', 
          company: 'Warner Bros', 
          genre: 'Fantasy', 
          year: '2001',
        },
      }, 
      {
        title: 'Lord of the Rings',
        description: 'A Hobbit Frodo Baggins and eight companions settle on an adventure to Mordor in order to destroy the One Ring.',
        actors: ['Elijah Wood', 'Ian McKellen', 'Orldando Bloom', 'Sean Bean'],
        info: {
          country: 'New Zealand', 
          company: 'New Line Cinema', 
          genre: 'Fantasy', 
          year: '2001',
        },
      }
    ],
  };

  render() {
      return (
        <>
          <div className="card">
            <Header 
              movies={this.state.movies}
            />
            <Main 
              movies={this.state.movies}
            />
            <Footer />
          </div>
        </>
      )
    }
  }

export default App
