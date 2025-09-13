"use client";

import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const PanelLeft = ({ className, size = 24 }: { className?: string; size?: number }) => (
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
      <line x1="9" x2="9" y1="3" y2="21"></line>
    </svg>
  );

  const Plus = ({ className, size = 24 }: { className?: string; size?: number }) => (
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
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  const MessageSquare = ({ className, size = 24 }: { className?: string; size?: number }) => (
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );

  const Users = ({ className, size = 24 }: { className?: string; size?: number }) => (
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );

  const Logo = ({ className, size = 32 }: { className?: string; size?: number }) => (
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
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
  )

  return (
    <div
      className={`relative flex flex-col bg-white dark:bg-gray-950/95 border-r border-gray-200 dark:border-gray-800/80 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 z-10 p-1.5 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        <PanelLeft className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} size={16} />
      </button>
      <div className={`p-4 flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
        <Logo className="text-purple-500" />
        {!isCollapsed && <h1 className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">CollaboAI</h1>}
      </div>
      <div className="flex-1 p-2">
        <button className="w-full flex items-center justify-center py-3 px-4 mb-4 text-left text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md hover:shadow-purple-500/50 transition-all duration-300">
          <Plus size={20} className={!isCollapsed ? 'mr-2' : ''} />
          {!isCollapsed && 'New Chat'}
        </button>
        <div className="overflow-y-auto">
          {!isCollapsed && <h2 className="mb-2 ml-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Chat History</h2>}
          <ul className="space-y-1">
            <li className="flex items-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/80 cursor-pointer">
              <MessageSquare size={18} className={`flex-shrink-0 ${!isCollapsed ? 'mr-3' : 'mx-auto'}`} />
              {!isCollapsed && <span className="truncate text-sm">Next.js Best Practices</span>}
            </li>
            <li className="flex items-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/80 cursor-pointer">
              <MessageSquare size={18} className={`flex-shrink-0 ${!isCollapsed ? 'mr-3' : 'mx-auto'}`} />
              {!isCollapsed && <span className="truncate text-sm">Firebase Integration</span>}
            </li>
          </ul>
        </div>
        <div className="mt-6 overflow-y-auto">
          {!isCollapsed && <h2 className="mb-2 ml-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Collaborations</h2>}
          <ul className="space-y-1">
            <li className="flex items-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/80 cursor-pointer">
              <Users size={18} className={`flex-shrink-0 ${!isCollapsed ? 'mr-3' : 'mx-auto'}`} />
              {!isCollapsed && <span className="truncate text-sm">Project Phoenix</span>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
