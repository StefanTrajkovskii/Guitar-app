import React from 'react';
import {
  songTutorials,
  SongTutorial
} from './unlockableContent';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Grid
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface UnlockedContentProps {
  currentLevel: number;
}

const UnlockedContent: React.FC<UnlockedContentProps> = ({ currentLevel }) => {
  // Helper function to get all content up to current level with proper typing
  const getUnlockedContent = <T,>(content: { [key: number]: T[] | T }): T[] => {
    return Object.entries(content)
      .filter(([level]) => parseInt(level) <= currentLevel)
      .reduce<T[]>((acc, [_, items]) => {
        return acc.concat(Array.isArray(items) ? items : [items]);
      }, []);
  };

  const unlockedSongs = getUnlockedContent<SongTutorial>(songTutorials);

  return (
    <div className="space-y-6 bg-gradient-to-br from-purple-100/50 to-pink-100/50 p-6 rounded-2xl">
      {/* Song Tutorials */}
      <Accordion defaultExpanded className="bg-white shadow-md rounded-xl">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon className="text-purple-600" />}
          className="hover:bg-gray-50 transition-colors duration-300"
        >
          <div className="flex items-center gap-2">
            <MusicNoteIcon className="text-purple-600" />
            <Typography variant="h6" className="text-purple-900">Song Tutorials</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-50 p-6 border-t">
          <Grid container spacing={3}>
            {unlockedSongs.map((song) => (
              <Grid item xs={12} sm={6} md={4} key={song.title}>
                <Card 
                  className="relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-0 bg-white"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                  <CardContent className="p-4 sm:p-5">
                    {/* Title and Difficulty Section */}
                    <div className="flex flex-col mb-3">
                      <div className="flex items-start justify-between">
                        <Typography variant="h6" className="font-bold text-gray-900 text-lg sm:text-xl">
                          {song.title}
                        </Typography>
                        <Chip
                          label={song.difficulty}
                          size="small"
                          className={`ml-2 text-xs ${
                            song.difficulty === "Beginner" 
                              ? 'bg-emerald-100 text-emerald-700' 
                              : song.difficulty === "Intermediate"
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-rose-100 text-rose-700'
                          }`}
                        />
                      </div>
                      <Typography className="text-gray-500">
                        {song.artist}
                      </Typography>
                    </div>

                    {/* Chords Section */}
                    <div className="mb-3">
                      <Typography variant="body2" className="text-gray-500 text-xs uppercase font-medium mb-1.5">
                        Chords
                      </Typography>
                      <div className="flex flex-wrap gap-1">
                        {song.chords.map((chord) => (
                          <Chip
                            key={chord}
                            label={chord}
                            size="small"
                            className="bg-gray-100 text-gray-700 text-xs"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Strumming Pattern Section */}
                    {song.strummingPattern && (
                      <div className="mb-4">
                        <Typography variant="body2" className="text-gray-500 text-xs uppercase font-medium mb-1.5">
                          Strumming Pattern
                        </Typography>
                        <div className="bg-gray-100 rounded p-2">
                          <Typography className="font-mono text-gray-700 text-sm">
                            {song.strummingPattern}
                          </Typography>
                        </div>
                      </div>
                    )}

                    {/* Watch Tutorial Button */}
                    <Button
                      variant="contained"
                      startIcon={<PlayArrowIcon />}
                      fullWidth
                      href={song.videoUrl}
                      target="_blank"
                      className="bg-blue-600 hover:bg-blue-700 shadow-none text-sm py-2 normal-case"
                    >
                      Watch Tutorial
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default UnlockedContent; 