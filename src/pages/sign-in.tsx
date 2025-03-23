import React from 'react';
import styles from '@/styles/Signin.module.scss';

import Form from '@/components/Form';

const Signin: React.FC = () => {
    return (
        <main>
            <section className={'screen-area'}>
                <div className={styles.contents}>

                    <h1>Signin to your PopX account</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                    <Form method={'signin'} />
                </div>
            </section>
        </main>
    )
}

export default Signin;