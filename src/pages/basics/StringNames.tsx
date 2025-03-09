import React from 'react';
import stringNamesImage from '../../assets/lessons/strings/String_names.png';
import { useUser } from '../../contexts/UserContext';

interface Props {
  onBack: () => void;
  onComplete: () => void;
}

const StringNames: React.FC<Props> = ({ onBack, onComplete }) => {
  const { name } = useUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-6 px-4">
      <div className="max-w-lg mx-auto">
        {/* Back button */}
        <button 
          onClick={onBack}
          className="mb-6 text-purple-700 hover:text-purple-900 flex items-center gap-2"
        >
          <span className="text-2xl">←</span> Back to Lessons
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-purple-800 mb-4">
          String Names 🎸
        </h2>
        <p className="text-purple-600 mb-6">
          Hey {name}! Let's learn the names of each string on your guitar. We'll start from
          the thickest string (bottom) to the thinnest string (top).
        </p>

        {/* String Overview */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">
            Quick Overview
          </h3>
          <p className="text-purple-600 mb-4">
            Guitar strings are numbered from 1 to 6, with string 1 being the thinnest (top) 
            and string 6 being the thickest (bottom).
          </p>
          <div className="rounded-lg overflow-hidden shadow-md mb-4">
            <img 
              src={stringNamesImage} 
              alt="Guitar String Names Diagram"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* String Details */}
        <div className="space-y-4">
          {/* String 6 (E) */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold text-xl">
                6
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-800">Low E String</h4>
                <p className="text-purple-600">Thickest string • Bottom string</p>
              </div>
            </div>
          </div>

          {/* String 5 (A) */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold text-xl">
                5
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-800">A String</h4>
                <p className="text-purple-600">Second thickest string</p>
              </div>
            </div>
          </div>

          {/* String 4 (D) */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold text-xl">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-800">D String</h4>
                <p className="text-purple-600">Middle thick string</p>
              </div>
            </div>
          </div>

          {/* String 3 (G) */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold text-xl">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-800">G String</h4>
                <p className="text-purple-600">Middle thin string</p>
              </div>
            </div>
          </div>

          {/* String 2 (B) */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold text-xl">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-800">B String</h4>
                <p className="text-purple-600">Second thinnest string</p>
              </div>
            </div>
          </div>

          {/* String 1 (E) */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold text-xl">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-800">High E String</h4>
                <p className="text-purple-600">Thinnest string • Top string</p>
              </div>
            </div>
          </div>
        </div>

        {/* Memory Tips */}
        <div className="mt-6 bg-purple-50 rounded-xl p-6 shadow-lg border border-purple-100">
          <h3 className="text-lg font-semibold text-purple-800 mb-3">
            Memory Tips 💡
          </h3>
          <p className="text-purple-600 mb-4">
            Here are some fun ways to remember the string names (from thickest to thinnest):
          </p>
          <div className="space-y-3 text-purple-600">
            <p>
              <span className="font-semibold">1.</span> "Every Amateur Does Get Better Eventually"
            </p>
            <p>
              <span className="font-semibold">2.</span> "Elephants And Dogs Grow Big Ears"
            </p>
          </div>
        </div>

        {/* Practice Exercise */}
        <div className="mt-6 bg-purple-50 rounded-xl p-6 shadow-lg border border-purple-100">
          <h3 className="text-lg font-semibold text-purple-800 mb-3">
            Practice Exercise 🎸
          </h3>
          <p className="text-purple-600 mb-4">
            Try this simple exercise to memorize the strings:
          </p>
          <ol className="list-decimal pl-5 text-purple-600 space-y-3">
            <li>
              Starting from the thickest string (6th), say its name and number out loud
            </li>
            <li>
              Pluck the string to hear its sound
            </li>
            <li>
              Move to the next string and repeat
            </li>
            <li>
              Try going both up and down the strings
            </li>
            <li>
              Practice until you can name any string without thinking!
            </li>
          </ol>
        </div>

        {/* Complete Button */}
        <button
          onClick={onComplete}
          className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 
                   transition-colors duration-200 flex items-center justify-center gap-2 mt-6"
        >
          <span>I Know My Strings!</span> ✓
        </button>

        {/* Final Tip */}
        <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">
            Remember
          </h3>
          <p className="text-purple-600">
            Don't worry if it takes time to remember all the strings - everyone learns at their own pace!
            The memory tricks can really help, and with practice, it'll become second nature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StringNames;
