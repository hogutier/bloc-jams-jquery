class Helper {
  playPauseAndUpdate(song) {
    let totalTime = player.getDuration();
    player.playPause(song);
    $('#time-control .total-time').text(player.prettyTime(totalTime));
  }
}

const helper = new Helper();
