export interface ChordVariation {
  position: string;  // e.g., "Open", "Barre (5th fret)", "Alternative"
  diagram: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  videoUrl?: string;
}

export interface ChordType {
  name: string;
  category: string;
  variations: ChordVariation[];
  audioUrl?: string;
}

export const categories = [
  'All',
  'Major Chords',
  'Minor Chords',
  'Seventh Chords',
  'Minor Seventh Chords',
  'Major Seventh Chords',
  'Diminished Chords',
  'Augmented Chords',
  'Suspended Chords',
  'Power Chords',
  'Extended Chords'
];

export const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export const chordData: ChordType[] = [
  // Major Chords
  {
    name: 'A Major',
    category: 'Major Chords',
    audioUrl: 'https://www.youtube.com/watch?v=_ChC3GpcFh4',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 X-0-2-2-2-0',
        description: 'The basic open A major chord. Place your first, second, and third fingers on the second fret of the B, G, and D strings.',
        videoUrl: 'https://www.youtube.com/watch?v=_ChC3GpcFh4'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-7-6-5-5',
        description: 'Barre A major chord using the E shape. Place your first finger across all strings at the 5th fret, then use your remaining fingers to form the E shape.',
        videoUrl: 'https://www.youtube.com/watch?v=EwAr7gmFjYQ'
      },
      {
        position: 'Barre (12th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 12-14-14-13-12-12',
        description: 'Higher position barre A major chord. Same shape as the 5th fret version but played at the 12th fret for a brighter sound.',
        videoUrl: 'https://www.youtube.com/watch?v=EwAr7gmFjYQ'
      }
    ]
  },
  {
    name: 'B Major',
    category: 'Major Chords',
    audioUrl: 'https://www.youtube.com/watch?v=vhkqRU2uW2M',
    variations: [
      {
        position: 'Barre (2nd fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 X-2-4-4-4-2',
        description: 'The standard B major barre chord. Place your first finger across all strings at the second fret, and use your remaining fingers for the fourth fret notes.',
        videoUrl: 'https://www.youtube.com/watch?v=vhkqRU2uW2M'
      },
      {
        position: 'Alternative (7th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 7-9-9-8-7-7',
        description: 'Alternative B major using the A shape at the 7th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=vhkqRU2uW2M'
      }
    ]
  },
  {
    name: 'C Major',
    category: 'Major Chords',
    audioUrl: 'https://www.youtube.com/watch?v=djlrhXYVyJQ',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 X-3-2-0-1-0',
        description: 'The basic open C major chord. Place your first finger on the first fret of the B string, your second finger on the second fret of the D string, and your third finger on the third fret of the A string.',
        videoUrl: 'https://www.youtube.com/watch?v=djlrhXYVyJQ'
      },
      {
        position: 'Barre (8th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 8-10-10-9-8-8',
        description: 'Barre C major chord using the A shape at the 8th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=1ClBmJ2nbxA'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-3-5-5-5-3',
        description: 'Alternative voicing of C major using a partial barre chord shape.',
        videoUrl: 'https://www.youtube.com/watch?v=djlrhXYVyJQ'
      }
    ]
  },
  {
    name: 'D Major',
    category: 'Major Chords',
    audioUrl: 'https://www.youtube.com/watch?v=D7Mgwug0Kzk',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 X-X-0-2-3-2',
        description: 'The basic open D major chord. Place your first finger on the second fret of the G string, your second finger on the second fret of the high E string, and your third finger on the third fret of the B string.',
        videoUrl: 'https://www.youtube.com/watch?v=D7Mgwug0Kzk'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 X-5-7-5-7-5',
        description: 'Barre D major chord using the A7 shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=D7Mgwug0Kzk'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Beginner',
        diagram: '🎸 X-5-4-5-3-X',
        description: 'Alternative voicing of D major that emphasizes the seventh note.',
        videoUrl: 'https://www.youtube.com/watch?v=D7Mgwug0Kzk'
      }
    ]
  },
  {
    name: 'E Major',
    category: 'Major Chords',
    audioUrl: 'https://www.youtube.com/watch?v=SnbIbTG4ivU',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 0-2-2-1-0-0',
        description: 'The basic open E major chord. Place your first finger on the first fret of the G string, and your second and third fingers on the second fret of the A and D strings.',
        videoUrl: 'https://www.youtube.com/watch?v=SnbIbTG4ivU'
      },
      {
        position: 'Barre (7th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 7-9-9-8-7-7',
        description: 'Barre E major chord. Place your first finger across all strings at the 7th fret, then use your remaining fingers in the A shape.',
        videoUrl: 'https://www.youtube.com/watch?v=SnbIbTG4ivU'
      }
    ]
  },
  {
    name: 'F Major',
    category: 'Major Chords',
    audioUrl: 'https://www.youtube.com/watch?v=wbFlPJqEgLI',
    variations: [
      {
        position: 'Open',
        difficulty: 'Intermediate',
        diagram: '🎸 1-3-3-2-1-1',
        description: 'The basic open F major chord. Place your first finger on the first fret of the G string, and your remaining fingers for the other notes.',
        videoUrl: 'https://www.youtube.com/watch?v=wbFlPJqEgLI'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-7-6-5-5',
        description: 'Barre F major chord using the E shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=wbFlPJqEgLI'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-3-5-5-5-3',
        description: 'Alternative voicing of F major using a partial barre chord shape.',
        videoUrl: 'https://www.youtube.com/watch?v=wbFlPJqEgLI'
      }
    ]
  },
  {
    name: 'G Major',
    category: 'Major Chords',
    audioUrl: 'https://www.youtube.com/watch?v=dlDXIVxYxBw',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 3-2-0-0-0-3',
        description: 'The basic open G major chord. Place your first finger on the second fret of the A string, your second finger on the third fret of the low E string, and your third finger on the third fret of the high E string.',
        videoUrl: 'https://www.youtube.com/watch?v=dlDXIVxYxBw'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-5-7-5-5',
        description: 'Barre G major chord using the B7 shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=dlDXIVxYxBw'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 5-4-5-3-5-5',
        description: 'Alternative voicing of G major that emphasizes the fifth note.',
        videoUrl: 'https://www.youtube.com/watch?v=dlDXIVxYxBw'
      }
    ]
  },

  // Minor Chords
  {
    name: 'Am (A Minor)',
    category: 'Minor Chords',
    audioUrl: 'https://www.youtube.com/watch?v=3q8vFUe9vEc',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 X-0-2-2-1-0',
        description: 'The basic open A minor chord. Place your first finger on the first fret of the B string, and your second and third fingers on the second fret of the D and G strings.',
        videoUrl: 'https://www.youtube.com/watch?v=3q8vFUe9vEc'
      },
      {
        position: 'Barre (8th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 8-10-10-9-8-8',
        description: 'Barre A minor chord using the A shape at the 8th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=3q8vFUe9vEc'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-3-5-5-5-3',
        description: 'Alternative voicing of A minor using a partial barre chord shape.',
        videoUrl: 'https://www.youtube.com/watch?v=3q8vFUe9vEc'
      }
    ]
  },
  {
    name: 'Bm (B Minor)',
    category: 'Minor Chords',
    audioUrl: 'https://www.youtube.com/watch?v=aX5nHnwgKvM',
    variations: [
      {
        position: 'Barre (2nd fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 X-2-4-4-3-2',
        description: 'The standard B minor barre chord. Place your first finger across all strings at the second fret, and use your remaining fingers for the other notes.',
        videoUrl: 'https://www.youtube.com/watch?v=aX5nHnwgKvM'
      },
      {
        position: 'Alternative (7th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 7-9-9-8-7-7',
        description: 'Alternative B minor using the A shape at the 7th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=aX5nHnwgKvM'
      }
    ]
  },
  {
    name: 'Cm (C Minor)',
    category: 'Minor Chords',
    audioUrl: 'https://www.youtube.com/watch?v=9DSyuuZZiPc',
    variations: [
      {
        position: 'Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-3-5-5-4-3',
        description: 'The basic open C minor chord. Barre your first finger across all strings at the third fret, and use your remaining fingers for the other notes.',
        videoUrl: 'https://www.youtube.com/watch?v=9DSyuuZZiPc'
      },
      {
        position: 'Barre (8th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 8-10-10-9-8-8',
        description: 'Barre C minor chord using the A shape at the 8th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=9DSyuuZZiPc'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-3-5-5-5-3',
        description: 'Alternative voicing of C minor using a partial barre chord shape.',
        videoUrl: 'https://www.youtube.com/watch?v=9DSyuuZZiPc'
      }
    ]
  },
  {
    name: 'Dm (D Minor)',
    category: 'Minor Chords',
    audioUrl: 'https://www.youtube.com/watch?v=Vq6dw9zG5PY',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 X-X-0-2-3-1',
        description: 'The basic open D minor chord. Place your first finger on the first fret of the high E string.',
        videoUrl: 'https://www.youtube.com/watch?v=Vq6dw9zG5PY'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 X-5-7-5-7-5',
        description: 'Barre D minor chord using the A7 shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=Vq6dw9zG5PY'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Beginner',
        diagram: '🎸 X-5-4-5-3-X',
        description: 'Alternative voicing of D minor that emphasizes the seventh note.',
        videoUrl: 'https://www.youtube.com/watch?v=Vq6dw9zG5PY'
      }
    ]
  },
  {
    name: 'Em (E Minor)',
    category: 'Minor Chords',
    audioUrl: 'https://www.youtube.com/watch?v=EpPCfJzRiYU',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 0-2-2-0-0-0',
        description: 'The basic open E minor chord. Place your second and third fingers on the second fret of the A and D strings.',
        videoUrl: 'https://www.youtube.com/watch?v=EpPCfJzRiYU'
      },
      {
        position: 'Barre (7th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 7-9-7-8-7-7',
        description: 'Barre E minor chord using the Am7 shape at the 7th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=EpPCfJzRiYU'
      },
      {
        position: 'Alternative',
        difficulty: 'Intermediate',
        diagram: '🎸 0-2-2-0-3-0',
        description: 'Alternative voicing of E minor that includes a higher seventh note.',
        videoUrl: 'https://www.youtube.com/watch?v=EpPCfJzRiYU'
      }
    ]
  },

  // Seventh Chords
  {
    name: 'A7',
    category: 'Seventh Chords',
    audioUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 X-0-2-0-2-0',
        description: 'The basic open A7 chord. Place your first and second fingers on the second fret of the D and B strings.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-5-6-5-5',
        description: 'Barre A7 chord. Place your first finger across all strings at the 5th fret, then add the seventh note pattern.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Beginner',
        diagram: '🎸 X-0-2-2-2-3',
        description: 'Alternative voicing of A7 that includes the seventh in the highest note.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      }
    ]
  },
  {
    name: 'B7',
    category: 'Seventh Chords',
    audioUrl: 'https://www.youtube.com/watch?v=EztXCHUWh9M',
    variations: [
      {
        position: 'Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-2-1-2-0-2',
        description: 'The basic open B7 chord. Place your first, second, and third fingers on the second fret of the D, G, and B strings.',
        videoUrl: 'https://www.youtube.com/watch?v=EztXCHUWh9M'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-5-7-5-5',
        description: 'Barre B7 chord using the G7 shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=EztXCHUWh9M'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-2-1-2-0-3',
        description: 'Alternative voicing of B7 that includes a higher seventh note.',
        videoUrl: 'https://www.youtube.com/watch?v=EztXCHUWh9M'
      }
    ]
  },
  {
    name: 'C7',
    category: 'Seventh Chords',
    audioUrl: 'https://www.youtube.com/watch?v=O4xaIi36DLA',
    variations: [
      {
        position: 'Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-3-2-3-1-0',
        description: 'The basic open C7 chord. Place your first, second, and third fingers on the second fret of the D, G, and B strings.',
        videoUrl: 'https://www.youtube.com/watch?v=O4xaIi36DLA'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-5-7-5-5',
        description: 'Barre C7 chord using the A7 shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=O4xaIi36DLA'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-3-2-3-1-0',
        description: 'Alternative voicing of C7 that includes a higher seventh note.',
        videoUrl: 'https://www.youtube.com/watch?v=O4xaIi36DLA'
      }
    ]
  },
  {
    name: 'D7',
    category: 'Seventh Chords',
    audioUrl: 'https://www.youtube.com/watch?v=jWrjhallOWQ',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 X-X-0-2-1-2',
        description: 'The basic open D7 chord. Place your first finger on the first fret of the B string, and your second and third fingers on the second fret of the high E and G strings.',
        videoUrl: 'https://www.youtube.com/watch?v=jWrjhallOWQ'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 X-5-7-5-7-5',
        description: 'Barre D7 chord using the A7 shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=jWrjhallOWQ'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Beginner',
        diagram: '🎸 X-5-4-5-3-X',
        description: 'Alternative voicing of D7 that emphasizes the seventh note.',
        videoUrl: 'https://www.youtube.com/watch?v=jWrjhallOWQ'
      }
    ]
  },
  {
    name: 'E7',
    category: 'Seventh Chords',
    audioUrl: 'https://www.youtube.com/watch?v=BCmrttxBykw',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 0-2-0-1-0-0',
        description: 'The basic open E7 chord. Place your first, second, and third fingers on the second fret of the A, D, and G strings.',
        videoUrl: 'https://www.youtube.com/watch?v=BCmrttxBykw'
      },
      {
        position: 'Barre (7th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 7-9-7-8-7-7',
        description: 'Barre E7 chord using the Am7 shape at the 7th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=BCmrttxBykw'
      },
      {
        position: 'Alternative',
        difficulty: 'Intermediate',
        diagram: '🎸 0-2-2-0-3-0',
        description: 'Alternative voicing of E7 that includes a higher seventh note.',
        videoUrl: 'https://www.youtube.com/watch?v=BCmrttxBykw'
      }
    ]
  },

  // Minor Seventh Chords
  {
    name: 'Am7',
    category: 'Minor Seventh Chords',
    audioUrl: 'https://www.youtube.com/watch?v=KcHZ5_XJ_vE',
    variations: [
      {
        position: 'Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-0-2-0-1-0',
        description: 'The basic Am7 chord. A beautiful and commonly used minor seventh chord.',
        videoUrl: 'https://www.youtube.com/watch?v=KcHZ5_XJ_vE'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-5-5-5-5',
        description: 'Barre Am7 chord using the Em7 shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=KcHZ5_XJ_vE'
      }
    ]
  },
  {
    name: 'Em7',
    category: 'Minor Seventh Chords',
    audioUrl: 'https://www.youtube.com/watch?v=jJLmPN_ao_Q',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 0-2-0-0-0-0',
        description: 'The basic open Em7 chord. Only requires one finger on the second fret of the A string.',
        videoUrl: 'https://www.youtube.com/watch?v=jJLmPN_ao_Q'
      },
      {
        position: 'Barre (7th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 7-9-7-8-7-7',
        description: 'Barre Em7 chord using the Am7 shape at the 7th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=jJLmPN_ao_Q'
      },
      {
        position: 'Alternative',
        difficulty: 'Intermediate',
        diagram: '🎸 0-2-2-0-3-0',
        description: 'Alternative voicing of Em7 that includes a higher seventh note.',
        videoUrl: 'https://www.youtube.com/watch?v=jJLmPN_ao_Q'
      }
    ]
  },

  // Major Seventh Chords
  {
    name: 'Amaj7',
    category: 'Major Seventh Chords',
    audioUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s',
    variations: [
      {
        position: 'Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-0-2-1-2-0',
        description: 'The basic open Amaj7 chord. Place your first, second, and third fingers on the second fret of the D, G, and B strings.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-5-6-5-5',
        description: 'Barre Amaj7 chord. Place your first finger across all strings at the 5th fret, then add the seventh note pattern.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-0-2-2-2-3',
        description: 'Alternative voicing of Amaj7 that includes the seventh in the highest note.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      }
    ]
  },
  {
    name: 'Cmaj7',
    category: 'Major Seventh Chords',
    audioUrl: 'https://www.youtube.com/watch?v=O4xaIi36DLA',
    variations: [
      {
        position: 'Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-3-2-0-0-0',
        description: 'The basic open Cmaj7 chord. Place your first, second, and third fingers on the second fret of the D, G, and B strings.',
        videoUrl: 'https://www.youtube.com/watch?v=O4xaIi36DLA'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-5-7-5-5',
        description: 'Barre Cmaj7 chord using the A7 shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=O4xaIi36DLA'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-3-2-3-1-0',
        description: 'Alternative voicing of Cmaj7 that includes a higher seventh note.',
        videoUrl: 'https://www.youtube.com/watch?v=O4xaIi36DLA'
      }
    ]
  },

  // Suspended Chords
  {
    name: 'Asus2',
    category: 'Suspended Chords',
    audioUrl: 'https://www.youtube.com/watch?v=6HxZsLFk-nY',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 X-0-2-2-0-0',
        description: 'The basic Asus2 chord. Replaces the third with a second note for a more open sound.',
        videoUrl: 'https://www.youtube.com/watch?v=6HxZsLFk-nY'
      },
      {
        position: 'Alternative',
        difficulty: 'Intermediate',
        diagram: '🎸 X-0-2-4-0-0',
        description: 'Alternative voicing of Asus2 with a higher second.',
        videoUrl: 'https://www.youtube.com/watch?v=6HxZsLFk-nY'
      }
    ]
  },
  {
    name: 'Asus4',
    category: 'Suspended Chords',
    audioUrl: 'https://www.youtube.com/watch?v=6HxZsLFk-nY',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 X-0-2-2-3-0',
        description: 'The basic Asus4 chord. Place your first, second, and third fingers on the second fret of the D, G, and B strings.',
        videoUrl: 'https://www.youtube.com/watch?v=6HxZsLFk-nY'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-7-6-5-5',
        description: 'Barre Asus4 chord using the E shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=6HxZsLFk-nY'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-3-5-5-5-3',
        description: 'Alternative voicing of Asus4 using a partial barre chord shape.',
        videoUrl: 'https://www.youtube.com/watch?v=6HxZsLFk-nY'
      }
    ]
  },

  // Diminished Chords
  {
    name: 'Adim',
    category: 'Diminished Chords',
    audioUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s',
    variations: [
      {
        position: 'Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-0-1-2-1-X',
        description: 'The basic open A diminished chord. Place your first, second, and third fingers on the first fret of the B, D, and G strings.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-5-7-5-5',
        description: 'Barre A diminished chord using the A7 shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-0-1-2-1-X',
        description: 'Alternative voicing of A diminished chord.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      }
    ]
  },

  // Augmented Chords
  {
    name: 'Aaug',
    category: 'Augmented Chords',
    audioUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s',
    variations: [
      {
        position: 'Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-0-3-2-2-1',
        description: 'The basic open A augmented chord. Place your first, second, and third fingers on the first fret of the B, D, and G strings.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-7-6-5-5',
        description: 'Barre A augmented chord using the E shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-0-3-2-2-1',
        description: 'Alternative voicing of A augmented chord.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      }
    ]
  },

  // Power Chords
  {
    name: 'A5',
    category: 'Power Chords',
    audioUrl: 'https://www.youtube.com/watch?v=qQXD77NW9f0',
    variations: [
      {
        position: 'Basic',
        difficulty: 'Beginner',
        diagram: '🎸 X-0-2-2-X-X',
        description: 'The basic A5 power chord. Perfect for rock and metal music.',
        videoUrl: 'https://www.youtube.com/watch?v=qQXD77NW9f0'
      },
      {
        position: 'Alternative',
        difficulty: 'Beginner',
        diagram: '🎸 5-7-7-X-X-X',
        description: 'Alternative A5 power chord position using the E5 shape.',
        videoUrl: 'https://www.youtube.com/watch?v=qQXD77NW9f0'
      }
    ]
  },
  {
    name: 'E5',
    category: 'Power Chords',
    audioUrl: 'https://www.youtube.com/watch?v=EpPCfJzRiYU',
    variations: [
      {
        position: 'Open',
        difficulty: 'Beginner',
        diagram: '🎸 0-2-2-X-X-X',
        description: 'The basic open E5 power chord. Place your first, second, and third fingers on the second fret of the A, D, and G strings.',
        videoUrl: 'https://www.youtube.com/watch?v=EpPCfJzRiYU'
      },
      {
        position: 'Barre (7th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 7-9-7-8-7-7',
        description: 'Barre E5 power chord using the E7 shape at the 7th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=EpPCfJzRiYU'
      },
      {
        position: 'Alternative',
        difficulty: 'Intermediate',
        diagram: '🎸 0-2-2-X-X-X',
        description: 'Alternative voicing of E5 power chord.',
        videoUrl: 'https://www.youtube.com/watch?v=EpPCfJzRiYU'
      }
    ]
  },

  // Extended Chords
  {
    name: 'A9',
    category: 'Extended Chords',
    audioUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s',
    variations: [
      {
        position: 'Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-0-2-4-2-3',
        description: 'The basic open A9 chord. Place your first, second, and third fingers on the second fret of the D, G, and B strings.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-5-6-5-5',
        description: 'Barre A9 chord using the A7 shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-0-2-4-2-3',
        description: 'Alternative voicing of A9 chord.',
        videoUrl: 'https://www.youtube.com/watch?v=rNSwPkKZN_s'
      }
    ]
  },
  {
    name: 'C13',
    category: 'Extended Chords',
    audioUrl: 'https://www.youtube.com/watch?v=O4xaIi36DLA',
    variations: [
      {
        position: 'Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-3-2-3-3-5',
        description: 'The basic open C13 chord. Place your first, second, and third fingers on the second fret of the D, G, and B strings.',
        videoUrl: 'https://www.youtube.com/watch?v=O4xaIi36DLA'
      },
      {
        position: 'Barre (5th fret)',
        difficulty: 'Intermediate',
        diagram: '🎸 5-7-5-7-5-5',
        description: 'Barre C13 chord using the Cmaj7 shape at the 5th fret.',
        videoUrl: 'https://www.youtube.com/watch?v=O4xaIi36DLA'
      },
      {
        position: 'Alternative Open',
        difficulty: 'Intermediate',
        diagram: '🎸 X-3-2-3-3-5',
        description: 'Alternative voicing of C13 chord.',
        videoUrl: 'https://www.youtube.com/watch?v=O4xaIi36DLA'
      }
    ]
  }
]; 