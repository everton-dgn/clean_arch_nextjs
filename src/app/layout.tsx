import type { ReactNode } from 'react'

import inter from 'presentation/theme/fontFamily'

import { MainProvider } from 'presentation/components/providers/MainProvider'

import 'presentation/theme/reset.css'

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <meta
        content="minimum-scale=1, initial-scale=1, width=device-width"
        name="viewport"
      />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta
        content="Project frontend with Clean Architecture"
        name="description"
      />
      <meta content="boilerplate, nextjs, clean architecture" name="keywords" />
      <meta content="© Éverton Toffanetto" name="copyright" />
      <meta content="#fff" name="theme-color" />
      <link href="/favicon.png" rel="icon" type="image/png" />
      <link href="/favicon.png" rel="apple-touch-icon" />
    </head>

    <body className={inter.className}>
      <MainProvider>{children}</MainProvider>
    </body>
  </html>
)

export default RootLayout
