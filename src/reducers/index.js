import {combineReducers} from 'redux';


const songsReducer = () => {
   return [
     {title: 'No Scrubs',duration : '4:05'},
     {title: 'Macarena',duration : '4:00'},
     {title: 'All Star',duration : '3:05'},
     {title: 'I want',duration : '4:00'}
   ];
};

const selectedSongReducer = (selectedSong = null ,action) => {
  if(action.type === 'SONG_SELECTED'){
   return action.payload;
  }
  return selectedSong;
};
export default combineReducers({
  songs : songsReducer,
  selectedSong:selectedSongReducer
});
