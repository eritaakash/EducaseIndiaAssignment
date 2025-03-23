import React from 'react';
import styles from '@/styles/Account.module.scss';

import Image from 'next/image';


const AccountSettings: React.FC = () => {
    return (
        <main>
            <section className={'screen-area'}>
                <div className={styles.contents}>

                    <div className={styles.title_elem}>
                        <h3>Account Settings</h3>
                    </div>
                    
                    <div className={styles.profile_info}>
                        <div className={styles.img_container}>
                            <Image src={'/marry_doe.png'} alt={'Profile Image'} width={76} height={76} />
                            <Image src={'/camera.png'} alt={'Camera Icon'} width={21} height={23} />
                        </div>

                        <div className={styles.profile_details}>
                            <span>Marry Doe</span>
                            <span>Marry@Gmail.Com</span>
                        </div>

                    </div>

                    <p className={styles.lorem}>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                </div>
            </section>
        </main>
    )
};

export default AccountSettings;