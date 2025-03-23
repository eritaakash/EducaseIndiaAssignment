import React from 'react';
import styles from '@/styles/Signin.module.scss';

import Form from '@/components/Form';

const Signup: React.FC = () => {
    return (
        <main>
            <section className={'screen-area'}>
                <div className={styles.contents}>

                    <h1>Create your PopX account</h1>
                    <Form method={'signup'} />
                </div>
            </section>
        </main>
    )
}

export default Signup;