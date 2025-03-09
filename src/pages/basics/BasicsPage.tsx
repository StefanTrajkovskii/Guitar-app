import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GuitarAnatomy from './GuitarAnatomy';
import PerfectPosture from './PerfectPosture';
import HandPositions from './HandPositions';
import StringNames from './StringNames';
import TuningTime from './TuningTime';
import { useUser } from '../../contexts/UserContext';

interface LessonSection {
  id: string;
  title: string;
  description: string;
  component: React.FC<{ onBack: () => void; onComplete: () => void }>;
}

const BasicsPage: React.FC = () => {
  const { name, colors } = useUser();
  const [currentSection, setCurrentSection] = useState(0);
  const [showLesson, setShowLesson] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const lessons: LessonSection[] = [
    { 
      id: 'guitar-anatomy', 
      title: 'Guitar Anatomy', 
      description: "Let's get to know the parts of your guitar!",
      component: GuitarAnatomy 
    },
    { 
      id: 'perfect-posture', 
      title: 'Perfect Posture', 
      description: 'Learn how to hold your guitar comfortably',
      component: PerfectPosture 
    },
    { 
      id: 'hand-positions', 
      title: 'Hand Positions', 
      description: 'Master the basic hand positions',
      component: HandPositions 
    },
    { 
      id: 'string-names', 
      title: 'String Names', 
      description: 'Learn the names of each string',
      component: StringNames 
    },
    { 
      id: 'tuning-time', 
      title: 'Tuning Time', 
      description: 'Keep your guitar in tune',
      component: TuningTime 
    },
  ];

  const handleStartLesson = (index: number) => {
    setCurrentSection(index);
    setShowLesson(true);
  };

  const handleLessonComplete = () => {
    if (!completedLessons.includes(currentSection)) {
      setCompletedLessons([...completedLessons, currentSection]);
    }
    setShowLesson(false);
  };

  const handleBack = () => {
    if (!showLesson) {
      window.history.back();
    } else {
      setShowLesson(false);
    }
  };

  // Add ESC key handler
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleBack();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [showLesson]); // Add showLesson to dependencies

  if (showLesson) {
    const CurrentLesson = lessons[currentSection].component;
    return (
      <CurrentLesson
        onBack={() => setShowLesson(false)}
        onComplete={handleLessonComplete}
      />
    );
  }

  return (
    <div className={`py-6 min-h-screen bg-gradient-to-b ${colors.gradient.from} ${colors.gradient.to}`}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center mb-8">
          <IconButton 
            onClick={handleBack}
            className="mr-4 bg-white hover:bg-gray-100"
            size="large"
          >
            <ArrowBackIcon />
          </IconButton>
        </div>

        {/* Main content */}
        <div className="mb-8 text-center">
          <h1 className={`mb-2 text-3xl font-bold ${colors.text.primary} md:text-4xl`}>
            Guitar Basics
          </h1>
          <p className={`text-lg ${colors.text.secondary}`}>
            Hey {name}! Let's start with the fundamentals 
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8 w-full h-4 bg-white rounded-full shadow-inner">
          <div 
            className="h-full rounded-full transition-all duration-300"
            style={{ 
              width: `${(completedLessons.length / lessons.length) * 100}%`,
              backgroundColor: colors.primary === 'orange' ? '#f97316' : '#a855f7'
            }}
          />
        </div>

        {/* Lesson sections */}
        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              onClick={() => handleStartLesson(index)}
              className={`w-full text-left p-6 rounded-xl transition-all duration-200
                bg-white shadow-lg hover:shadow-xl cursor-pointer
                ${index === currentSection && `ring-2 ring-${colors.primary}-400`}`}
            >
              <div className="flex gap-4 items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
                    ${completedLessons.includes(index) 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-100 text-gray-400 border-2 border-gray-200'}
                  `}>
                    {completedLessons.includes(index) ? '✓' : index + 1}
                  </div>
                  <div>
                    <h3 className={`mb-1 text-xl font-semibold ${colors.text.primary}`}>
                      {lesson.title}
                    </h3>
                    <p className={colors.text.secondary}>
                      {lesson.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!completedLessons.includes(index)) {
                        setCompletedLessons([...completedLessons, index]);
                        if (index === currentSection && currentSection < lessons.length - 1) {
                          setCurrentSection(currentSection + 1);
                        }
                      }
                    }}
                    className="p-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 
                             transition-colors duration-200"
                  >
                    Skip ✓
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tip of the day */}
        <div className="p-6 mt-8 bg-white rounded-xl shadow-lg">
          <h3 className={`mb-2 text-lg font-semibold ${colors.text.primary}`}>
            Quick Tip
          </h3>
          <p className={colors.text.secondary}>
            Take your time with each section. It's better to learn slowly and correctly
            than to rush through the basics. You're doing great! 
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicsPage;
