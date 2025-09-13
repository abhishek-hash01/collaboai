import React from 'react';

const Topbar = () => {

  const UserPlus = ({ className, size = 24 }: { className?: string; size?: number }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <line x1="19" x2="19" y1="8" y2="14"></line>
      <line x1="22" x2="16" y1="11" y2="11"></line>
    </svg>
  );

  return (
    <div className="flex h-16 items-center justify-between p-4 bg-white dark:bg-gray-950/95 border-b border-gray-200 dark:border-gray-800/80">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Next.js Best Practices</h1>
      <div className="flex items-center">
        <button className="flex items-center mr-6 py-2 px-4 text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md hover:shadow-purple-500/50 transition-all duration-300">
          <UserPlus size={18} className="mr-2" />
          Invite Friends
        </button>
        <div className="flex -space-x-2 overflow-hidden">
          <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://randomuser.me/api/portraits/women/2.jpg" alt="" />
          <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://randomuser.me/api/portraits/men/5.jpg" alt="" />
          <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://randomuser.me/api/portraits/women/9.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
