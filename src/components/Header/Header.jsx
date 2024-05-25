import { Component } from 'react'

export class Header extends Component {
  render() {
    const movies = this.props.movies;
    return (
        <>
            <h2>Header</h2>
            <p>Here you can read more about:</p>
            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.title}>{movie.title}</li>
                    )
                })}
            </ul>
        </>
    )
  }
}

export default Header