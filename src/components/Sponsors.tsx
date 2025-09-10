import { motion } from 'framer-motion';
import { HeartIcon, BuildingOfficeIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Sponsors = () => {
  const mainSponsors = [
    {
      name: 'SportsTech Global',
      logo: '🏢',
      category: 'Title Sponsor',
      partnership: 'Since 2020',
      description: 'Leading sports technology company',
      website: 'https://sportstech.com',
      tier: 'platinum'
    },
    {
      name: 'Cricket Gear Pro',
      logo: '🏏',
      category: 'Kit Sponsor',
      partnership: 'Since 2019',
      description: 'Premium cricket equipment manufacturer',
      website: 'https://cricketgear.com',
      tier: 'gold'
    },
    {
      name: 'Energy Boost',
      logo: '⚡',
      category: 'Energy Partner',
      partnership: 'Since 2021',
      description: 'Sports nutrition and energy drinks',
      website: 'https://energyboost.com',
      tier: 'gold'
    }
  ];

  const supportingSponsors = [
    { name: 'Local Motors', logo: '🚗', tier: 'silver' },
    { name: 'Fresh Foods', logo: '🥗', tier: 'silver' },
    { name: 'Tech Solutions', logo: '💻', tier: 'bronze' },
    { name: 'Health First', logo: '🏥', tier: 'bronze' },
    { name: 'Travel Easy', logo: '✈️', tier: 'bronze' },
    { name: 'Fitness Zone', logo: '💪', tier: 'bronze' }
  ];

  const partnershipBenefits = [
    {
      tier: 'Platinum',
      price: '$50,000+',
      benefits: [
        'Logo on team jerseys',
        'Stadium naming rights',
        'VIP hospitality packages',
        'Year-round advertising',
        'Player meet & greets'
      ],
      color: 'from-purple-600 to-indigo-600',
      icon: '👑'
    },
    {
      tier: 'Gold',
      price: '$25,000+',
      benefits: [
        'Logo on training gear',
        'Match day advertising',
        'Social media promotion',
        'Newsletter inclusion',
        'Event invitations'
      ],
      color: 'from-yellow-500 to-orange-600',
      icon: '🥇'
    },
    {
      tier: 'Silver',
      price: '$10,000+',
      benefits: [
        'Website logo placement',
        'Match program ads',
        'Social media mentions',
        'Hospitality tickets',
        'Player autographs'
      ],
      color: 'from-gray-400 to-gray-600',
      icon: '🥈'
    },
    {
      tier: 'Bronze',
      price: '$5,000+',
      benefits: [
        'Website recognition',
        'Newsletter mentions',
        'Match tickets',
        'Club merchandise',
        'Season updates'
      ],
      color: 'from-orange-600 to-red-600',
      icon: '🥉'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum': return 'from-purple-600 to-indigo-600';
      case 'gold': return 'from-yellow-500 to-orange-600';
      case 'silver': return 'from-gray-400 to-gray-600';
      case 'bronze': return 'from-orange-600 to-red-600';
      default: return 'from-blue-500 to-purple-600';
    }
  };

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Partners & Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're grateful for the support of our amazing partners who help us achieve excellence on and off the field
          </p>
        </motion.div>

        {/* Main Sponsors */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center"
          >
            <UserGroupIcon className="w-8 h-8 mr-3 text-blue-600" />
            Main Partners
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {mainSponsors.map((sponsor, index) => (
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
                className={`bg-gradient-to-br ${getTierColor(sponsor.tier)} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform perspective-1000 text-center`}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className="text-6xl mb-6"
                >
                  {sponsor.logo}
                </motion.div>

                <h4 className="text-2xl font-bold text-white mb-2">{sponsor.name}</h4>
                
                <div className="bg-white bg-opacity-20 rounded-xl p-3 mb-4">
                  <span className="text-white font-semibold">{sponsor.category}</span>
                </div>

                <p className="text-white text-opacity-90 mb-4">{sponsor.description}</p>
                
                <div className="text-white text-opacity-80 text-sm mb-6">
                  Partnership {sponsor.partnership}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Visit Website
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supporting Sponsors */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center"
          >
            <BuildingOfficeIcon className="w-8 h-8 mr-3 text-green-600" />
            Supporting Partners
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {supportingSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotateY: 10 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${getTierColor(sponsor.tier)} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 text-center`}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  className="text-4xl mb-3"
                >
                  {sponsor.logo}
                </motion.div>
                <h4 className="text-white font-semibold text-sm">{sponsor.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Partnership Opportunities</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateX: 5 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${tier.color} rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center`}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    scale: { duration: 2, repeat: Infinity },
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                  }}
                  className="text-4xl mb-4"
                >
                  {tier.icon}
                </motion.div>

                <h4 className="text-2xl font-bold text-white mb-2">{tier.tier}</h4>
                
                <div className="bg-white bg-opacity-20 rounded-xl p-3 mb-6">
                  <span className="text-xl font-bold text-white">{tier.price}</span>
                </div>

                <ul className="text-white text-sm space-y-2 mb-6">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: benefitIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="mr-2">✓</span>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl p-8 text-center shadow-2xl"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl mb-6"
          >
            ❤️
          </motion.div>
          
          <h3 className="text-3xl font-bold text-white mb-4">Thank You to Our Sponsors</h3>
          <p className="text-pink-100 mb-8 max-w-3xl mx-auto text-lg">
            Without the generous support of our sponsors and partners, Magicians Cricket Club wouldn't be able to 
            maintain our high standards of excellence. We're grateful for your continued belief in our team 
            and our mission to inspire through cricket.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all duration-300 flex items-center justify-center"
            >
              <HeartIcon className="w-5 h-5 mr-2" />
              Become a Partner
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
