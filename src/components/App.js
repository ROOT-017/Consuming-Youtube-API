import React from "react";
import SearchBar from "./SearchBar";
import ApiRequest from "./API/ApiRequest";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await ApiRequest.get("/search", {
      parmas: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
