import React from 'react';

const ChatWindow = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50/50 dark:bg-gray-900/95">
      <div className="space-y-6">
        {/* Incoming Message */}
        <div className="flex items-start gap-4">
          <img className="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="Avatar" />
          <div className="bg-white dark:bg-gray-800/80 p-4 rounded-lg rounded-tl-none shadow-md max-w-lg">
            <p className="text-gray-800 dark:text-gray-200">
              Hey everyone! I've been looking into the best practices for our new Next.js project. I think we should start with a solid foundation for data fetching and state management.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">10:00 AM</p>
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="flex items-start gap-4 flex-row-reverse">
          <img className="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/5.jpg" alt="Avatar" />
          <div className="bg-purple-500 p-4 rounded-lg rounded-br-none shadow-md max-w-lg">
            <p className="text-white">
              Great idea! I agree. For data fetching, I recommend using React Server Components by default. We can fetch data directly in our components using `async/await`.
            </p>
             <p className="text-xs text-purple-200 mt-2 text-right">10:01 AM</p>
          </div>
        </div>

        {/* Incoming Message */}
        <div className="flex items-start gap-4">
          <img className="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/women/9.jpg" alt="Avatar" />
          <div className="bg-white dark:bg-gray-800/80 p-4 rounded-lg rounded-tl-none shadow-md max-w-lg">
            <p className="text-gray-800 dark:text-gray-200">
              That makes sense. And for mutations? I've heard good things about Server Actions.
            </p>
             <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">10:02 AM</p>
          </div>
        </div>
        
         {/* Outgoing Message */}
        <div className="flex items-start gap-4 flex-row-reverse">
          <img className="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/5.jpg" alt="Avatar" />
          <div className="bg-purple-500 p-4 rounded-lg rounded-br-none shadow-md max-w-lg">
            <p className="text-white">
              Exactly! Server Actions are perfect for that. They're secure and co-located with our components. We should definitely use them for form submissions.
            </p>
             <p className="text-xs text-purple-200 mt-2 text-right">10:03 AM</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatWindow;
