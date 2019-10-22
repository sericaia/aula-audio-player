import player from './player';
import status from '../constants/playerStatus';

describe('player reducer', () => {
  it('should handle PLAY_SONG', () => {
    expect(
      player(
        {
          songId: null,
          status: status.NONE
        },
        {
          type: 'PLAY_SONG',
          id: 1
        }
      )
    ).toEqual({
      songId: 1,
      status: status.PLAYING
    });
  });

  it('should handle PAUSE_SONG', () => {
    expect(
      player(
        {
          songId: 1,
          status: status.PLAYING
        },
        {
          type: 'PAUSE_SONG'
        }
      )
    ).toEqual({
      songId: 1,
      status: status.PAUSED
    });
  });

  it('should handle END_SONG', () => {
    expect(
      player(
        {
          songId: 1,
          status: status.PLAYING
        },
        {
          type: 'END_SONG'
        }
      )
    ).toEqual({
      songId: null,
      status: status.NONE
    });
  });
});
