import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
  if(!props.selectedSong){
    return <div>Select a song</div>
  }
  const {title,duration} = props.selectedSong;
  return(
    <div>
      <h3> Details for:</h3>
     <p>
      Title :  {title}
      <br />
      Duration: {duration}
    </p>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong
  };
};
export default connect(mapStateToProps,null)(SongDetail)