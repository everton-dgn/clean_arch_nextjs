import Image from 'next/image'

import LogoReact from 'presentation/assets/logo-react.svg'
import { CounterButton } from 'presentation/components/atoms/CounterButton'

import S from './styles.module.css'

const Home = () => (
  <div className={S.container}>
    <header className={S.header}>Boilerplate</header>
    <main className={S.main}>
      <div className={S.wrapper_images}>
        <Image
          alt="Logo Nextjs"
          height={77}
          priority
          src="/images/logo-nextjs.webp"
          width={77}
        />
        <LogoReact data-testid="logo-react" />
      </div>
      <h1 className={S.title}>Clean Architecture</h1>
      <CounterButton />
    </main>
  </div>
)

export default Home
