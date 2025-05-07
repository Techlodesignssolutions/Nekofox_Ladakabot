import './widget-styles.css'

export default function WidgetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="widget-html">
      <body className="widget-body" style={{ 
        margin: 0, 
        padding: 0, 
        overflow: 'hidden',
        backgroundColor: 'transparent' 
      }}>
        {children}
      </body>
    </html>
  )
} 