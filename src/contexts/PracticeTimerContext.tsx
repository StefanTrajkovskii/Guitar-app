import React, { createContext, useContext, useState, useEffect } from 'react';
import { IconButton, Button, Dialog } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface PracticeRoutine {
  duration: number;
  title: string;
  description: string;
  completed: boolean;
  exercises: string[];
}

interface PracticeTimerContextType {
  selectedRoutine: PracticeRoutine | null;
  timeLeft: number;
  isRunning: boolean;
  currentExercise: number;
  showPracticeModal: boolean;
  startPractice: (routine: PracticeRoutine) => void;
  endPractice: () => void;
  toggleTimer: () => void;
  nextExercise: () => void;
  previousExercise: () => void;
  setShowPracticeModal: (show: boolean) => void;
}

const PracticeTimerContext = createContext<PracticeTimerContextType | null>(null);

export const usePracticeTimer = () => {
  const context = useContext(PracticeTimerContext);
  if (!context) {
    throw new Error('usePracticeTimer must be used within a PracticeTimerProvider');
  }
  return context;
};

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

// Floating Timer Component
export const FloatingTimer: React.FC = () => {
  const {
    selectedRoutine,
    timeLeft,
    isRunning,
    currentExercise,
    showPracticeModal,
    toggleTimer,
    endPractice,
    setShowPracticeModal
  } = usePracticeTimer();

  if (!selectedRoutine || showPracticeModal) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-white rounded-xl shadow-lg p-4 z-50 w-64 transform transition-all hover:scale-105">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-purple-900">{selectedRoutine.title}</h3>
        <IconButton
          size="small"
          onClick={() => setShowPracticeModal(true)}
          className="text-gray-500 hover:text-purple-600"
        >
          <TimerIcon />
        </IconButton>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-purple-600 mb-2">
          {formatTime(timeLeft)}
        </div>
        <div className="flex justify-center gap-2">
          <Button
            variant="contained"
            size="small"
            color={isRunning ? "error" : "primary"}
            onClick={toggleTimer}
            startIcon={isRunning ? <PauseIcon /> : <PlayArrowIcon />}
            className="text-sm"
          >
            {isRunning ? 'Pause' : 'Start'}
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={endPractice}
            startIcon={<StopIcon />}
            className="text-sm"
          >
            End
          </Button>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Exercise {currentExercise + 1} of {selectedRoutine.exercises.length}
        </div>
      </div>
    </div>
  );
};

// Practice Modal Component
export const PracticeModal: React.FC = () => {
  const {
    selectedRoutine,
    timeLeft,
    isRunning,
    currentExercise,
    showPracticeModal,
    toggleTimer,
    endPractice,
    nextExercise,
    previousExercise,
    setShowPracticeModal
  } = usePracticeTimer();

  if (!selectedRoutine) return null;

  return (
    <Dialog
      open={showPracticeModal}
      onClose={() => setShowPracticeModal(false)}
      maxWidth="md"
      fullWidth
    >
      <div className="bg-white rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-purple-800">{selectedRoutine.title}</h2>
          <IconButton
            onClick={() => setShowPracticeModal(false)}
            className="text-gray-500 hover:text-purple-600"
          >
            <ArrowBackIcon />
          </IconButton>
        </div>
        
        {/* Timer */}
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-purple-600 mb-4">
            {formatTime(timeLeft)}
          </div>
          <div className="flex justify-center gap-4">
            <Button
              variant="contained"
              color={isRunning ? "error" : "primary"}
              onClick={toggleTimer}
              startIcon={isRunning ? <PauseIcon /> : <PlayArrowIcon />}
            >
              {isRunning ? 'Pause' : 'Start'}
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                endPractice();
                setShowPracticeModal(false);
              }}
              startIcon={<StopIcon />}
            >
              End Session
            </Button>
          </div>
        </div>

        {/* Current Exercise */}
        <div className="bg-purple-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-purple-800 mb-2">
            Exercise {currentExercise + 1} of {selectedRoutine.exercises.length}
          </h3>
          <p className="text-lg text-purple-700 mb-4">
            {selectedRoutine.exercises[currentExercise]}
          </p>
          <div className="flex justify-between">
            <Button
              disabled={currentExercise === 0}
              onClick={previousExercise}
              variant="outlined"
            >
              Previous
            </Button>
            <Button
              disabled={currentExercise === selectedRoutine.exercises.length - 1}
              onClick={nextExercise}
              variant="contained"
            >
              Next Exercise
            </Button>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-700 mb-2">Tips:</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Take breaks if your fingers feel strained</li>
            <li>Focus on accuracy before speed</li>
            <li>Use a metronome for timing exercises</li>
            <li>Stay relaxed and maintain good posture</li>
          </ul>
        </div>
      </div>
    </Dialog>
  );
};

export const PracticeTimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedRoutine, setSelectedRoutine] = useState<PracticeRoutine | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [showPracticeModal, setShowPracticeModal] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const startPractice = (routine: PracticeRoutine) => {
    setSelectedRoutine(routine);
    setTimeLeft(routine.duration * 60);
    setCurrentExercise(0);
    setIsRunning(false);
    setShowPracticeModal(true);
  };

  const endPractice = () => {
    setIsRunning(false);
    setSelectedRoutine(null);
    setTimeLeft(0);
    setCurrentExercise(0);
    setShowPracticeModal(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const nextExercise = () => {
    if (selectedRoutine && currentExercise < selectedRoutine.exercises.length - 1) {
      setCurrentExercise(curr => curr + 1);
    }
  };

  const previousExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(curr => curr - 1);
    }
  };

  return (
    <PracticeTimerContext.Provider
      value={{
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
        setShowPracticeModal,
      }}
    >
      {children}
    </PracticeTimerContext.Provider>
  );
}; 