import React, { useState } from 'react';
import GuitarAnatomy from './GuitarAnatomy';
import PerfectPosture from './PerfectPosture';
import HandPositions from './HandPositions';
import StringNames from './StringNames';
import TuningTime from './TuningTime';

interface LessonSection {
  id: string;
  title: string;
  description: string;
  component: React.FC<{ onBack: () => void; onComplete: () => void }>;
}

const BasicsPage: React.FC = () => {
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
    <div className="py-6 min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      {/* Back button */}
      <div className="container px-4 mx-auto">
        <button 
          onClick={() => window.history.back()}
          className="flex gap-2 items-center mb-6 text-purple-700 hover:text-purple-900"
        >
          <span className="text-2xl">←</span> Back
        </button>

        {/* Main content */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-purple-800 md:text-4xl">
            Guitar Basics
          </h1>
          <p className="text-lg text-purple-600">
            Hey Malecka! Let's start with the fundamentals 
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8 w-full h-4 bg-white rounded-full shadow-inner">
          <div 
            className="h-full bg-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${(currentSection / lessons.length) * 100}%` }}
          />
        </div>

        {/* Lesson sections */}
        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              onClick={() => handleStartLesson(index)}
              className={`w-full text-left p-6 rounded-xl transition-all duration-200
                ${index <= currentSection 
                  ? 'bg-white shadow-lg hover:shadow-xl active:shadow-md active:scale-[0.995]' 
                  : 'bg-gray-100 opacity-70 cursor-not-allowed'}
                ${index === currentSection && 'ring-2 ring-purple-400'}`}
            >
              <div className="flex gap-4 items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm
                  ${completedLessons.includes(index) ? 'bg-green-100 text-green-700' : 
                    index === currentSection ? 'bg-purple-100 text-purple-700' :
                    'bg-gray-200 text-gray-500'}
                `}>
                  {completedLessons.includes(index) ? '✓' : index + 1}
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-purple-900">
                    {lesson.title}
                  </h3>
                  <p className="text-purple-600">
                    {lesson.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Tip of the day */}
        <div className="p-6 mt-8 bg-white rounded-xl shadow-lg">
          <h3 className="mb-2 text-lg font-semibold text-purple-800">
            Quick Tip
          </h3>
          <p className="text-purple-600">
            Take your time with each section. It's better to learn slowly and correctly
            than to rush through the basics. You're doing great! 
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicsPage;
