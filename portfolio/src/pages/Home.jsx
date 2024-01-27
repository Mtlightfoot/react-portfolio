import Headshot from '../images/profile-picture.jpg';
import Linkedin from '../images/linkedin.svg';
import Email from '../images/email.png';
import Phone from '../images/phone.svg';
import Resume from '../images/resume.png';
import Github from '../images/github.svg';
import '../styles/style.css';

const styles = {
    homeTextBig: {
        fontWeight: '700',
        fontSize: '2.5em',
        color: 'white',
    },
    homeTextMedium: {
        fontWeight: '500',
        fontSize: '1.5em'
    },
    icon: {
        width: '80px',
        paddingLeft: '20px',
        paddingTop: '20px'
    },
    headshot: {
        width: '100%',
        borderRadius: '50px'
    },
    backgroundText: {
        filter: 'drop-shadow(1px 2px 0rem #323232)'
    },
    contactIcons: {
    }
}

function Home() {
    return <div className="pageBorder container-lg">
        <div className="row mx-auto container-lg backgroundImage mt-4">
            <div className="card noBackground noBorder" style={styles.homeTextBig}>
                <div className="card-body col-9 justify-content-center" style={styles.backgroundText}>
                    <h1>Crafting seamless and captivating digital experiences through innovative front-end development</h1>
                </div>
            </div>
        </div>

        <main className="row mx-auto container-lg">
            <div className="col-lg-8 mainCol my-auto">
                <div className="card noBackground underline pb-4" style={styles.homeTextMedium}>
                    <div className="card-body">
                        <h4>Welcome to my Portfolio!
                            <br></br><br></br>
                            A showcase of my journey as an aspiring Front-End Web Developer, featuring a collection of projects of mine that demonstrate my passion for creating interactive and visually appealing websites.</h4>
                    </div>
                </div>
                <div className="row col-6 mx-auto container-lg mt-4">

                    <img src="./assets/linkedin.svg" alt="An icon of a Linkedin Logo" style={styles.contactIcons} className="col" />
                    <img src="./assets/github.svg" alt="A headshot picture of myself" style={styles.contactIcons} className="col" />
                    <img src="./assets/resume.png" alt="A headshot picture of myself" style={styles.contactIcons} className="col" />
                    <img src="./assets/email.png" alt="A headshot picture of myself" style={styles.contactIcons} className="col" />
                    <img src="./assets/phone.svg" alt="A headshot picture of myself" style={styles.contactIcons} className="col" />


                </div>

            </div>
            <div className="col-lg-4 mainCol my-auto">
                <div className="card noBackground noBorder" style={styles.homeTextBig}>
                    <div className="card-body">
                        <img src="./assets/profile-picture.jpg" alt="A headshot picture of myself" style={styles.headshot} />
                    </div>
                </div></div>
        </main>


    </div>
}

export default Home;