import React, { useState, useEffect } from 'react';
import styles from '@/styles/partials/Form.module.scss';

import { useRouter } from 'next/router';

type FormProps = {
    method: 'signin' | 'signup';
}

type FieldTypes = {
    field: string;
    placeholder: string;
    forSignup?: boolean;
}

const Form: React.FC<FormProps> = ({ method }) => {
    const router = useRouter();

    const [fields,] = useState([
        { field: 'Full Name', placeholder: 'Enter full name', forSignup: true },
        { field: 'Phone number', placeholder: 'Enter phone number', forSignup: true },
        { field: 'Email address', placeholder: 'Enter email address' },
        { field: 'Password', placeholder: 'Enter password' },
        { field: 'Company Name', placeholder: 'Enter company name', forSignup: true }
    ]);

    const [enableBtn, setEnableBtn] = useState(false);

    useEffect(() => {
        const updateEnable = () => {
            const inputs = document.querySelectorAll('input');
            
            inputs.forEach((input: HTMLInputElement) => {
                if (input.type === 'radio') return;

                if (input.value === '') {
                    setEnableBtn(false);
                    return;
                }

                setEnableBtn(true);
            });
        }

        document.addEventListener('input', updateEnable);

        // cleanup
        return () => {
            document.removeEventListener('input', updateEnable);
        }
    }, []);

    const proceed = () => {
        if (enableBtn) {
            router.push('/account-settings');
        }
    }

    return (
        <form className={styles.form}>
            {
                fields.map((field: FieldTypes, index: number) => (
                    field.forSignup && method === 'signin' ? null : (
                        <div key={index} className={styles.inp_container}>
                            <input type={'text'} placeholder={field.placeholder} />
                            <label>
                                {field.field}

                                {
                                    method === 'signup' && field.field !== 'Company Name' && <div>
                                        <p>*</p>
                                    </div>
                                }
                            </label>
                        </div>
                    )
                ))
            }

            {
                method === 'signup' ? (
                    <>
                        <div className={styles.agency_question}>
                            <label>
                                Are you an Agency?
                                <div>
                                    <p>*</p>
                                </div>
                            </label>

                            <div>
                                <label>
                                    <input type={'radio'} name={'agency'} defaultChecked={true} />
                                    Yes
                                </label>

                                <label>
                                    <input type={'radio'} name={'agency'} />
                                    No
                                </label>
                            </div>
                        </div>

                        <div className={styles.spacer}> </div>
                    </>
                ) : null
            }

            <button 
                type={'button'} 
                className={enableBtn ? styles.btn : styles.disabled}
                onClick={proceed}
                style={ method === 'signin' ? { marginTop: '-10px' } : {}}>
                <p>
                    { method === 'signin' ? 'Login' : 'Create Account' }
                </p>
            </button>
        </form>
    )
};

export default Form;