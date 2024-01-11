export default function Form() {
    return(
        <>
            <div className={styles.formOuterContainer}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <fieldset className={styles.fieldSet}>
                            <input 
                                id="username"
                                className={styles.userNameInput}
                                type="text"
                            />
                            <input 
                                id="password"
                                className={styles.passwordInput}
                                type="password"
                            />
                        </fieldset>
                    </form>
                    
                </div>
            </div>
        </>
    )
}