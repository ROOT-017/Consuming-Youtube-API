import react from "react";

class SearchBar extends react.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    if (!this.state.term) {
      alert("Please enter a search term");
    } else {
      this.props.onFormSubmit(this.state.term);
    }
  };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="serach-bar ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui action input">
            <input
              type="text"
              placeholder="Search..."
              onChange={this.onInputChange}
              value={this.state.term}
            />
            <button className="ui button">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;