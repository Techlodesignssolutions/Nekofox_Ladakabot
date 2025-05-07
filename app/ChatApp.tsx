"use client"

import React, { useState, useEffect } from "react"
import ChatInterface from "@/components/chat-interface"
import Avatar from "@/components/avatar"

export default function ChatApp() {
  const [isChatVisible, setIsChatVisible] = useState(false)
  // Add state to track if styles are loaded
  const [stylesLoaded, setStylesLoaded] = useState(false)

  // Load styles once on mount
  useEffect(() => {
    // This ensures styles are only injected once
    if (!stylesLoaded) {
      setStylesLoaded(true)
    }
  }, [stylesLoaded])

  const handleClose = () => {
    setIsChatVisible(false)
  }

  const handleOpen = () => {
    setIsChatVisible(true)
  }

  return (
    <div className="nekofox-chatbot">
      {/* Import your styles here */}
      <style>{`
        /* Base styles for the chatbot */
        .nekofox-chatbot {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          pointer-events: auto; /* Ensure the chatbot captures clicks */
        }
        /* Add more styles as needed */
        .fixed { position: fixed; }
        .bottom-4 { bottom: 1rem; }
        .right-4 { right: 1rem; }
        .z-50 { z-index: 50; }
        
        /* Make transparent areas click-through */
        .nekofox-chatbot-background {
          pointer-events: none;
        }
        
        /* But ensure actual components capture clicks */
        .nekofox-chatbot button,
        .nekofox-chatbot input,
        .nekofox-chatbot a,
        .nekofox-chatbot [role="button"] {
          pointer-events: auto;
        }
      `}</style>
      
      {isChatVisible ? (
        <ChatInterface onClose={handleClose} />
      ) : (
        <div className="fixed bottom-4 right-4 z-50">
          <Avatar onClick={handleOpen} />
        </div>
      )}
    </div>
  )
} 