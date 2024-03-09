import Image from 'next/image';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import styles from './page.module.css'; // Assurez-vous que le chemin soit correct

export default function Home() {
  return (
    <div className={styles.bgWhite}>
      <div className={styles.logoContainer}>
        <Image src="/jobz.png" alt="Logo" width={100} height={100} />
      </div>
      <div className={styles.minHScreen}>
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Login </h2>
          <form className={styles.form} action="/Opportunities" method="POST">
            <div className={styles.inputGroup}>
              <div className={styles.inputContainer}>
                <UserIcon className={styles.icon} />
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={styles.input}
                />
              </div>
              <div className={styles.inputContainer}>
                <LockClosedIcon className={styles.icon} />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.submitButtonContainer}>
              <button type="submit" className={styles.submitButton}>
                Sign In
              </button>
            </div >
            <div className={styles.submitButtonContainer}>
            <a href="/Signup" className={styles.sign_up}>Sign up</a>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

