import songs from './songs';

describe('songs reducer', () => {
  it('should handle initial state', () => {
    expect(songs(undefined, {})).toEqual([]);
  });

  it('should handle LOAD_SONGS', () => {
    expect(
      songs([], {
        type: 'LOAD_SONGS',
        songs: []
      })
    ).toEqual([]);

    expect(
      songs([], {
        type: 'LOAD_SONGS',
        songs: [
          {
            id: 0,
            title: 'First Song'
          }
        ]
      })
    ).toEqual([
      {
        id: 0,
        title: 'First Song'
      }
    ]);

    expect(
      songs(
        [
          [
            {
              id: 0,
              title: 'First Song'
            }
          ]
        ],
        {
          type: 'LOAD_SONGS',
          songs: [
            {
              id: 1,
              title: 'Second Song'
            }
          ]
        }
      )
    ).toEqual([
      {
        id: 1,
        title: 'Second Song'
      }
    ]);
  });
});
