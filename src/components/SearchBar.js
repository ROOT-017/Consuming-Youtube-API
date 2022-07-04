import react from "react";

class SearchBar extends react.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);

  };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="serach-bar ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Seach Here:</label>
            <input
              type="text"
              className="field"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;