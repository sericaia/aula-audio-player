import player from './player';

describe('player reducer', () => {
  it('should handle PLAY_SONG', () => {
    expect(
      player(
        {
          songId: null,
          playing: false
        },
        {
          type: 'PLAY_SONG',
          id: 1
        }
      )
    ).toEqual({
      songId: 1,
      playing: true
    });
  });

  it('should handle PAUSE_SONG', () => {
    expect(
      player(
        {
          songId: 1,
          playing: true
        },
        {
          type: 'PAUSE_SONG'
        }
      )
    ).toEqual({
      songId: null,
      playing: false
    });
  });
});
