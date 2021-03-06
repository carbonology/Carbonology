import Link from 'next/link';
import CustomHead from '../components/newHeadAllPages';

import Header from '../components/header'
import Footer from '../components/footer'
import EndeavorTray from '../components/endeavor-tray';
import Image from '../components/image';
import Meta from '../utils/meta'

export default () => (
    <>
        <CustomHead />
        <Header />
        <Meta
            pageTitle="WELCOME"
            description="A collective of powerful minds, products, and resources..."
            img="/images/mission/mission_carbonology.jpg"
        />
        <main className="home">
            <div className="home__container">
                <div className="article-huge">
                    <Link href="/mission">
                        <a className="article-huge__left">
                            <h1 className="article-huge__title">THE MISSION</h1>
                            <p className="article-huge__subtitle">A collective of powerful minds, products, and resources that strives to understand and optimize the business-building process through creation.</p>
                            <button className="article-huge__btn c__btn">READ ARTICLE</button>
                        </a>
                    </Link>
                    <Image lazy className="article-huge__img" src="/images/mission/kids_bw.jpg" />
                </div>
                <EndeavorTray id="endeavors" className="home__endeavor-tray" />
            </div>
        </main>
        <Footer />
    </>
);
