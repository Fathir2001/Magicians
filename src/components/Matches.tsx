import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, MapPinIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Matches = () => {
  const upcomingMatches = [
    {
      opponent: 'Royal Eagles',
      date: 'March 15, 2025',
      time: '2:00 PM',
      venue: 'Lord\'s Stadium, London',
      tournament: 'Premier League Final',
      status: 'upcoming',
      importance: 'high'
    },
    {
      opponent: 'Fire Panthers',
      date: 'March 22, 2025',
      time: '10:00 AM',
      venue: 'Thunder Ground, Manchester',
      tournament: 'League Match',
      status: 'upcoming',
      importance: 'medium'
    },
    {
      opponent: 'Steel Wolves',
      date: 'March 29, 2025',
      time: '3:30 PM',
      venue: 'Victory Stadium, Birmingham',
      tournament: 'Championship',
      status: 'upcoming',
      importance: 'high'
    },
    {
      opponent: 'Lightning Bolts',
      date: 'April 5, 2025',
      time: '1:00 PM',
      venue: 'Home Ground',
      tournament: 'Friendly',
      status: 'upcoming',
      importance: 'low'
    }
  ];

  const recentResults = [
    {
      opponent: 'Crimson Tigers',
      date: 'March 8, 2025',
      venue: 'Home Ground',
      result: 'Won by 45 runs',
      status: 'won',
      ourScore: '287/6',
      theirScore: '242/10',
      mom: 'Marcus Thunder'
    },
    {
      opponent: 'Silver Sharks',
      date: 'March 1, 2025',
      venue: 'Marine Stadium',
      result: 'Won by 8 wickets',
      status: 'won',
      ourScore: '156/2',
      theirScore: '153/10',
      mom: 'Jake Storm'
    },
    {
      opponent: 'Golden Lions',
      date: 'February 22, 2025',
      venue: 'Pride Arena',
      result: 'Lost by 12 runs',
      status: 'lost',
      ourScore: '234/9',
      theirScore: '246/7',
      mom: 'Alex Swift'
    }
  ];

  const getStatusColor = (status: string, importance?: string) => {
    if (status === 'won') return 'from-green-500 to-emerald-600';
    if (status === 'lost') return 'from-red-500 to-pink-600';
    if (importance === 'high') return 'from-yellow-500 to-orange-600';
    if (importance === 'medium') return 'from-blue-500 to-indigo-600';
    return 'from-gray-500 to-slate-600';
  };

  return (
    <section id="matches" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Matches & Fixtures
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Follow our journey through the season with upcoming fixtures and recent results
          </p>
        </motion.div>

        {/* Upcoming Matches */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center"
          >
            <CalendarIcon className="w-8 h-8 mr-3 text-green-400" />
            Upcoming Fixtures
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingMatches.map((match, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                viewport={{ once: true }}
                className={`bg-gradient-to-r ${getStatusColor(match.status, match.importance)} rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform perspective-1000`}
              >
                <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {match.tournament}
                      </span>
                      {match.importance === 'high' && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="inline-block ml-2"
                        >
                          <TrophyIcon className="w-5 h-5 text-yellow-300" />
                        </motion.div>
                      )}
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      className="text-3xl"
                    >
                      🏏
                    </motion.div>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-4">
                    Magicians CC vs {match.opponent}
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-center text-white">
                      <CalendarIcon className="w-5 h-5 mr-3 text-blue-200" />
                      <span>{match.date}</span>
                    </div>
                    <div className="flex items-center text-white">
                      <ClockIcon className="w-5 h-5 mr-3 text-green-200" />
                      <span>{match.time}</span>
                    </div>
                    <div className="flex items-center text-white">
                      <MapPinIcon className="w-5 h-5 mr-3 text-yellow-200" />
                      <span>{match.venue}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                  >
                    Get Tickets
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Results */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center"
          >
            <TrophyIcon className="w-8 h-8 mr-3 text-yellow-400" />
            Recent Results
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {recentResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10
                }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${getStatusColor(result.status)} rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500`}
              >
                <div className="text-center mb-4">
                  <motion.div
                    animate={{ 
                      scale: result.status === 'won' ? [1, 1.2, 1] : [1, 0.9, 1],
                      rotate: result.status === 'won' ? [0, 360] : [0, -180, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                    className="text-4xl mb-2"
                  >
                    {result.status === 'won' ? '🏆' : '💪'}
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2">vs {result.opponent}</h4>
                  <p className="text-white text-opacity-80 text-sm">{result.date}</p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-2xl p-4 mb-4">
                  <div className="text-center mb-3">
                    <span className={`text-lg font-bold ${result.status === 'won' ? 'text-green-200' : 'text-red-200'}`}>
                      {result.result}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center text-sm">
                    <div className="bg-white bg-opacity-10 rounded-lg p-2">
                      <div className="text-white font-semibold">Our Score</div>
                      <div className="text-yellow-200">{result.ourScore}</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-2">
                      <div className="text-white font-semibold">Their Score</div>
                      <div className="text-blue-200">{result.theirScore}</div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs">
                    Man of the Match: {result.mom}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Live Score Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-8 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl mb-4"
          >
            📱
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-4">Follow Live Scores</h3>
          <p className="text-pink-100 mb-6">
            Stay updated with real-time scores, ball-by-ball commentary, and match statistics
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-all duration-300"
          >
            View Live Scores
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Matches;
