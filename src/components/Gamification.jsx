import React, { useState } from 'react';
import { FaTrophy, FaStar, FaFire, FaMedal, FaAward } from 'react-icons/fa';

const Gamification = () => {
  const [activeTab, setActiveTab] = useState('badges');

  const userStats = {
    points: 4250,
    level: 12,
    streak: 28,
    questsCompleted: 156
  };

  const badges = [
    { id: 1, name: 'First Step', icon: '🎯', description: 'Complete your first course', earned: true, earnedDate: 'Jan 5, 2026' },
    { id: 2, name: 'Quick Learner', icon: '⚡', description: 'Complete 5 courses in a week', earned: true, earnedDate: 'Jan 15, 2026' },
    { id: 3, name: 'Knowledge Master', icon: '🧠', description: 'Complete 20 courses', earned: true, earnedDate: 'Feb 1, 2026' },
    { id: 4, name: 'Quiz Champion', icon: '🏆', description: 'Score 95%+ on 10 quizzes', earned: false, earnedDate: null },
    { id: 5, name: 'Night Owl', icon: '🌙', description: 'Study for 100 hours', earned: true, earnedDate: 'Feb 15, 2026' },
    { id: 6, name: 'Super Genius', icon: '🧬', description: 'Complete all Class 12 courses', earned: false, earnedDate: null }
  ];

  const streaks = [
    { id: 1, title: 'Daily Studying', days: 28, icon: '🔥', color: 'from-red-400 to-orange-500' },
    { id: 2, title: 'Quiz Solving', days: 15, icon: '📝', color: 'from-blue-400 to-cyan-500' },
    { id: 3, title: 'Video Watching', days: 45, icon: '🎬', color: 'from-purple-400 to-pink-500' }
  ];

  const levelProgression = [
    { level: 10, minPoints: 3000 },
    { level: 11, minPoints: 3500 },
    { level: 12, minPoints: 4000 },
    { level: 13, minPoints: 5000 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <FaTrophy className="text-purple-600" />
            <span className="text-purple-700 font-semibold">Gamification & Rewards</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Level Up Your Learning
            </span>
          </h2>
          <p className="text-gray-600 text-lg">Earn points, unlock badges, and maintain streaks</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {/* Points */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Total Points</h3>
              <FaStar className="text-3xl" />
            </div>
            <div className="text-5xl font-bold">{userStats.points.toLocaleString()}</div>
            <p className="text-yellow-100 mt-2">+250 this week</p>
          </div>

          {/* Level */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Your Level</h3>
              <FaMedal className="text-3xl" />
            </div>
            <div className="text-5xl font-bold">{userStats.level}</div>
            <div className="w-full bg-white/30 rounded-full h-2 mt-4">
              <div className="bg-white rounded-full h-2 w-3/4"></div>
            </div>
            <p className="text-blue-100 mt-2 text-sm">750 XP to Level 13</p>
          </div>

          {/* Streak */}
          <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Daily Streak</h3>
              <FaFire className="text-3xl" />
            </div>
            <div className="text-5xl font-bold">{userStats.streak}</div>
            <p className="text-red-100 mt-2">Days in a row! Keep it up! 🔥</p>
          </div>

          {/* Quests */}
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Quests Done</h3>
              <FaAward className="text-3xl" />
            </div>
            <div className="text-5xl font-bold">{userStats.questsCompleted}</div>
            <p className="text-green-100 mt-2">+12 this month</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 border-b border-gray-200">
          {['badges', 'streaks', 'levels'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-bold transition duration-300 border-b-4 ${
                activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Badges Tab */}
        {activeTab === 'badges' && (
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {badges.map(badge => (
              <div
                key={badge.id}
                className={`rounded-2xl p-6 text-center transition duration-300 ${
                  badge.earned
                    ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 shadow-lg hover:shadow-xl'
                    : 'bg-gray-50 border-2 border-gray-200 opacity-60'
                }`}
              >
                <div className="text-6xl mb-4">{badge.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{badge.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{badge.description}</p>
                {badge.earned ? (
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                    ✓ Earned on {badge.earnedDate}
                  </div>
                ) : (
                  <div className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-bold">
                    🔒 Locked
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Streaks Tab */}
        {activeTab === 'streaks' && (
          <div className="space-y-6 animate-fade-in">
            {streaks.map(streak => (
              <div
                key={streak.id}
                className={`bg-gradient-to-r ${streak.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-5xl mb-2">{streak.icon}</div>
                    <h3 className="text-3xl font-bold">{streak.title}</h3>
                    <p className="text-white/80">{streak.days} days in a row</p>
                  </div>
                  <div className="text-center">
                    <div className="text-7xl font-bold">{streak.days}</div>
                    <div className="text-white/80 font-semibold">🔥 DAYS</div>
                  </div>
                </div>
                <div className="w-full bg-white/30 rounded-full h-4">
                  <div 
                    className="bg-white rounded-full h-4 transition duration-500" 
                    style={{ width: `${(streak.days / 100) * 100}%` }}
                  ></div>
                </div>
                <p className="text-white/80 mt-2 text-sm">{100 - streak.days} days to reach 100! 🎯</p>
              </div>
            ))}
          </div>
        )}

        {/* Levels Tab */}
        {activeTab === 'levels' && (
          <div className="space-y-6 animate-fade-in">
            {levelProgression.map((item, index) => (
              <div
                key={item.level}
                className={`rounded-2xl p-6 transition duration-300 ${
                  item.level <= userStats.level
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-gray-100 border-2 border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-5xl font-bold">Level {item.level}</div>
                    <p className={item.level <= userStats.level ? 'text-blue-100' : 'text-gray-600'}>
                      {item.minPoints.toLocaleString()} points required
                    </p>
                  </div>
                  <div className="text-right">
                    {item.level < userStats.level && (
                      <div className="text-3xl">✅ Completed</div>
                    )}
                    {item.level === userStats.level && (
                      <div>
                        <div className="text-2xl font-bold">🎯 Current</div>
                        <div className="text-sm opacity-80">{userStats.points} / {item.minPoints}</div>
                      </div>
                    )}
                    {item.level > userStats.level && (
                      <div className="text-2xl">🔒 Locked</div>
                    )}
                  </div>
                </div>
                {item.level === userStats.level && (
                  <div className="mt-4 w-full bg-white/30 rounded-full h-3">
                    <div 
                      className="bg-white rounded-full h-3 transition duration-500"
                      style={{ width: `${(userStats.points / item.minPoints) * 100}%` }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            View Full Leaderboard 🏆
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gamification;
