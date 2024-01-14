import styles from './Footer.module.css'

export default function Footer() {
    return(
        <>
        <footer className={styles.footer}>
            <div className={styles.footText}>
                <div>Meta</div>
                <div>About</div>
                <div>Blog</div>
                <div>Jobs</div>
                <div>Help</div>
                <div>Privacy</div>
                <div>Terms</div>
                <div>Locations</div>
                <div>Instagram Lite</div>
                <div>Threads</div>
                <div>Contact Uploading & Non-Users</div>
                <div>Meta Verified</div>
            </div>
            <div className={styles.footText}>
                <div>English</div>
                <div>&#169; 2024 Instagram from Meta</div>
            </div>
        </footer>
        </>
    )
}