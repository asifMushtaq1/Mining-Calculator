import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'

const SongList = (props) => {
  const renderSongList = () => {
    return props.songs.map(song => {
      return (
        <div className = 'item' key = {song.title}>
          <div className = "right floated content">
            <button 
            className = "ui button primary"
            onClick = {() => props.selectSong(song)
            }>
              Select
            </button>
            </div>
            <div className = "content">
              {song.title}
            </div>
        </div>
      );
    });
  }

   return <div className = "ui divided list" >{ renderSongList() }</div>

}
const mapStateToProps = state => {
  console.log(state);
  return {
    songs : state.songs
  }
}
  export default connect(mapStateToProps,{ selectSong })(SongList);