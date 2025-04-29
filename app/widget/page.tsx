"use client"

import React from "react"
import ChatInterface from "@/components/chat-interface"

export default function WidgetPage() {
  // Function to close the widget by sending a message to the parent
  const handleClose = () => {
    if (window.parent) {
      window.parent.postMessage({ type: 'close' }, '*');
    }
  }

  return (
    <div className="widget-container">
      <ChatInterface onClose={handleClose} />
    </div>
  )
} 