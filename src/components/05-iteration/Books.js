import { Component } from "react";
import { Book } from "./Book";

export class Books extends Component {
  constructor() {
    super();

    this.state = {
      books: [
        { id: 1, title: "Loon", createdAt: new Date(1995, 11, 17) },
        { id: 2, title: "Coon", createdAt: new Date(1995, 11, 17) },
        { id: 3, title: "Spoon", createdAt: new Date(1995, 11, 17) },
        { id: 4, title: "Majnoon", createdAt: new Date(1995, 11, 17) },
        { id: 5, title: "Racoon", createdAt: new Date(1995, 11, 17) },
      ],
    };

  }

  componentDidMount() {
  }

  sortById = () => {
    const sorted = this.state.books.sort((a, b) => {
      return a.id > b.id ? -1 : 1;
    });
    this.setState({
      books: sorted,
    });
  };

  render() {
    const bookList = this.state.books.map((p, i) => <Book key={i} book={p} />);

    return (
      <>
        <div>
          <h2>Sort</h2>
          <button onClick={this.sortById}>By Ids</button>
        </div>
        <div>{bookList}</div>
      </>
    );
  }
}
