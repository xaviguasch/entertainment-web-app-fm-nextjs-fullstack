import EntAppProvider from './context/EntAppProvider'

import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: "Xavi's Entertainment Web App",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <EntAppProvider>
          <Navbar />

          <div className='layout-content'>{children}</div>
        </EntAppProvider>
      </body>
    </html>
  )
}
