"use client"

import React, { useState } from "react"
import ChatInterface from "@/components/chat-interface"
import Avatar from "@/components/avatar"

export default function ChatApp() {
  const [isChatVisible, setIsChatVisible] = useState(false)

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
        }
        /* Add more styles as needed */
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