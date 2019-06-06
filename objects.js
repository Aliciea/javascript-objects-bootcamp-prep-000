var playlist = {
  artistnames: "songtitles", 
}
function updatePlaylist(playlist, artistname, songtitle) { 
  playlist[artistname] = songtitle
  return playlist
}
function removeFromPlaylist(playlist, artistname){
  playlist[artistname]
  return delete playlist.artistname 
}