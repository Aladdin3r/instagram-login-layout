import styles from './Form.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Form() {
    return(
        <>
            <div className={styles.formOuterContainer}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <fieldset className={styles.fieldSet}>
                        <Image src={'/instagram.svg'} alt='Instagram written logo' width={200} height={110} className={styles.insta}/>
                            <input 
                                id="username"
                                className={styles.userNameInput}
                                type="text"
                                placeholder='Phone number, username, or email'
                            />
                            <input 
                                id="password"
                                className={styles.passwordInput}
                                type="password"
                                placeholder='Password'
                            />
                            <Button/>
                            <p className={styles.or}>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                &nbsp;&nbsp;OR&nbsp;&nbsp;
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                                <span>&#8212;</span>
                            </p>
                            <Link href='https://www.facebook.com/login/' className={styles.link}>
                                <img src='/facebook.png' height={15} width={15}/>
                                &nbsp;&nbsp;Log in with Facebook
                            </Link>
                        
                            <Link href='https://www.instagram.com/accounts/password/reset/' className={styles.forgot}>
                                Forgot password?
                            </Link>
                        </fieldset>
                        <fieldset className={styles.fieldSet}>
                            <p className={styles.second}>
                                Don't have an account?&nbsp;
                                <Link href='https://www.instagram.com/accounts/emailsignup/' className={styles.signUp}>Sign up</Link>
                            </p>
                        </fieldset>
                    </form>
                    
                </div>
            </div>
        </>
    )
}