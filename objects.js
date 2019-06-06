var playlist = {
  artistnames: "songtitles", 
}
function updatePlaylist(playlist, artistname, songtitle) { 
  playlist[artistname] = songtitle
  return playlist
}
function removeFromPlaylist(playlist, artistnames){
  playlist[artistnames]
  return delete playlist.artistnames 
}