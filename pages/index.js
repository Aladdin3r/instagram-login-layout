import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Form from '@/Form'
import Footer from '@/Components/Footer'
import Button from '@/Components/Button'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Login · Instagram</title>
        <meta name="description" content="Exercise 1 MDIA2109" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${styles.main}`}>
        <Form/>
        <p className={styles.text}>Get the app.</p>
        <div className={styles.apps}>
          <Link href='https://apps.apple.com/us/app/instagram/id389801252?vt=lo'>
            <img src='/appstore.png' height={35} width={120} alt='app store link' className={styles.image}/>
          </Link>
          <Link href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DF0D81AEB-8EAB-4C72-A943-7D7B4B73D0BE%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps://www.google.com/&pli=1'>
            <img src='/googleplay.png' height={35} width={120} alt='app store link' className={styles.image}/>
          </Link>
        </div>
        <Footer/>
      </main>
    </>
  )
}
