import React from 'react';
import { Users, MessageCircle, Link2, Heart } from 'lucide-react';

const communityPlatforms = [
  {
    id: 1,
    name: 'Stack Overflow',
    description: 'A Q&A platform for developers to ask questions and share knowledge.',
    category: 'Q&A',
    members: '21M',
    postsPerDay: '10K',
    activity: 'High',
    url: 'https://stackoverflow.com/',
    image: 'https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.png',
    featured: true,
  },
  {
    id: 2,
    name: 'Reddit Programming',
    description: 'A large community discussing programming news, projects, and questions.',
    category: 'Discussion',
    members: '2.1M',
    postsPerDay: '1.5K',
    activity: 'Medium',
    url: 'https://www.reddit.com/r/programming/',
    image: '/images/download2.jpg',
  },
  {
    id: 3,
    name: 'DEV Community',
    description: 'A friendly community where programmers share articles, tutorials, and discussions.',
    category: 'Blogging',
    members: '800K',
    postsPerDay: '600',
    activity: 'Medium',
    url: 'https://dev.to/',
    image: '/images/resized_logo_UQww2soKuUsjaOGNB38o.jpg',
  },
  {
    id: 4,
    name: 'Hashnode',
    description: 'A platform for developers to publish blogs and engage with others.',
    category: 'Blogging',
    members: '150K',
    postsPerDay: '400',
    activity: 'Growing',
    url: 'https://hashnode.com/',
    image: '/images/ALEtNA1cM.jpg',
  },
  {
    id: 5,
    name: 'GitHub Discussions',
    description: 'Discussion forums built around open source projects on GitHub.',
    category: 'Open Source',
    members: '56M',
    postsPerDay: '8K',
    activity: 'High',
    url: 'https://github.com/discussions',
    image: 'https://github.githubassets.com/favicons/favicon.svg',
  },
  {
    id: 6,
    name: 'freeCodeCamp Forum',
    description: 'Community for learners and developers to discuss coding and projects.',
    category: 'Learning',
    members: '500K',
    postsPerDay: '700',
    activity: 'Medium',
    url: 'https://forum.freecodecamp.org/',
    image: '/images/download1.jpg',
  },
];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    'Q&A': 'bg-blue-100 text-blue-800',
    Discussion: 'bg-purple-100 text-purple-800',
    Blogging: 'bg-green-100 text-green-800',
    'Open Source': 'bg-orange-100 text-orange-800',
    Learning: 'bg-teal-100 text-teal-800',
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
};

const Community: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Developer Communities & Forums</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join these active developer communities to ask questions, share knowledge, collaborate, and network.
          </p>
        </div>

        {/* Featured Community */}
        <div className="mb-12">
          {communityPlatforms.filter(c => c.featured).map((community) => (
            <div
              key={community.id}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="md:flex">
                <div className="md:w-1/2 flex items-center justify-center bg-white p-8">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="h-48 object-contain"
                  />
                </div>
                <div className="md:w-1/2 p-8 text-white flex flex-col justify-between">
                  <div>
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <h3 className="text-3xl font-bold my-6">{community.name}</h3>
                    <p className="text-lg opacity-90 mb-6 leading-relaxed">{community.description}</p>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                        community.category
                      )}`}
                    >
                      {community.category}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-6 text-white opacity-90 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>{community.members} Members</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>{community.postsPerDay} Posts / day</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5" />
                      <span>Activity: {community.activity}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href={community.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                    >
                      <Link2 className="w-5 h-5 mr-2" />
                      Visit Community
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Communities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityPlatforms.filter(c => !c.featured).map((community) => (
            <article
              key={community.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className="relative overflow-hidden flex justify-center p-6 bg-gray-50">
                <img
                  src={community.image}
                  alt={community.name}
                  className="h-32 object-contain"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      community.category
                    )}`}
                  >
                    {community.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
                  {community.name}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{community.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{community.members} Members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{community.postsPerDay} Posts / day</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>Activity: {community.activity}</span>
                  </div>
                </div>

                <a
                  href={community.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
                >
                  Visit Community
                  <Link2 className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
