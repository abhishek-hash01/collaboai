'use client'

import type React from 'react'
import withAuth from '@/components/withAuth'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Brain, User, CornerDownLeft, Users, Settings, LogOut, Menu, Sun, Moon, Share2 } from 'lucide-react'
import { useTheme } from 'next-themes'
import { auth, db } from '@/lib/firebase/client'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter, useParams } from 'next/navigation'
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from "firebase/firestore";
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface Message {
  id: string;
  role: 'user' | 'model'
  parts: { text: string }[]
  timestamp: any;
  sender?: string;
}

function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const params = useParams()
  const chatId = params?.chatId as string;
  const [user] = useAuthState(auth)

  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatId) {
      const q = query(collection(db, `chats/${chatId}/messages`), orderBy("timestamp"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messageList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Message));
        setMessages(messageList);
      });

      return () => unsubscribe();
    }
  }, [chatId]);


  useEffect(() => {
    // Automatically scroll to the bottom when a new message is added
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim() === '' || !chatId || !user) return

    const userMessage = {
      role: 'user',
      parts: [{ text: newMessage }],
      timestamp: serverTimestamp(),
      sender: user.email,
    }

    const chatRef = collection(db, `chats/${chatId}/messages`);
    await addDoc(chatRef, userMessage);

    setNewMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ history: messages, message: newMessage }),
      })

      if (!response.ok) {
        throw new Error('API error')
      }

      const { text } = await response.json()

      const aiResponse = {
        role: 'model',
        parts: [{ text }],
        timestamp: serverTimestamp(),
      }

      await addDoc(chatRef, aiResponse);

    } catch (error) {
      console.error('Failed to get AI response:', error)
      const errorResponse = {
        role: 'model',
        parts: [{ text: 'Sorry, something went wrong. Please try again.' }],
        timestamp: serverTimestamp(),
      }
      await addDoc(chatRef, errorResponse);
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await auth.signOut()
      router.push('/login')
    } catch (error) {
      console.error('Error signing out:', error)
      setIsLoggingOut(false)
    }
  }

  const handleInvite = () => {
    const inviteLink = window.location.href;
    navigator.clipboard.writeText(inviteLink).then(() => {
      alert('Invite link copied to clipboard!');
    });
  }

  const userInitial = user?.email?.charAt(0).toUpperCase() || 'U';

  return (
    <div className='flex h-screen bg-background text-foreground'>
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'} bg-card border-r border-border flex flex-col overflow-hidden`}
      >
        <div className='p-4 border-b border-border flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
              <Brain className='h-5 w-5 text-primary-foreground' />
            </div>
            <span className='text-lg font-bold'>CollaboAI</span>
          </div>
        </div>

        <div className='flex-1 p-4 space-y-4'>
          <h3 className='text-sm font-semibold text-muted-foreground'>Collaborators</h3>
          <div className='space-y-2'>
            <div className='flex items-center gap-2 p-2 rounded-lg bg-muted'>
              <Avatar className='h-8 w-8'>
                <AvatarFallback>{userInitial}</AvatarFallback>
              </Avatar>
              <span className='font-medium'>{user?.email}</span>
            </div>
            <div className='flex items-center gap-2 p-2 rounded-lg hover:bg-muted'>
              <Avatar className='h-8 w-8'>
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <span className='font-medium'>Gemini AI</span>
            </div>
          </div>
        </div>

        <div className='p-4 border-t border-border space-y-2'>
          <Button variant='ghost' onClick={handleInvite} className='w-full justify-start gap-2'>
            <Share2 className='h-4 w-4' />
            Invite Team
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='ghost' className='w-full justify-start gap-2'>
                <Settings className='h-4 w-4' />
                Settings
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Settings</DialogTitle>
              </DialogHeader>
              <div className='flex items-center justify-between mt-4'>
                <span className='text-sm font-medium'>Theme</span>
                <div className='flex items-center gap-2'>
                  <Button variant={theme === 'light' ? 'secondary' : 'ghost'} size='sm' onClick={() => setTheme('light')}>
                    <Sun className='h-4 w-4' />
                  </Button>
                  <Button variant={theme === 'dark' ? 'secondary' : 'ghost'} size='sm' onClick={() => setTheme('dark')}>
                    <Moon className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant='ghost' onClick={handleLogout} disabled={isLoggingOut} className='w-full justify-start gap-2 text-red-500 hover:text-red-600'>
            {isLoggingOut ? (
              <>
                <LoadingSpinner size={16} />
                Logging out...
              </>
            ) : (
              <>
                <LogOut className='h-4 w-4' />
                Log Out
              </>
            )}
          </Button>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className='flex-1 flex flex-col'>
        <header className='p-4 border-b border-border flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Button variant='ghost' size='icon' onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='md:hidden'>
              <Menu className='h-5 w-5' />
            </Button>
            <h2 className='text-lg font-semibold'>Pitch Practice Session</h2>
          </div>
        </header>

        <div className='flex-1 overflow-hidden'>
          <ScrollArea className='h-full p-4' ref={scrollAreaRef}>
            <div className='space-y-6'>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}
                >
                  {message.role !== 'user' && (
                    <Avatar className='h-8 w-8 border-2 border-border'>
                      <AvatarFallback>
                        <Brain />
                      </AvatarFallback>
                    </Avatar>
                  )}
                   <div className={`flex flex-col gap-1 ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <p className="text-xs text-muted-foreground px-2">
                        {message.role === 'user' ? (message.sender ? message.sender.split('@')[0] : 'User') : 'Gemini AI'}
                    </p>
                    <div
                      className={`rounded-2xl p-3 max-w-lg shadow-sm ${                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card border border-border'
                      }`}
                    >
                      <p className='text-sm leading-relaxed'>{message.parts[0].text}</p>
                    </div>
                  </div>

                  {message.role === 'user' && (
                    <Avatar className='h-8 w-8 border-2 border-border'>
                      <AvatarFallback>
                        {message.sender ? message.sender.charAt(0).toUpperCase() : 'U'}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className='flex items-start gap-3'>
                  <Avatar className='h-8 w-8 border-2 border-border'>
                    <AvatarFallback>
                      <Brain />
                    </AvatarFallback>
                  </Avatar>
                  <div className='rounded-2xl p-3 max-w-lg shadow-sm bg-card border border-border'>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-muted-foreground rounded-full animate-pulse'></div>
                      <div className='w-2 h-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:0.2s]'></div>
                      <div className='w-2 h-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:0.4s]'></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        <div className='p-4 border-t border-border'>
          <form onSubmit={handleSendMessage} className='flex items-center gap-3'>
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder='Type your message...'
              className='flex-1 bg-muted border-none focus-visible:ring-1 focus-visible:ring-primary'
              autoComplete='off'
            />
            <Button type='submit' disabled={isLoading || newMessage.trim() === ''} className='gap-2'>
              Send
              <CornerDownLeft className='h-4 w-4' />
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default withAuth(ChatPage)
