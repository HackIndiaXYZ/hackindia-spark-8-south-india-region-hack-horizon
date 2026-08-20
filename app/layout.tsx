import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'HH Goa 2026 — Frame Generator', description: 'Create your HH Goa 2026 builder frame. #FrameInGoa' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }