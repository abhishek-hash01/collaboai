import React from 'react';

const MessageInput = () => {

  const Paperclip = ({ className, size = 24 }: { className?: string; size?: number }) => (
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
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.59a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
    </svg>
  );

  const Send = ({ className, size = 24 }: { className?: string; size?: number }) => (
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
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );

  return (
    <div className="p-4 bg-white dark:bg-gray-950/95 border-t border-gray-200 dark:border-gray-800/80">
      <div className="relative">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full py-3 pl-12 pr-28 bg-gray-100 dark:bg-gray-800/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-gray-800 dark:text-gray-200"
        />
        <button className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
          <Paperclip size={20} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center py-2 px-4 text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md hover:shadow-purple-500/50 transition-all duration-300">
          <Send size={16} className="mr-2" />
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;