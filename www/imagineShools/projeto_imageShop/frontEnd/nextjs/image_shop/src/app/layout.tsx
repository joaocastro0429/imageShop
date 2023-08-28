'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'


import { ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from './lib/registry'
import Header from '@/components/Header'

const montserrat = Montserrat({ subsets: ['latin'] })



const theme = {
  colors: {
    primary: '#f73f01',
    secondary: '#777'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <ThemeProvider theme={theme}>
        <body className={montserrat.className}>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
      </ThemeProvider>

    </html>
  )
}
