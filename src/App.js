
import React from 'react';
import Search from './coponent/search';
import youtubeApi from'./api/youtube'
import './App.css'
import './Video.css'
//import Video from'./coponent/Video';
import VideoList from './coponent/VideoList';
import Videoplayer from './coponent/VideoPlayer';
export default class  App extends React.Component {
 state = {
   data[],
  videosMetaInfo: [],
  selectedVideoId: null
 }
 onVideoSelected=videoId=>{
   this.setState({
     selectedVideoId:videoId
   })
 }
 onSearch = async keyword => {
  const response = await youtubeApi.get("/search", {
    params: {
      q: keyword
    }
  });
  this.setState({
    videosMetaInfo: response.data.items,
    selectedVideoId: response.data.items[0].id.videoId
  });
  console.log(this.state);
};

  render(){
    return (
      <div className="App">
        <Search onSearch={this.onSearch}/>
        <VideoList onVideoSelected={this.onVideoSelected}
        data={this.state.videosMetaInfo}/>
        <Videoplayer videoId={this.state.selectedVideoId} />
      </div>
    );
  }

 }

