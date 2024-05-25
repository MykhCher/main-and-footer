import { Component } from 'react'

export class Main extends Component {
  render() {
    const movie = this.props.movies[0];
    return (
        <>
            <h2>Main</h2>
            <div>
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p>Actors:</p>
                <ul>
                    {movie.actors.map((actor) => (
                        <li key={actor}>{actor}</li>
                    ))}
                </ul>
                <p>Info:</p>
                <ul>
                    <li>Country: {movie.info.country}</li>
                    <li>Company: {movie.info.company}</li>
                    <li>Genre: {movie.info.genre}</li>
                    <li>Year: {movie.info.year}</li>
                </ul>
            </div>
                
        </>
    )
  }
}

export default Main