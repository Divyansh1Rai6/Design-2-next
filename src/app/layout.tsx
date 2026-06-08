import '../index.css'

export const metadata = {
  title: 'Design 2',
  description: 'Converted from Vite to Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}