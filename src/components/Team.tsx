import { motion } from 'framer-motion';
import { StarIcon, TrophyIcon } from '@heroicons/react/24/solid';

const Team = () => {
  const players = [
    {
      name: 'Marcus Thunder',
      role: 'Captain & Batsman',
      photo: '👨🏻‍🦰',
      stats: { matches: 156, runs: 8945, average: 42.3 },
      bio: 'Explosive batsman and inspirational leader',
      speciality: 'Power hitting'
    },
    {
      name: 'Jake Storm',
      role: 'Fast Bowler',
      photo: '👨🏼',
      stats: { matches: 142, wickets: 198, average: 18.5 },
      bio: 'Lightning-fast bowler with deadly accuracy',
      speciality: 'Yorkers'
    },
    {
      name: 'Alex Swift',
      role: 'All-rounder',
      photo: '👨🏽‍🦱',
      stats: { matches: 134, runs: 4567, wickets: 89 },
      bio: 'Versatile player who excels in all departments',
      speciality: 'Spin bowling'
    },
    {
      name: 'Ryan Hawk',
      role: 'Wicket Keeper',
      photo: '👨🏻',
      stats: { matches: 128, catches: 145, stumpings: 23 },
      bio: 'Agile keeper with safe hands behind the stumps',
      speciality: 'Lightning reflexes'
    },
    {
      name: 'Sam Eagle',
      role: 'Spin Bowler',
      photo: '👨🏾',
      stats: { matches: 98, wickets: 142, average: 22.1 },
      bio: 'Master of spin with deceptive variations',
      speciality: 'Googly'
    },
    {
      name: 'Chris Lightning',
      role: 'Opening Batsman',
      photo: '👨🏼‍🦳',
      stats: { matches: 167, runs: 7234, average: 38.9 },
      bio: 'Solid opener who sets the foundation',
      speciality: 'Defensive technique'
    }
  ];

  const management = [
    {
      name: 'David Wilson',
      role: 'Head Coach',
      photo: '👨🏻‍🏫',
      experience: '15 years',
      achievement: 'Former National Team Player'
    },
    {
      name: 'Sarah Johnson',
      role: 'Assistant Coach',
      photo: '👩🏼‍🏫',
      experience: '8 years',
      achievement: 'Sports Science Specialist'
    },
    {
      name: 'Mike Roberts',
      role: 'Team Manager',
      photo: '👨🏽‍💼',
      experience: '12 years',
      achievement: 'Operations Excellence Award'
    }
  ];

  const captains = [
    { name: 'Marcus Thunder', period: '2023-Present', photo: '👨🏻‍🦰' },
    { name: 'Tom Richards', period: '2020-2023', photo: '👨🏼‍🦱' },
    { name: 'James Parker', period: '2017-2020', photo: '👨🏽' },
    { name: 'Robert King', period: '2014-2017', photo: '👨🏻‍🦲' },
  ];

  return (
    <section id="team" className="py-28 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,183,131,0.08),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_70%,rgba(255,130,10,0.08),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#0e1413_0%,#101c1a_60%,#0e1413_100%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">First Team & Staff</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">A balanced roster combining experienced leadership, strategic pace options, emerging spin depth and adaptive top-order stability.</p>
        </motion.div>

        {/* Current Squad */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Current Squad
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform perspective-1000"
              >
                <div className="text-center mb-6">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="text-6xl mb-4"
                  >
                    {player.photo}
                  </motion.div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{player.name}</h4>
                  <p className="text-blue-600 font-semibold mb-2">{player.role}</p>
                  <div className="flex justify-center">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {player.speciality}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(player.stats).map(([key, value], statIndex) => (
                      <motion.div
                        key={key}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: (index * 0.1) + (statIndex * 0.1) }}
                        className="bg-white rounded-lg p-2"
                      >
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-center text-sm">{player.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Management Team */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Management & Coaching Staff
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {management.map((staff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 shadow-2xl text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className="text-6xl mb-4"
                >
                  {staff.photo}
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-2">{staff.name}</h4>
                <p className="text-yellow-100 font-semibold mb-2">{staff.role}</p>
                <div className="bg-white bg-opacity-20 rounded-xl p-3 mb-3">
                  <p className="text-white text-sm">{staff.experience} Experience</p>
                </div>
                <p className="text-yellow-100 text-sm">{staff.achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Captains */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-3xl p-8"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <TrophyIcon className="w-8 h-8 mr-3 text-yellow-400" />
            Hall of Captains
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {captains.map((captain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotateY: 10 }}
                className="bg-white bg-opacity-10 rounded-2xl p-6 text-center backdrop-blur-sm"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="text-4xl mb-3"
                >
                  {captain.photo}
                </motion.div>
                <h4 className="text-lg font-bold text-white mb-1">{captain.name}</h4>
                <p className="text-purple-200 text-sm">{captain.period}</p>
                <div className="mt-2">
                  <StarIcon className="w-5 h-5 text-yellow-400 mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
