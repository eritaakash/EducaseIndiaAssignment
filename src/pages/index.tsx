import React from 'react';
import styles from '@/styles/Home.module.scss';

import { useRouter } from 'next/router';


const Home: React.FC = () => {
    const router = useRouter();

    return (
        <main>
            <section className={'screen-area'}>
                <div className={styles.contents}>

                    <div className={styles.welcome}>
                        <h1>Welcome to PopX</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                        <button onClick={() => router.push('/sign-up')}>
                            <span>Create Account</span>
                        </button>

                        <button onClick={() => router.push('/sign-in')}>
                            <span>Already Registered? Login</span>
                        </button>
                    </div>
                </div>
                
            </section>
        </main>
    )
};

export default Home;