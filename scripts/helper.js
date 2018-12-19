class Helper {
  playPauseAndUpdate(song) {
    let totalTime = player.getDuration();
    $('#time-control .total-time').text(player.prettyTime(totalTime));
    player.playPause(song);
  }
}

const helper = new Helper();
