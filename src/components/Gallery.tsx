import { motion } from 'framer-motion';
import { PhotoIcon, PlayIcon, EyeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🌟' },
    { id: 'matches', name: 'Matches', icon: '🏏' },
    { id: 'training', name: 'Training', icon: '💪' },
    { id: 'celebrations', name: 'Celebrations', icon: '🎉' },
    { id: 'events', name: 'Events', icon: '🎪' }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'matches',
      title: 'Championship Final Victory',
  description: 'Magicians CC celebrating their championship win',
      thumbnail: '🏆',
      views: '2.5K',
      date: 'March 2025'
    },
    {
      id: 2,
      type: 'video',
      category: 'matches',
      title: 'Marcus Thunder Century Highlights',
      description: 'Best moments from Marcus\'s record-breaking century',
      thumbnail: '🎥',
      views: '15K',
      date: 'March 2025',
      duration: '3:45'
    },
    {
      id: 3,
      type: 'image',
      category: 'training',
      title: 'Pre-Season Training Camp',
      description: 'Intense training sessions preparing for the new season',
      thumbnail: '🏃‍♂️',
      views: '1.8K',
      date: 'February 2025'
    },
    {
      id: 4,
      type: 'image',
      category: 'celebrations',
      title: 'Team Bonding Dinner',
      description: 'Annual team dinner celebrating team spirit',
      thumbnail: '🍽️',
      views: '3.2K',
      date: 'February 2025'
    },
    {
      id: 5,
      type: 'video',
      category: 'matches',
      title: 'Best Catches of the Season',
      description: 'Spectacular catches that changed the game',
      thumbnail: '🤾‍♂️',
      views: '8.7K',
      date: 'March 2025',
      duration: '2:30'
    },
    {
      id: 6,
      type: 'image',
      category: 'events',
      title: 'Youth Academy Graduation',
      description: 'Celebrating our young talents joining the senior team',
      thumbnail: '🎓',
      views: '2.1K',
      date: 'January 2025'
    },
    {
      id: 7,
      type: 'image',
      category: 'training',
      title: 'New Facility Opening',
      description: 'State-of-the-art training facility inauguration',
      thumbnail: '🏢',
      views: '4.5K',
      date: 'January 2025'
    },
    {
      id: 8,
      type: 'video',
      category: 'celebrations',
      title: 'Championship Trophy Ceremony',
      description: 'Trophy presentation and celebration moments',
      thumbnail: '🏆',
      views: '12K',
      date: 'March 2025',
      duration: '5:20'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
            Gallery & Highlights
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Relive the most memorable moments, spectacular catches, and celebration highlights from Magicians Cricket Club
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg'
                  : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-100 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform perspective-1000 group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                  className="text-6xl opacity-80"
                >
                  {item.thumbnail}
                </motion.div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="bg-white bg-opacity-20 rounded-full p-4 backdrop-blur-sm"
                  >
                    {item.type === 'video' ? (
                      <PlayIcon className="w-8 h-8 text-white" />
                    ) : (
                      <EyeIcon className="w-8 h-8 text-white" />
                    )}
                  </motion.div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.type === 'video' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {item.type === 'video' ? (
                      <>
                        <PhotoIcon className="w-3 h-3 inline mr-1" />
                        Video
                      </>
                    ) : (
                      <>
                        <PhotoIcon className="w-3 h-3 inline mr-1" />
                        Photo
                      </>
                    )}
                  </span>
                </div>

                {/* Duration for videos */}
                {item.type === 'video' && item.duration && (
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                      {item.duration}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <EyeIcon className="w-4 h-4 mr-1" />
                    <span>{item.views} views</span>
                  </div>
                  <span>{item.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-8 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl mb-6"
          >
            📹
          </motion.div>
          <h3 className="text-3xl font-bold text-white mb-4">Season Highlights</h3>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto text-lg">
            Don't miss our comprehensive season highlights featuring the best moments, 
            incredible performances, and unforgettable victories from Magicians Cricket Club.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all duration-300 flex items-center justify-center"
            >
              <PlayIcon className="w-5 h-5 mr-2" />
              Watch Full Highlights
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Subscribe to Channel
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Photos', value: '500+', icon: '📸' },
            { label: 'Videos', value: '150+', icon: '🎬' },
            { label: 'Total Views', value: '2.5M+', icon: '👀' },
            { label: 'Subscribers', value: '50K+', icon: '👥' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotateY: 10 }}
              className="bg-white bg-opacity-10 rounded-2xl p-6 text-center backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className="text-3xl mb-2"
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
