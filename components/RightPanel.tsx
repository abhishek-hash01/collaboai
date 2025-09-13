import React from 'react';

const RightPanel = () => {

  const FileText = ({ className, size = 24 }: { className?: string; size?: number }) => (
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );

  const Link = ({ className, size = 24 }: { className?: string; size?: number }) => (
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
    </svg>
  );

  return (
    <div className="w-80 p-4 bg-white dark:bg-gray-950/95 border-l border-gray-200 dark:border-gray-800/80">
      <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Collaboration Context</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Shared Files</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600 dark:text-gray-400 text-sm hover:text-purple-500 cursor-pointer">
              <FileText size={16} className="mr-2" />
              <span>Next.js_Cheatsheet.pdf</span>
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400 text-sm hover:text-purple-500 cursor-pointer">
              <FileText size={16} className="mr-2" />
              <span>Server_Actions_Guide.docx</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Shared Links</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600 dark:text-gray-400 text-sm hover:text-purple-500 cursor-pointer truncate">
              <Link size={16} className="mr-2 flex-shrink-0" />
              <span className="truncate">https://nextjs.org/docs</span>
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400 text-sm hover:text-purple-500 cursor-pointer truncate">
              <Link size={16} className="mr-2 flex-shrink-0" />
              <span className="truncate">https://tailwindcss.com/docs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;