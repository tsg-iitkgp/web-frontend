import React from 'react';
import ContactCard from '../components/ContactCard';
import Layout from '../components/Layout';
import Styles from '../styles/contacts.module.css';

function Contacts() {
<<<<<<< Updated upstream
    document.title = 'Contacts | TSG';
    return (
        <Layout>
            <h1 className='pageHeading'>
                Contact Us
            </h1>
            <div className={Styles.contactsContainer}>
                <ContactCard
                    imgSrc={'/data/images/contacts/19AE10017.png'}
                    name="Praneeth"
                    designation="Technology Coordinator"
                    email="praneeth"
                    facebook=""
                    whatsapp=""
                />
            </div>
        </Layout>
    )
=======
  document.title = "Contacts | TSG";
  // state variable for rendering content on the basis of sidebar click
  const [currentSenate, setCurrentSenate] = useState(true);
  const [secretaries, setSecretaries] = useState(false);
  const [pastBearers, setPastBearers] = useState(false);

  const location = useLocation();

  useEffect(() => {
    //changing state variable values on the basis of path
    if (location.pathname === "/contacts") {
      setCurrentSenate(true);
      setPastBearers(false);
      setSecretaries(false);
    } else if (location.pathname === "/contacts/currentSenate") {
      setCurrentSenate(true);
      setPastBearers(false);
      setSecretaries(false);
    } else if (location.pathname === "/contacts/secretaries") {
      setCurrentSenate(false);
      setPastBearers(false);
      setSecretaries(true);
    } else if (location.pathname === "/contacts/PastBearers") {
      setCurrentSenate(false);
      setPastBearers(true);
      setSecretaries(false);
    }
  }, [location.pathname]);

  return (
    <Layout>
      <div className={Styles.maincontainer}>
        <Sidebar itemsList={contactsSidebarList} />

        <div className={Styles.content}>
          {/* Contacts of the page on basis of route */}
          {currentSenate && <CurrentSenate />}
          {secretaries && <Secretaries />}
          {pastBearers && <PastBearers />}
        </div>
      </div>
    </Layout>
  );
>>>>>>> Stashed changes
}

export default Contacts;
