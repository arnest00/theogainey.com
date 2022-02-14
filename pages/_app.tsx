import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import '../styles/utils.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
      <Component {...pageProps} />
  )
}
