"use client"

import React, { useState, useEffect } from "react"
import ChatInterface from "@/components/chat-interface"
import { useSearchParams } from 'next/navigation'

export default function WidgetPage() {
  const searchParams = useSearchParams()
  const initialState = searchParams.get('state')
  const transparent = searchParams.get('transparent') === 'true';
  
  // Start with chat closed if state=closed in URL, otherwise use default
  const [isChatOpen, setIsChatOpen] = useState(initialState !== 'closed')
  
  // Add debugging
  useEffect(() => {
    console.log("Widget page loaded, isChatOpen:", isChatOpen);
    console.log("Is in iframe:", window !== window.parent);
  }, [isChatOpen]);
  
  const handleOpen = () => {
    setIsChatOpen(true)
    // Send message to parent window
    if (window.parent) {
      window.parent.postMessage('open', '*');
    }
  }
  
  const handleClose = () => {
    setIsChatOpen(false)
    // Send message to parent window
    if (window.parent) {
      window.parent.postMessage('close', '*');
    }
  }

  return (
    <div className={`
      flex justify-center items-center h-screen w-full
      ${transparent ? 'bg-transparent' : 'bg-white'}
    `}>
      {isChatOpen ? (
        <div style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}>
          <ChatInterface 
            initialMessage="Hi, I'm LADAKA! How can I help you today?" 
            showHeader={true}
            autoFocus={true}
            onClose={handleClose}
          />
        </div>
      ) : (
        <button
          onClick={handleOpen}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#ea580c',
            border: '2px solid #fdba74',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
          }}
        >
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontWeight: 'bold',
              zIndex: 1
            }}>LA</span>
            <img
              src="https://nekofox-ladakabot.vercel.app/Ladaka%20Chatbot.jpeg"
              alt="LADAKA Avatar"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </button>
      )}
    </div>
  )
} 