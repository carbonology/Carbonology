import Link from 'next/link';

export default (props) => (
    <div id={`${props.id}`} className={`${props.className} endeavor-tray`}>
        <h1 className="endeavor-tray__title">Endeavors</h1>
        <div className="endeavor-tray__tray">
            <div className="endeavor-tray__endeavor">
                <img draggable="false" className="endeavor-tray__endeavor-img" src="/hottubLogo.png" alt="carbon collective" />
                <Link href="/mission">
                    <a className="c__text-link endeavor-tray__btn">
                        LEARN MORE
                    </a>
                </Link>
            </div>
            <div className="endeavor-tray__endeavor">
                <img draggable="false" className="endeavor-tray__endeavor-img" src="/carboncollective.png" alt="carbon collective" />
                <Link href="/mission">
                    <a className="c__text-link endeavor-tray__btn">
                        LEARN MORE
                    </a>
                </Link>
            </div>
            <div className="endeavor-tray__endeavor">
                <img draggable="false" className="endeavor-tray__endeavor-img" src="/plutoLogo.png" alt="carbon collective" />
                <Link href="/mission">
                    <a className="c__text-link endeavor-tray__btn">
                        LEARN MORE
                    </a>
                </Link>
            </div>
            <div className="endeavor-tray__endeavor">
                <img draggable="false" className="endeavor-tray__endeavor-img" src="/goBibitLogo.png" alt="carbon collective" />
                <Link href="/mission">
                    <a className="c__text-link endeavor-tray__btn">
                        LEARN MORE
                    </a>
                </Link>
            </div>
            <div className="endeavor-tray__endeavor">
                <img draggable="false" className="endeavor-tray__endeavor-img" src="/busbuddy.png" alt="carbon collective" />
                <Link href="/mission">
                    <a className="c__text-link endeavor-tray__btn">
                        LEARN MORE
                    </a>
                </Link>
            </div>
        </div>
    </div>
);

// goBibit
// Carbon Collective
// HotTub
// Pluto
// BusBuddy