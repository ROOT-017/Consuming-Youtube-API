import React from "react";
import SearchBar from "./SearchBar";
import ApiRequest from "./API/ApiRequest";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [] ,selectedVideo: null};

  onTermSubmit = async (term) => {
    const response = await ApiRequest.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect=(video)=>{
    console.log("from App.js",video);
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* <VideoDetail videos={this.state.videos}/> */}
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    );
  }
}

export default App;
