"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Users, Brain, Shield, MessageCircle, Sparkles, ChevronDown } from "lucide-react"
import Link from "next/link"

function useScrollReveal() {
  const [visibleElements, setVisibleElements] = useState(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const observeElement = (element: HTMLElement | null) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element)
    }
  }

  return { visibleElements, observeElement }
}

export default function CollaboAILanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { visibleElements, observeElement } = useScrollReveal()

  useEffect(() => {
    setIsVisible(true)
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }

  const useCases = [
    "Pitch Practice",
    "Trip Planning",
    "Group Projects",
    "Brainstorming",
    "Event Planning",
    "Study Sessions",
    "Creative Writing",
    "Problem Solving",
  ]

  const features = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Real-time Collaboration",
      description: "Chat with AI and your team simultaneously in shared conversations",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Context-Aware AI",
      description: "AI remembers every participant and maintains conversation context",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Powered by Gemini API",
      description: "Advanced AI capabilities with Firebase real-time sync",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Fully Secure",
      description: "Enterprise-grade security with cloud-based infrastructure",
    },
  ]

  const useCaseCards = [
    {
      title: "Pitch Practice",
      description: "Prepare startup pitches with AI feedback and teammate collaboration",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
    },
    {
      title: "Trip Planning",
      description: "Plan your next adventure together with AI recommendations",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Group Projects",
      description: "Work with AI as your shared intelligent assistant",
      icon: <Brain className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">CollaboAI</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a
                  href="#features"
                  onClick={(e) => handleSmoothScroll(e, "features")}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Features
                </a>
                <a
                  href="#use-cases"
                  onClick={(e) => handleSmoothScroll(e, "use-cases")}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Use Cases
                </a>
                <a
                  href="#demo"
                  onClick={(e) => handleSmoothScroll(e, "demo")}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Demo
                </a>
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  Log In
                </Link>
                <Link href="/signup">
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white transition-all button-glow font-medium shadow-lg border-0 px-4 py-2"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button - More intuitive design */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-gray-700 dark:text-gray-300 hover:bg-white/20 transition-all"
              >
                <span className="text-sm font-medium">Menu</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-4 space-y-2 glass-effect border-t border-white/10">
              <a
                href="#features"
                onClick={(e) => handleSmoothScroll(e, "features")}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white/10 transition-colors cursor-pointer"
              >
                Features
              </a>
              <a
                href="#use-cases"
                onClick={(e) => handleSmoothScroll(e, "use-cases")}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white/10 transition-colors cursor-pointer"
              >
                Use Cases
              </a>
              <a
                href="#demo"
                onClick={(e) => handleSmoothScroll(e, "demo")}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white/10 transition-colors cursor-pointer"
              >
                Demo
              </a>
              <Link
                href="/login"
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white/10 transition-colors"
              >
                Log In
              </Link>
              <Link href="/signup">
                <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg border-0 font-medium">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg animate-gradient-shift overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 floating-orb rounded-full animate-float opacity-60"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 floating-orb rounded-full animate-float opacity-40"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-64 h-64 floating-orb rounded-full animate-float opacity-30"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance leading-tight">
              Collaborate smarter with <span className="text-blue-600 font-extrabold">AI</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto text-pretty leading-relaxed">
              Chat with AI and your friends together. Perfect for brainstorming, trip planning, and team projects — all
              with shared context.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105 button-glow font-semibold shadow-lg border-0 px-8 py-3"
                >
                  Get Started
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-white/10 transition-all hover:scale-105 bg-white/5 backdrop-blur-sm border-white/20 text-gray-700 dark:text-gray-300 font-semibold shadow-lg px-8 py-3"
              >
                See Pricing →
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg hover-lift border border-white/20">
            <MessageCircle className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-18 h-18 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg hover-lift border border-white/20">
            <Brain className="h-9 w-9 text-purple-600" />
          </div>
        </div>
      </section>

      {/* Interactive Marquee */}
      <section className="py-16 feature-gradient overflow-hidden">
        <div className="whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {useCases.map((useCase, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="mx-6 px-8 py-3 text-lg font-bold bg-white/80 text-primary shadow-md rounded-full"
              >
                {useCase}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Highlights */}
      <section id="use-cases" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={observeElement}
            id="use-cases-header"
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleElements.has("use-cases-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Perfect for every collaboration
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              From creative brainstorming to practical planning, CollaboAI adapts to your team's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {useCaseCards.map((card, index) => (
              <div
                key={index}
                ref={observeElement}
                id={`use-case-${index}`}
                className={`transition-all duration-1000 ${
                  visibleElements.has(`use-case-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className="group hover-lift card-gradient border-border/50 shadow-lg h-full">
                  <CardContent className="p-10 text-center">
                    <div className="mb-6 flex justify-center">{card.icon}</div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4">{card.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{card.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 feature-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={observeElement}
            id="features-header"
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleElements.has("features-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Powerful features for seamless collaboration
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Everything you need to work together with AI in one intuitive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={observeElement}
                id={`feature-${index}`}
                className={`transition-all duration-1000 ${
                  visibleElements.has(`feature-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="group hover-lift card-gradient border-border/50 shadow-lg h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center text-primary">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Preview */}
      <section id="demo" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={observeElement}
            id="demo-header"
            className={`mb-10 transition-all duration-1000 ${
              visibleElements.has("demo-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-balance">
              See collaboration in action
            </h2>
          </div>

          <div
            ref={observeElement}
            id="demo-card"
            className={`transition-all duration-1000 ${
              visibleElements.has("demo-card")
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Card className="p-8 demo-gradient border-border/50 shadow-xl hover-lift">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                    AI
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-3 max-w-md shadow-sm">
                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm">
                      I can help you brainstorm ideas for your startup pitch. What's your product about?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-3 max-w-md shadow-sm">
                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm">
                      It's a sustainable food delivery app
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                    You
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                    Sam
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-3 max-w-md shadow-sm">
                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm">
                      Great! I think we should focus on the environmental impact in our pitch
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 gradient-bg animate-gradient-shift">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance">
            Start collaborating with AI today
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
            Join thousands of teams already using CollaboAI to work smarter together
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105 button-glow text-lg px-10 py-4 font-semibold shadow-lg border-0"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-card/50 transition-all hover:scale-105 bg-white/20 backdrop-blur-sm border-white/30 text-foreground text-lg px-10 py-4 font-semibold shadow-lg"
              >
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 card-gradient border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">CollaboAI</span>
              </div>
            </div>
            <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <a href="#about" className="hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
              <a href="#terms" className="hover:text-blue-600 transition-colors">
                Terms
              </a>
              <a href="#privacy" className="hover:text-blue-600 transition-colors">
                Privacy
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border/50 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; 2024 CollaboAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
