import './globals.css'

export const metadata = {
  title: "Xavi's Entertainment Web App",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <h2>Layout nav</h2>
        {children}
      </body>
    </html>
  )
}
