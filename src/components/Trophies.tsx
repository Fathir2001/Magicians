import { motion } from 'framer-motion';
import { TrophyIcon, StarIcon, GiftIcon, SparklesIcon } from '@heroicons/react/24/solid';

const Trophies = () => {
  const majorTrophies = [
    {
      title: 'Premier League Championship',
      year: '2023',
      description: 'Undefeated season with 18 wins',
      icon: '🏆',
      color: 'from-yellow-500 to-orange-600',
      importance: 'high'
    },
    {
      title: 'T20 Championship',
      year: '2022',
      description: 'Thrilling final victory by 5 runs',
      icon: '🥇',
      color: 'from-blue-500 to-purple-600',
      importance: 'high'
    },
    {
      title: 'One Day Cup',
      year: '2021',
      description: 'Dominant performance throughout',
      icon: '🏅',
      color: 'from-green-500 to-emerald-600',
      importance: 'medium'
    },
    {
      title: 'Regional Championship',
      year: '2020',
      description: 'First major trophy in club history',
      icon: '🎖️',
      color: 'from-red-500 to-pink-600',
      importance: 'medium'
    }
  ];

  const individualAwards = [
    {
      player: 'Marcus Thunder',
      award: 'Player of the Year',
      year: '2023',
      stats: '1,245 runs, 45.7 avg',
      icon: '👑'
    },
    {
      player: 'Jake Storm',
      award: 'Best Bowler',
      year: '2023',
      stats: '67 wickets, 18.2 avg',
      icon: '⚡'
    },
    {
      player: 'Alex Swift',
      award: 'Best All-rounder',
      year: '2022',
      stats: '780 runs, 34 wickets',
      icon: '🌟'
    },
    {
      player: 'Ryan Hawk',
      award: 'Best Wicket Keeper',
      year: '2022',
      stats: '89 dismissals',
      icon: '🧤'
    }
  ];

  const teamRecords = [
    {
      record: 'Highest Team Score',
      value: '456/3',
      details: 'vs Silver Sharks, 2023',
      icon: '📊'
    },
    {
      record: 'Best Bowling Figures',
      value: '8/23',
      details: 'Jake Storm vs Lions, 2023',
      icon: '🎯'
    },
    {
      record: 'Longest Winning Streak',
      value: '15 Matches',
      details: 'Season 2023',
      icon: '🔥'
    },
    {
      record: 'Most Sixes in an Innings',
      value: '18',
      details: 'Marcus Thunder, 2023',
      icon: '⚾'
    }
  ];

  const achievements = [
    { text: 'Unbeaten home record for 2 seasons', icon: '🏠' },
    { text: 'Fair Play Award 3 consecutive years', icon: '🤝' },
    { text: 'Youth Development Excellence Award', icon: '👨‍🎓' },
    { text: 'Community Contribution Recognition', icon: '❤️' },
    { text: 'Best Cricket Facility Award', icon: '🏟️' },
    { text: 'Sportsmanship Award', icon: '🤗' }
  ];

  return (
    <section id="trophies" className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Trophies & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating our journey of excellence, triumph, and the pursuit of cricketing greatness
          </p>
        </motion.div>

        {/* Major Trophies */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center"
          >
            <TrophyIcon className="w-8 h-8 mr-3 text-yellow-600" />
            Major Trophies
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {majorTrophies.map((trophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${trophy.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform perspective-1000 text-center`}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    scale: { duration: 3, repeat: Infinity },
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                  }}
                  className="text-6xl mb-6"
                >
                  {trophy.icon}
                </motion.div>
                
                <h4 className="text-2xl font-bold text-white mb-2">{trophy.title}</h4>
                <div className="bg-white bg-opacity-20 rounded-xl p-3 mb-4">
                  <span className="text-3xl font-bold text-white">{trophy.year}</span>
                </div>
                <p className="text-white text-opacity-90 text-sm">{trophy.description}</p>
                
                {trophy.importance === 'high' && (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-4"
                  >
                    <SparklesIcon className="w-6 h-6 text-yellow-300 mx-auto" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Individual Awards */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center"
          >
            <StarIcon className="w-8 h-8 mr-3 text-blue-600" />
            Individual Excellence
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualAwards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateX: 10 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100"
              >
                <div className="text-center mb-4">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    className="text-4xl mb-3"
                  >
                    {award.icon}
                  </motion.div>
                  <h4 className="text-lg font-bold text-gray-800">{award.player}</h4>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-center text-white mb-4">
                  <h5 className="font-semibold mb-1">{award.award}</h5>
                  <p className="text-blue-100 text-sm">{award.year}</p>
                </div>

                <div className="text-center">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {award.stats}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Records */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center"
          >
            <GiftIcon className="w-8 h-8 mr-3 text-green-600" />
            Team Records
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamRecords.map((record, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    scale: { duration: 2, repeat: Infinity },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                  className="text-4xl mb-4"
                >
                  {record.icon}
                </motion.div>
                
                <h4 className="text-white font-bold mb-2">{record.record}</h4>
                <div className="bg-white bg-opacity-20 rounded-xl p-3 mb-3">
                  <span className="text-2xl font-bold text-white">{record.value}</span>
                </div>
                <p className="text-green-100 text-sm">{record.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Special Recognitions</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="bg-white bg-opacity-10 rounded-2xl p-4 flex items-center space-x-4 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  className="text-3xl"
                >
                  {achievement.icon}
                </motion.div>
                <p className="text-white font-medium">{achievement.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trophy Cabinet Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Major Trophies', value: '12', icon: '🏆' },
              { label: 'Individual Awards', value: '25', icon: '🏅' },
              { label: 'Team Records', value: '8', icon: '📊' },
              { label: 'Years of Excellence', value: '28', icon: '📅' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  className="text-4xl mb-3"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trophies;
