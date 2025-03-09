import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TextField, MenuItem, IconButton, Tabs, Tab } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ChordType, chordData, categories, difficulties } from './chordData';
import { useUser } from '../../contexts/UserContext';

const AllChordsPage: React.FC = () => {
  const { colors } = useUser();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChord, setSelectedChord] = useState<ChordType | null>(null);
  const [selectedVariation, setSelectedVariation] = useState(0);

  const filteredChords = chordData.filter(chord => {
    const matchesCategory = selectedCategory === 'All' || chord.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || 
      chord.variations.some(v => v.difficulty === selectedDifficulty);
    const matchesSearch = chord.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${colors.gradient.from} ${colors.gradient.to} p-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <IconButton 
            onClick={handleBack}
            className="mr-4 bg-white hover:bg-gray-100"
            size="large"
          >
            <ArrowBackIcon />
          </IconButton>
          <h1 className={`text-4xl font-bold ${colors.text.primary} text-center flex-1`}>Guitar Chord Library</h1>
        </div>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <TextField
            select
            label="Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            fullWidth
            variant="outlined"
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Difficulty"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            fullWidth
            variant="outlined"
          >
            {difficulties.map((difficulty) => (
              <MenuItem key={difficulty} value={difficulty}>
                {difficulty}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Search Chords"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </div>

        {/* Chord Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChords.map((chord) => (
            <motion.div
              key={chord.name}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSelectedChord(chord);
                setSelectedVariation(0);
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-2xl font-semibold ${colors.text.primary}`}>{chord.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  chord.variations[0].difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                  chord.variations[0].difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {chord.variations[0].difficulty}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{chord.variations[0].diagram}</p>
              
              <div className="flex justify-between items-center">
                <span className={colors.text.secondary}>{chord.category}</span>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">{chord.variations.length} variations</span>
                  <IconButton 
                    className={colors.text.primary}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add sound playing logic here
                    }}
                  >
                    <PlayCircleOutlineIcon />
                  </IconButton>
                  <IconButton className={colors.text.primary}>
                    <InfoOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for selected chord */}
        {selectedChord && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
               onClick={() => setSelectedChord(null)}>
            <div className="bg-white rounded-xl p-6 max-w-2xl w-full"
                 onClick={(e) => e.stopPropagation()}>
              <h2 className={`text-3xl font-bold ${colors.text.primary} mb-4`}>{selectedChord.name}</h2>
              
              {/* Variations Tabs */}
              <Tabs
                value={selectedVariation}
                onChange={(_, newValue) => setSelectedVariation(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                className="mb-4"
              >
                {selectedChord.variations.map((variation, index) => (
                  <Tab 
                    key={variation.position} 
                    label={
                      <div className="flex items-center">
                        <span>{variation.position}</span>
                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                          variation.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                          variation.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {variation.difficulty}
                        </span>
                      </div>
                    } 
                  />
                ))}
              </Tabs>

              {/* Video container */}
              <div className="aspect-w-16 aspect-h-10 mb-2">
                {selectedChord.variations[selectedVariation].videoUrl ? (
                  <iframe
                    src={selectedChord.variations[selectedVariation].videoUrl!.replace('watch?v=', 'embed/')}
                    title={`${selectedChord.name} - ${selectedChord.variations[selectedVariation].position} tutorial`}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Video tutorial coming soon!</p>
                  </div>
                )}
              </div>

              <div className={`bg-${colors.primary}-50 rounded-lg p-4 mb-4`}>
                <h3 className={`font-semibold mb-2 ${colors.text.primary}`}>{selectedChord.variations[selectedVariation].position}</h3>
                <p className="text-lg mb-2 font-mono">{selectedChord.variations[selectedVariation].diagram}</p>
                <p className={colors.text.secondary}>{selectedChord.variations[selectedVariation].description}</p>
              </div>

              <button
                className={`mt-6 bg-${colors.primary}-600 text-white px-6 py-2 rounded-lg hover:bg-${colors.primary}-700`}
                onClick={() => setSelectedChord(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllChordsPage; 