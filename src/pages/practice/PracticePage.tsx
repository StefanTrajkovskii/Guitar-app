import React, { useState, useEffect } from 'react';
import { IconButton, Button, Tabs, Tab, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TimerIcon from '@mui/icons-material/Timer';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LevelUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import UnlockedContent from './UnlockedContent';
import WarningIcon from '@mui/icons-material/Warning';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { usePracticeTimer } from '../../contexts/PracticeTimerContext';

interface PracticeRoutine {
  duration: number;
  title: string;
  description: string;
  completed: boolean;
  exercises: string[];
}

interface DailyChallenge {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  completed: boolean;
  xp: number;
}

interface LevelReward {
  title: string;
  song: {
    title: string;
    artist: string;
    tutorialUrl: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  };
}

interface LevelRewards {
  [key: number]: LevelReward;
}

// Challenge pool
const challengePool: Omit<DailyChallenge, 'id'>[] = [
  {
    title: "Master A to D Transition",
    description: "Practice switching between A and D chords smoothly 50 times",
    difficulty: "Beginner",
    completed: false,
    xp: 100
  },
  {
    title: "Strumming Pattern Challenge",
    description: "Learn and practice the Down-Down-Up-Up-Down-Up pattern",
    difficulty: "Intermediate",
    completed: false,
    xp: 150
  },
  {
    title: "Barre Chord Marathon",
    description: "Practice F major barre chord for 10 minutes",
    difficulty: "Advanced",
    completed: false,
    xp: 200
  },
  {
    title: "Em to Am Speed Run",
    description: "Switch between Em and Am chords 40 times in 1 minute",
    difficulty: "Beginner",
    completed: false,
    xp: 100
  },
  {
    title: "Clean Chord Challenge",
    description: "Play each string of the G chord perfectly 20 times",
    difficulty: "Beginner",
    completed: false,
    xp: 120
  },
  {
    title: "Fingerpicking Intro",
    description: "Practice basic fingerpicking pattern on Am for 5 minutes",
    difficulty: "Intermediate",
    completed: false,
    xp: 150
  },
  {
    title: "Power Chord Progression",
    description: "Play A5-D5-E5 progression for 5 minutes",
    difficulty: "Intermediate",
    completed: false,
    xp: 160
  },
  {
    title: "Chord Memory Test",
    description: "Play 5 different chords from memory without looking",
    difficulty: "Intermediate",
    completed: false,
    xp: 180
  },
  {
    title: "B7 Mastery",
    description: "Practice B7 chord transitions with Em and A",
    difficulty: "Advanced",
    completed: false,
    xp: 200
  },
  {
    title: "Spider Walk Challenge",
    description: "Complete spider walk exercise on all strings without mistakes",
    difficulty: "Advanced",
    completed: false,
    xp: 220
  },
  {
    title: "Rhythm Master",
    description: "Practice syncopated strumming pattern for 8 minutes",
    difficulty: "Advanced",
    completed: false,
    xp: 250
  },
  {
    title: "Silent Switch Challenge",
    description: "Switch between C and G chords with no string noise",
    difficulty: "Intermediate",
    completed: false,
    xp: 170
  }
];

// Level thresholds
const LEVEL_THRESHOLDS = [
  0,      // Level 1: 0 XP
  300,    // Level 2: 300 XP
  700,    // Level 3: 700 XP
  1200,   // Level 4: 1200 XP
  2000,   // Level 5: 2000 XP
  3000,   // Level 6: 3000 XP
  4500,   // Level 7: 4500 XP
  6500,   // Level 8: 6500 XP
  9000,   // Level 9: 9000 XP
  12000,  // Level 10: 12000 XP
];

// Level rewards
const LEVEL_REWARDS: LevelRewards = {
  2: {
    title: "First Song Unlocked!",
    song: {
      title: "Every Rose Has Its Thorn",
      artist: "Poison",
      tutorialUrl: "https://www.youtube.com/watch?v=5rcCiXqAShY",
      difficulty: "Beginner"
    }
  },
  3: {
    title: "New Song Available!",
    song: {
      title: "Sweet Home Alabama",
      artist: "Lynyrd Skynyrd",
      tutorialUrl: "https://www.youtube.com/watch?v=kNj3aPiudMg",
      difficulty: "Beginner"
    }
  },
  4: {
    title: "Keep Going - New Song!",
    song: {
      title: "Let It Be",
      artist: "The Beatles",
      tutorialUrl: "https://www.youtube.com/watch?v=10g9Kcikdc0",
      difficulty: "Beginner"
    }
  },
  5: {
    title: "Another Song Mastered!",
    song: {
      title: "",
      artist: "",
      tutorialUrl: "",
      difficulty: "Intermediate"
    }
  },
  6: {
    title: "Getting Better!",
    song: {
      title: "",
      artist: "",
      tutorialUrl: "",
      difficulty: "Intermediate"
    }
  },
  7: {
    title: "New Challenge Song!",
    song: {
      title: "",
      artist: "",
      tutorialUrl: "",
      difficulty: "Intermediate"
    }
  },
  8: {
    title: "Advanced Song Unlocked!",
    song: {
      title: "",
      artist: "",
      tutorialUrl: "",
      difficulty: "Advanced"
    }
  },
  9: {
    title: "Almost There!",
    song: {
      title: "",
      artist: "",
      tutorialUrl: "",
      difficulty: "Advanced"
    }
  },
  10: {
    title: "Guitar Master!",
    song: {
      title: "",
      artist: "",
      tutorialUrl: "",
      difficulty: "Advanced"
    }
  }
};

const calculateLevel = (xp: number) => {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) {
      return i + 1;
    }
  }
  return 1;
};

const getNextLevelXP = (currentXP: number) => {
  for (const threshold of LEVEL_THRESHOLDS) {
    if (threshold > currentXP) {
      return threshold;
    }
  }
  return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
};

const PracticePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [streak, setStreak] = useState(0);
  const [totalXP, setTotalXP] = useState(() => {
    const savedXP = localStorage.getItem('totalXP');
    return savedXP ? parseInt(savedXP) : 0;
  });
  const [showLevelUp, setShowLevelUp] = useState(false);
  const currentLevel = calculateLevel(totalXP);
  const nextLevelXP = getNextLevelXP(totalXP);
  const [showRewards, setShowRewards] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const {
    selectedRoutine,
    timeLeft,
    isRunning,
    currentExercise,
    showPracticeModal,
    startPractice,
    endPractice,
    toggleTimer,
    nextExercise,
    previousExercise,
    setShowPracticeModal
  } = usePracticeTimer();

  const getRandomChallenges = () => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('lastChallengeDate');
    const savedChallenges = localStorage.getItem('dailyChallenges');

    if (savedDate === today && savedChallenges) {
      return JSON.parse(savedChallenges);
    }

    // Shuffle and pick 3 challenges
    const shuffled = [...challengePool]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((challenge, index) => ({
        ...challenge,
        id: index + 1
      }));

    // Save to localStorage
    localStorage.setItem('lastChallengeDate', today);
    localStorage.setItem('dailyChallenges', JSON.stringify(shuffled));

    return shuffled;
  };

  const [dailyChallenges, setDailyChallenges] = useState<DailyChallenge[]>(getRandomChallenges());

  // Check for day change
  useEffect(() => {
    const checkDate = () => {
      const today = new Date().toDateString();
      const savedDate = localStorage.getItem('lastChallengeDate');
      
      if (savedDate !== today) {
        const newChallenges = getRandomChallenges();
        setDailyChallenges(newChallenges);
        setStreak(0); // Reset streak if challenges weren't completed
      }
    };

    // Check on mount and when window regains focus
    checkDate();
    window.addEventListener('focus', checkDate);

    return () => window.removeEventListener('focus', checkDate);
  }, []);

  const [routines, setRoutines] = useState<PracticeRoutine[]>([
    {
      duration: 15,
      title: "Quick Practice",
      description: "Perfect for a busy day. Focus on essential exercises.",
      completed: false,
      exercises: [
        "1. Finger Warm-up: Gentle stretches for each finger (1 minute)",
        "2. Basic Chord Review: Practice A, D, and E chords individually (2 minutes)",
        "3. Chord Transitions: Switch between A and D chords (20 switches)",
        "4. Chord Transitions: Switch between D and E chords (20 switches)",
        "5. Basic Strumming: Down strums only with A chord (1 minute)",
        "6. Basic Strumming: Down-Up pattern with D chord (1 minute)",
        "7. Pattern Practice: Down, Down, Up, Up, Down, Up with E chord",
        "8. Mini Song: Practice 'Horse With No Name' progression (Am - E)",
        "9. Speed Challenge: Switch between any two chords as fast as possible",
        "10. Cool Down: Light strumming with your favorite chord"
      ]
    },
    {
      duration: 30,
      title: "Standard Practice",
      description: "Balanced practice session with warm-up and exercises.",
      completed: false,
      exercises: [
        "1. Comprehensive Warm-up: Finger stretches and exercises (3 minutes)",
        "2. String-by-String Practice: Play each string cleanly (2 minutes)",
        "3. Review Previous Chords: A, D, E, Em, Am (1 minute each)",
        "4. New Chord Introduction: C major chord shape and finger placement",
        "5. C Chord Practice: Strum and check each string rings clearly",
        "6. Transition Practice: A to C transitions (30 switches)",
        "7. Transition Practice: D to C transitions (30 switches)",
        "8. Strumming Pattern: Down, Down, Up, Up, Down, Up with C chord",
        "9. Strumming Pattern: Down, Up, Down, Down, Up with Am chord",
        "10. Chord Progression: Practice C - Am - Em - G progression",
        "11. Song Practice: 'Let It Be' chorus chords (C - G - Am - F)",
        "12. Finger Independence: Spider walk exercise on first 3 frets",
        "13. Speed Building: Quick switches between any chord pair",
        "14. Rhythm Practice: Strumming with metronome at 80 BPM",
        "15. Cool Down: Free play with learned chords"
      ]
    },
    {
      duration: 60,
      title: "Intensive Practice",
      description: "Complete workout for serious improvement.",
      completed: false,
      exercises: [
        "1. Full Warm-up Routine: Finger exercises and stretches (5 minutes)",
        "2. Chromatic Exercise: Play all frets on each string (5 minutes)",
        "3. Spider Walk: Practice on all strings and first 4 frets",
        "4. Review All Basic Chords: A, D, E, C, G, Em, Am (2 minutes each)",
        "5. Barre Chord Introduction: F major shape explanation",
        "6. Barre Chord Practice: F major at 1st fret (5 minutes)",
        "7. Single String Practice: Clean notes on high E string",
        "8. New Chord: B7 chord shape and practice",
        "9. Transition Drill: Em to B7 (30 switches)",
        "10. Transition Drill: G to B7 (30 switches)",
        "11. Advanced Strumming: Syncopated pattern practice",
        "12. Fingerpicking: Basic pattern with Am chord",
        "13. Fingerpicking: Same pattern with C chord",
        "14. Song Section: 'Wonderwall' verse progression",
        "15. Speed Training: Quick chord changes with metronome",
        "16. Rhythm Exercise: Complex strumming pattern practice",
        "17. Barre Chord Movement: Sliding F shape up the neck",
        "18. Power Chords: Introduction and basic shapes",
        "19. Theory Practice: Finding octaves on the fretboard",
        "20. Cool Down: Free play and song practice"
      ]
    }
  ]);

  const handleBack = () => {
    window.history.back();
  };

  const toggleChallengeComplete = (id: number) => {
    const challenge = dailyChallenges.find(c => c.id === id);
    if (!challenge || challenge.completed) return;

    const newChallenges = dailyChallenges.map(c => 
      c.id === id ? { ...c, completed: true } : c
    );
    setDailyChallenges(newChallenges);
    
    // Update XP and check for level up
    const previousLevel = calculateLevel(totalXP);
    const newXP = totalXP + challenge.xp;
    const newLevel = calculateLevel(newXP);
    
    setTotalXP(newXP);
    localStorage.setItem('totalXP', newXP.toString());

    if (newLevel > previousLevel) {
      setShowLevelUp(true);
      if (LEVEL_REWARDS[newLevel]) {
        setShowRewards(true);
      }
    }

    // Update streak if all challenges are completed
    if (newChallenges.every(c => c.completed)) {
      setStreak(streak + 1);
    }
  };

  const handleStartPractice = (routine: PracticeRoutine) => {
    startPractice(routine);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResetLevel = () => {
    setTotalXP(0);
    localStorage.setItem('totalXP', '0');
    setShowResetConfirm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <IconButton 
            onClick={handleBack}
            className="mr-4 bg-white hover:bg-gray-100"
            size="large"
          >
            <ArrowBackIcon />
          </IconButton>
          <h1 className="text-4xl font-bold text-purple-800 text-center flex-1">Practice Room</h1>
        </div>

        {/* Streak and Stats */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Streak */}
            <div className="flex items-center justify-center">
              <WhatshotIcon className="text-orange-500 mr-2" />
              <span className="text-2xl font-bold text-orange-500">{streak} Day Streak!</span>
            </div>

            {/* Level and XP */}
            <div className="flex items-center justify-center">
              <StarIcon className="text-yellow-500 mr-2" />
              <div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="text-xl font-bold text-purple-800">Level {currentLevel}</div>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => setShowResetConfirm(true)}
                    className="ml-1"
                    title="Reset Level"
                  >
                    <RestartAltIcon />
                  </IconButton>
                </div>
                <div className="text-sm text-gray-600 text-center">
                  {totalXP} / {nextLevelXP} XP
                </div>
                {/* XP Progress Bar */}
                <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                  <div 
                    className="h-full bg-purple-500 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${((totalXP - LEVEL_THRESHOLDS[currentLevel - 1]) / 
                        (nextLevelXP - LEVEL_THRESHOLDS[currentLevel - 1])) * 100}%` 
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Challenges Progress */}
            <div className="flex items-center justify-center">
              <EmojiEventsIcon className="text-yellow-500 mr-2" />
              <span className="text-xl font-semibold text-gray-700">
                {dailyChallenges.filter(c => c.completed).length} / {dailyChallenges.length} Challenges
              </span>
            </div>
          </div>
        </div>

        {/* Level Up Animation with Rewards */}
        {showLevelUp && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-purple-800 text-white px-8 py-4 rounded-xl shadow-2xl text-center">
              <div className="flex items-center gap-2 justify-center mb-4">
                <LevelUpIcon className="text-yellow-400" />
                <span className="text-2xl font-bold">Level Up! You're now level {currentLevel}!</span>
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setShowLevelUp(false)}
                className="bg-yellow-400 hover:bg-yellow-500"
              >
                Awesome!
              </Button>
            </div>
          </div>
        )}

        {/* Rewards Modal */}
        {showRewards && LEVEL_REWARDS[currentLevel] && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 max-w-md w-full text-center transform transition-all shadow-2xl">
              <div className="relative mb-6">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-600 rounded-full p-4 shadow-lg">
                    <CardGiftcardIcon className="text-white text-4xl animate-bounce " />
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                {LEVEL_REWARDS[currentLevel].title}
              </h2>
              
              <div className="bg-white rounded-xl p-6 mb-6 shadow-inner transform transition-all hover:scale-105">
                <div className="flex flex-col items-center gap-3">
                  <LibraryMusicIcon className="text-purple-600 text-3xl" />
                  <h3 className="text-2xl font-bold text-purple-900">
                    {LEVEL_REWARDS[currentLevel].song.title}
                  </h3>
                  <p className="text-lg text-gray-700 italic">by {LEVEL_REWARDS[currentLevel].song.artist}</p>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm
                    ${LEVEL_REWARDS[currentLevel].song.difficulty === 'Beginner' 
                      ? 'bg-gradient-to-r from-green-400 to-green-500 text-white' 
                      : LEVEL_REWARDS[currentLevel].song.difficulty === 'Intermediate'
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white'
                      : 'bg-gradient-to-r from-red-400 to-red-500 text-white'}`}>
                    {LEVEL_REWARDS[currentLevel].song.difficulty}
                  </span>
                  <Button
                    variant="contained"
                    color="primary"
                    href={LEVEL_REWARDS[currentLevel].song.tutorialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform transition-all hover:scale-105 shadow-lg"
                    startIcon={<PlayArrowIcon />}
                  >
                    Watch Tutorial
                  </Button>
                </div>
              </div>
              
              <Button
                variant="contained"
                onClick={() => {
                  setShowRewards(false);
                  setShowLevelUp(false);
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-3 px-8 rounded-full transform transition-all hover:scale-105 shadow-lg"
              >
                Awesome!
              </Button>
            </div>
          </div>
        )}

        {/* Reset Level Confirmation Dialog */}
        <Dialog
          open={showResetConfirm}
          onClose={() => setShowResetConfirm(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle className="bg-red-50 text-red-700 flex items-center gap-2">
            <WarningIcon /> Reset Level Confirmation
          </DialogTitle>
          <DialogContent className="mt-4">
            <div className="text-gray-700">
              <p className="font-bold mb-2">Are you sure you want to reset your level?</p>
              <p>This will:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Reset your XP to 0</li>
                <li>Set you back to Level 1</li>
                <li>Lock all previously unlocked content</li>
              </ul>
              <p className="mt-4 text-red-600 font-semibold">This action cannot be undone!</p>
            </div>
          </DialogContent>
          <DialogActions className="bg-gray-50 p-4">
            <Button
              onClick={() => setShowResetConfirm(false)}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={handleResetLevel}
              variant="contained"
              color="error"
              startIcon={<RestartAltIcon />}
            >
              Reset Level
            </Button>
          </DialogActions>
        </Dialog>

        {/* Navigation Tabs */}
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          className="bg-white rounded-t-xl shadow-lg mb-4"
          variant="fullWidth"
        >
          <Tab
            icon={<TimerIcon />}
            label="Practice"
            className="py-4"
          />
          <Tab
            icon={<LibraryMusicIcon />}
            label="Unlocked Content"
            className="py-4"
          />
        </Tabs>

        {/* Tab Content */}
        {activeTab === 0 ? (
          <>
            {/* Practice Routines */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Practice Routines</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {routines.map((routine, index) => (
                  <div 
                    key={routine.title}
                    className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all
                      ${routine.completed ? 'border-2 border-green-500' : 'hover:shadow-xl'}`}
                    onClick={() => handleStartPractice(routine)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <TimerIcon className="text-purple-600 mr-2" />
                        <span className="text-xl font-semibold">{routine.duration} min</span>
                      </div>
                      {routine.completed && (
                        <CheckCircleIcon className="text-green-500" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">{routine.title}</h3>
                    <p className="text-gray-600">{routine.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Challenges */}
            <div>
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Daily Challenges</h2>
              <div className="space-y-4">
                {dailyChallenges.map((challenge) => (
                  <div 
                    key={challenge.id}
                    className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all
                      ${challenge.completed ? 'border-2 border-green-500' : 'hover:shadow-xl'}`}
                    onClick={() => toggleChallengeComplete(challenge.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-purple-900">{challenge.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs
                            ${challenge.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                              challenge.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'}`}>
                            {challenge.difficulty}
                          </span>
                        </div>
                        <p className="text-gray-600">{challenge.description}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-purple-600 font-semibold">+{challenge.xp} XP</span>
                        {challenge.completed && (
                          <CheckCircleIcon className="text-green-500" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-b-xl shadow-lg p-6">
            <UnlockedContent currentLevel={currentLevel} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticePage; 