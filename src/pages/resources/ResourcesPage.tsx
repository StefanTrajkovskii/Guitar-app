import React, { useEffect } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import BuildIcon from '@mui/icons-material/Build';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useUser } from '../../contexts/UserContext';
import martySchwartzImg from '../../assets/youtubers/marty-schwartz.jpg';
import justinGuitarImg from '../../assets/youtubers/justin-guitar.jpg';
import paulDavidsImg from '../../assets/youtubers/paul-davids.jpg';

interface Resource {
  title: string;
  description: string;
  link: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  type: 'video' | 'article' | 'tool' | 'book' | 'gear';
  tags: string[];
  image?: string;
}

const ResourcesPage: React.FC = () => {
  const { colors } = useUser();

  const resources: Resource[] = [
    // YouTube Channels
    {
      title: "Marty Schwartz Guitar",
      description: "Comprehensive guitar lessons for all levels, known for clear explanations and step-by-step tutorials.",
      link: "https://www.youtube.com/@martyschwartz",
      difficulty: "Beginner",
      type: "video",
      tags: ["lessons", "tutorials", "techniques"],
      image: martySchwartzImg
    },
    {
      title: "JustinGuitar",
      description: "One of the most popular guitar teachers online, offering structured courses and song tutorials.",
      link: "https://www.youtube.com/@JustinGuitar",
      difficulty: "Beginner",
      type: "video",
      tags: ["lessons", "songs", "theory"],
      image: justinGuitarImg
    },
    {
      title: "Paul Davids",
      description: "High-quality guitar content with in-depth theory and technique explanations.",
      link: "https://www.youtube.com/@PaulDavids",
      difficulty: "Intermediate",
      type: "video",
      tags: ["theory", "techniques", "gear"],
      image: paulDavidsImg
    },

    // Learning Tools
    {
      title: "Ultimate Guitar",
      description: "Huge database of guitar tabs, chords, and lessons. Essential resource for learning songs.",
      link: "https://www.ultimate-guitar.com/",
      difficulty: "Beginner",
      type: "tool",
      tags: ["tabs", "chords", "songs"]
    },
    {
      title: "Guitar Tuna",
      description: "Popular guitar tuning app with additional tools for learning.",
      link: "https://www.guitartuna.com/",
      difficulty: "Beginner",
      type: "tool",
      tags: ["tuning", "tools", "practice"]
    },
    {
      title: "Songsterr",
      description: "Interactive tab player with accurate timing and multiple instrument tracks.",
      link: "https://www.songsterr.com/",
      difficulty: "Intermediate",
      type: "tool",
      tags: ["tabs", "practice", "songs"]
    },

    // Books and Theory
    {
      title: "Hal Leonard Guitar Method",
      description: "Complete guide to learning guitar, from basics to advanced techniques.",
      link: "https://www.halleonard.com/guitar",
      difficulty: "Beginner",
      type: "book",
      tags: ["method", "theory", "exercises"]
    },
    {
      title: "Music Theory for Guitarists",
      description: "Everything You Ever Wanted to Know But Were Afraid to Ask.",
      link: "https://www.amazon.com/Music-Theory-Guitarists-Everything-Wanted/dp/063406651X",
      difficulty: "Intermediate",
      type: "book",
      tags: ["theory", "scales", "harmony"]
    },

    // Essential Gear
    {
      title: "Beginner Guitar Buying Guide",
      description: "How to choose your first acoustic or electric guitar.",
      link: "https://www.sweetwater.com/insync/buying-guide-how-to-choose-a-guitar/",
      difficulty: "Beginner",
      type: "gear",
      tags: ["shopping", "guitars", "equipment"]
    },
    {
      title: "Essential Accessories Guide",
      description: "Must-have accessories for every guitarist.",
      link: "https://www.sweetwater.com/insync/essential-guitar-accessories/",
      difficulty: "Beginner",
      type: "gear",
      tags: ["accessories", "equipment", "tools"]
    }
  ];

  const handleBack = () => {
    window.history.back();
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
  }, []);

  const getIconForType = (type: string) => {
    switch (type) {
      case 'video':
        return <YouTubeIcon className="text-red-500" />;
      case 'book':
        return <LibraryBooksIcon className="text-blue-500" />;
      case 'tool':
        return <BuildIcon className="text-purple-500" />;
      case 'gear':
        return <ShoppingCartIcon className="text-green-500" />;
      default:
        return <MusicNoteIcon className="text-gray-500" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-700';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${colors.gradient.from} ${colors.gradient.to} py-6 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <IconButton 
            onClick={handleBack}
            className="mr-4 bg-white hover:bg-gray-100"
            size="large"
          >
            <ArrowBackIcon />
          </IconButton>
          <h1 className={`text-4xl font-bold ${colors.text.primary}`}>Learning Resources</h1>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className={`text-2xl font-semibold ${colors.text.primary} mb-4`}>
            Welcome to Your Guitar Learning Hub!
          </h2>
          <p className={colors.text.secondary}>
            We've curated the best resources to help you on your guitar journey. From video tutorials
            to essential tools, everything you need is right here. Bookmark this page for easy access
            to these valuable resources!
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl 
                       transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  {getIconForType(resource.type)}
                  <h3 className={`text-xl font-semibold ${colors.text.primary}`}>
                    {resource.title}
                  </h3>
                </div>
                {resource.type === 'video' && resource.image && (
                  <div className="flex-shrink-0">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    />
                  </div>
                )}
              </div>
              
              <p className={`${colors.text.secondary} mb-4 line-clamp-2`}>
                {resource.description}
              </p>

              <div className="flex flex-wrap gap-2">
                <span className={`px-2 py-1 rounded-full text-sm font-medium ${getDifficultyColor(resource.difficulty)}`}>
                  {resource.difficulty}
                </span>
                {resource.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className={`px-2 py-1 rounded-full text-sm font-medium bg-${colors.primary}-100 text-${colors.primary}-700`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Additional Tips Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className={`text-2xl font-semibold ${colors.text.primary} mb-4`}>
            Pro Tips for Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`p-4 rounded-lg bg-${colors.primary}-50`}>
              <h3 className={`text-lg font-semibold ${colors.text.primary} mb-2`}>
                Practice Routine
              </h3>
              <p className={colors.text.secondary}>
                Set aside dedicated practice time each day, even if it's just 15 minutes.
                Consistency is key to making progress.
              </p>
            </div>
            <div className={`p-4 rounded-lg bg-${colors.primary}-50`}>
              <h3 className={`text-lg font-semibold ${colors.text.primary} mb-2`}>
                Use Multiple Resources
              </h3>
              <p className={colors.text.secondary}>
                Different teachers explain things differently. If something doesn't click,
                try another resource's explanation.
              </p>
            </div>
            <div className={`p-4 rounded-lg bg-${colors.primary}-50`}>
              <h3 className={`text-lg font-semibold ${colors.text.primary} mb-2`}>
                Record Yourself
              </h3>
              <p className={colors.text.secondary}>
                Recording your playing helps you identify areas for improvement and track
                your progress over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage; 