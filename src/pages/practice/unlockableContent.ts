export interface SongTutorial {
  title: string;
  artist: string;
  difficulty: string;
  chords: string[];
  strummingPattern?: string;
  videoUrl: string;
  tabs?: string;
  notes: string;
}

export interface StrummingPattern {
  name: string;
  difficulty: string;
  pattern: string;
  description: string;
  commonSongs: string[];
  videoUrl: string;
}

export interface PracticeRoutine {
  title: string;
  duration: number;
  description: string;
  exercises: string[];
  difficulty: string;
  focusAreas: string[];
}

export const songTutorials: { [key: number]: SongTutorial[] } = {
  2: [
    {
      title: "Every Rose Has Its Thorn",
      artist: "Poison",
      difficulty: "Beginner",
      chords: ["G", "Cadd9"],
      strummingPattern: "G G G G, Cadd9 Cadd9 Cadd9 Cadd9",
      videoUrl: "https://www.youtube.com/watch?v=GlPlfCy1urI",
      notes: "Perfect first song - uses basic open chords with simple strumming"
    }
  ],
  3: [
    {
      title: "Sweet Home Alabama",
      artist: "Lynyrd Skynyrd",
      difficulty: "Beginner-Intermediate",
      chords: ["Dsus4", "Cadd9", "G"],
      strummingPattern: "Dsus4 Dsus4 Cadd9 Cadd9 G G G G",
      videoUrl: "https://www.youtube.com/watch?v=kNj3aPiudMg",
      notes: "Beautiful progression with a slightly more complex strumming pattern"
    }
  ],
  4: [
    {
      title: "Hey There Delilah",
      artist: "Plain White T's",
      difficulty: "Intermediate",
      chords: ["D", "F#m", "Bm", "G", "A"],
      strummingPattern: "D DU D DU",
      videoUrl: "https://www.youtube.com/watch?v=EbxkOntz2SA",
      notes: "Introduces fingerpicking pattern option"
    }
  ],
  5: [
    {
      title: "Can't Help Falling in Love",
      artist: "Elvis Presley",
      difficulty: "Intermediate",
      chords: ["C", "Em", "Am", "F", "G"],
      strummingPattern: "D DU UDU",
      videoUrl: "https://www.youtube.com/watch?v=vGJTaP6anOU",
      notes: "Beautiful ballad with a mix of strumming and fingerpicking"
    }
  ]
};

export const strummingPatterns: { [key: number]: StrummingPattern[] } = {
  2: [
    {
      name: "Basic Down Strums",
      difficulty: "Beginner",
      pattern: "D D D D",
      description: "The foundation of all strumming patterns",
      commonSongs: ["Horse With No Name", "Jamming"],
      videoUrl: "https://www.youtube.com/watch?v=example1"
    },
    {
      name: "Down-Up Basic",
      difficulty: "Beginner",
      pattern: "D DU D DU",
      description: "The most common beginner pattern",
      commonSongs: ["Brown Eyed Girl", "Sweet Home Alabama"],
      videoUrl: "https://www.youtube.com/watch?v=example2"
    }
  ],
  3: [
    {
      name: "Four-Beat Folk",
      difficulty: "Intermediate",
      pattern: "D DU UDU",
      description: "Common in folk and pop music",
      commonSongs: ["Perfect", "Let Her Go"],
      videoUrl: "https://www.youtube.com/watch?v=example3"
    }
  ]
};

export const unlockedPracticeRoutines: { [key: number]: PracticeRoutine[] } = {
  2: [
    {
      title: "10-Minute Morning Warmup",
      duration: 10,
      difficulty: "Beginner",
      description: "Quick but effective morning practice routine",
      focusAreas: ["Finger warmup", "Basic chords", "Simple transitions"],
      exercises: [
        "1. Finger stretches (1 minute)",
        "2. Single string practice (2 minutes)",
        "3. Basic chord review: A, D, E (3 minutes)",
        "4. Simple transitions practice (4 minutes)"
      ]
    }
  ],
  4: [
    {
      title: "Chord Transition Builder",
      duration: 20,
      difficulty: "Intermediate",
      description: "Focus on smooth chord transitions",
      focusAreas: ["Chord transitions", "Timing", "Clean changes"],
      exercises: [
        "1. Warm-up with basic transitions (3 minutes)",
        "2. New chord pair introduction (5 minutes)",
        "3. Speed building exercises (7 minutes)",
        "4. Real song application (5 minutes)"
      ]
    }
  ]
};

export const backingTracks: { [key: number]: string[] } = {
  3: [
    "Slow Blues in A (60 BPM)",
    "Basic Rock Beat in E (80 BPM)",
    "Folk Progression in G (70 BPM)"
  ],
  7: [
    "Blues Shuffle in E (100 BPM)",
    "Pop Progression in C (120 BPM)",
    "Rock Beat in A (140 BPM)",
    "Jazz Standards in Dm (90 BPM)"
  ]
};

export const musicTheory: { [key: number]: string[] } = {
  8: [
    "Understanding the Major Scale",
    "Basic Chord Construction",
    "Common Chord Progressions",
    "Introduction to Keys and the Circle of Fifths"
  ]
};

export const badges: { [key: number]: {
  title: string,
  description: string,
  imageUrl: string
}} = {
  5: {
    title: "Rhythm Master",
    description: "Mastered 5 different strumming patterns",
    imageUrl: "/badges/rhythm-master.png"
  },
  9: {
    title: "Guitar Hero",
    description: "Completed 50 daily challenges",
    imageUrl: "/badges/guitar-hero.png"
  },
  10: {
    title: "Guitar Master",
    description: "Reached the highest level of achievement",
    imageUrl: "/badges/guitar-master.png"
  }
}; 