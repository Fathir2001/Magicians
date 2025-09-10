import { motion } from 'framer-motion';
import { NewspaperIcon, UserIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const News = () => {
  const newsItems = [
    {
      id: 1,
  title: 'Magicians Reach Premier League Final',
  excerpt: 'After a thrilling semi-final victory, Magicians secure their place in the championship match against Royal Eagles.',
      author: 'Sports Desk',
      date: 'March 10, 2025',
      readTime: '3 min read',
      category: 'Tournament',
      image: '🏆',
      featured: true
    },
    {
      id: 2,
      title: 'Marcus Thunder Breaks Club Record',
      excerpt: 'Captain Marcus Thunder becomes the highest run-scorer in club history with his magnificent century against Crimson Tigers.',
      author: 'John Smith',
      date: 'March 8, 2025',
      readTime: '4 min read',
      category: 'Player Spotlight',
      image: '🏏',
      featured: false
    },
    {
      id: 3,
      title: 'New Training Facility Opens',
      excerpt: 'State-of-the-art training facility with indoor nets and fitness center now available for all team members.',
      author: 'Team Management',
      date: 'March 5, 2025',
      readTime: '2 min read',
      category: 'Club News',
      image: '🏢',
      featured: false
    },
    {
      id: 4,
      title: 'Youth Academy Registration Open',
  excerpt: 'Applications now open for the Magicians Youth Academy. Nurturing the next generation of cricket stars.',
      author: 'Youth Coordinator',
      date: 'March 3, 2025',
      readTime: '3 min read',
      category: 'Academy',
      image: '👦',
      featured: false
    },
    {
      id: 5,
      title: 'Charity Match Raises $50,000',
  excerpt: 'Magicians charity match against local celebrities raises significant funds for children\'s hospital.',
      author: 'Community Team',
      date: 'February 28, 2025',
      readTime: '5 min read',
      category: 'Community',
      image: '❤️',
      featured: false
    }
  ];

  const upcomingEvents = [
    {
      title: 'Premier League Final',
      date: 'March 15, 2025',
      type: 'Match',
      icon: '🏏'
    },
    {
      title: 'Player Meet & Greet',
      date: 'March 20, 2025',
      type: 'Event',
      icon: '🤝'
    },
    {
      title: 'Season Awards Ceremony',
      date: 'April 10, 2025',
      type: 'Ceremony',
      icon: '🏆'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Tournament': return 'from-yellow-500 to-orange-600';
      case 'Player Spotlight': return 'from-blue-500 to-indigo-600';
      case 'Club News': return 'from-green-500 to-emerald-600';
      case 'Academy': return 'from-purple-500 to-pink-600';
      case 'Community': return 'from-red-500 to-rose-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-slate-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest happenings, player updates, and exciting announcements from Magicians Cricket Club
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News Feed */}
          <div className="lg:col-span-2">
            {/* Featured News */}
            {newsItems.filter(item => item.featured).map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 mb-8 shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl"
                  >
                    {item.image}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                        Featured
                      </span>
                      <span className={`bg-gradient-to-r ${getCategoryColor(item.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-blue-100 text-lg mb-6 leading-relaxed">{item.excerpt}</p>
                    <div className="flex items-center text-blue-200 text-sm space-x-4">
                      <div className="flex items-center">
                        <UserIcon className="w-4 h-4 mr-1" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                    >
                      Read Full Story
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Regular News Items */}
            <div className="grid md:grid-cols-2 gap-6">
              {newsItems.filter(item => !item.featured).map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform perspective-1000"
                >
                  <div className="text-center mb-4">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                      className="text-4xl mb-3"
                    >
                      {item.image}
                    </motion.div>
                    <span className={`bg-gradient-to-r ${getCategoryColor(item.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-gray-500 text-xs mb-4">
                    <span>{item.author}</span>
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Read More
                  </motion.button>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <NewspaperIcon className="w-6 h-6 mr-2" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        className="text-2xl"
                      >
                        {event.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-white font-semibold">{event.title}</h4>
                        <p className="text-green-100 text-sm">{event.date}</p>
                        <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-xs">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-6 shadow-2xl"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl mb-4 text-center"
              >
                📧
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Stay Updated</h3>
              <p className="text-yellow-100 mb-6 text-center">
                Subscribe to our newsletter for the latest news, match updates, and exclusive content.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-orange-600 py-3 rounded-xl font-bold hover:bg-yellow-50 transition-all duration-300"
                >
                  Subscribe Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
