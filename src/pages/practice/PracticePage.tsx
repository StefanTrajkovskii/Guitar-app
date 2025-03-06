import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TimerIcon from '@mui/icons-material/Timer';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface PracticeRoutine {
  duration: number;
  title: string;
  description: string;
  completed: boolean;
}

interface DailyChallenge {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  completed: boolean;
  xp: number;
}

const PracticePage: React.FC = () => {
  const [streak, setStreak] = useState(0);
  const [routines, setRoutines] = useState<PracticeRoutine[]>([
    {
      duration: 15,
      title: "Quick Practice",
      description: "Perfect for a busy day. Focus on essential exercises.",
      completed: false
    },
    {
      duration: 30,
      title: "Standard Practice",
      description: "Balanced practice session with warm-up and exercises.",
      completed: false
    },
    {
      duration: 60,
      title: "Intensive Practice",
      description: "Complete workout for serious improvement.",
      completed: false
    }
  ]);

  const [dailyChallenges, setDailyChallenges] = useState<DailyChallenge[]>([
    {
      id: 1,
      title: "Master A to D Transition",
      description: "Practice switching between A and D chords smoothly 50 times",
      difficulty: "Beginner",
      completed: false,
      xp: 100
    },
    {
      id: 2,
      title: "Strumming Pattern Challenge",
      description: "Learn and practice the Down-Down-Up-Up-Down-Up pattern",
      difficulty: "Intermediate",
      completed: false,
      xp: 150
    },
    {
      id: 3,
      title: "Barre Chord Marathon",
      description: "Practice F major barre chord for 10 minutes",
      difficulty: "Advanced",
      completed: false,
      xp: 200
    }
  ]);

  const handleBack = () => {
    window.history.back();
  };

  const toggleRoutineComplete = (index: number) => {
    const newRoutines = [...routines];
    newRoutines[index].completed = !newRoutines[index].completed;
    setRoutines(newRoutines);
  };

  const toggleChallengeComplete = (id: number) => {
    const newChallenges = dailyChallenges.map(challenge => 
      challenge.id === id 
        ? { ...challenge, completed: !challenge.completed }
        : challenge
    );
    setDailyChallenges(newChallenges);
    
    // Update streak if all challenges are completed
    if (newChallenges.every(challenge => challenge.completed)) {
      setStreak(streak + 1);
    }
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
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <WhatshotIcon className="text-orange-500 mr-2" />
              <span className="text-2xl font-bold text-orange-500">{streak} Day Streak!</span>
            </div>
            <div className="flex items-center">
              <EmojiEventsIcon className="text-yellow-500 mr-2" />
              <span className="text-xl font-semibold text-gray-700">
                {dailyChallenges.filter(c => c.completed).length} / {dailyChallenges.length} Challenges Complete
              </span>
            </div>
          </div>
        </div>

        {/* Practice Routines */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Practice Routines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {routines.map((routine, index) => (
              <div 
                key={routine.title}
                className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all
                  ${routine.completed ? 'border-2 border-green-500' : 'hover:shadow-xl'}`}
                onClick={() => toggleRoutineComplete(index)}
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
      </div>
    </div>
  );
};

export default PracticePage; 