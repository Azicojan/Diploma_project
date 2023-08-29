import React,{ useState, useEffect} from 'react';
import NavigationBar from './NavigationBar';
import MainFooter from './MainFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../styling/custom.css';
import { ColorRing } from  'react-loader-spinner'


const HomePage = ({ loggedIn, username, onLoginSuccess, onLogout, selectedPhoto }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  

  // Show the scroll button when scrolling down
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the simulated loading time
    }, 500);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
  

  <div>
      {/* Display the loading spinner while content is loading */}
      {isLoading ? (
        <div className="loading-spinner-container">
          <ColorRing
            visible={true}
            height={80}
            width={80}
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
               ) : (

                <div>
      <NavigationBar loggedIn={loggedIn} username={username} 
        onLoginSuccess={onLoginSuccess} onLogout={onLogout} selectedPhoto={selectedPhoto} />
      
      {/* Block 1: Advertising */}
          <div className="block block-advertising">
            <div className="block-content">
               <h1 className="title" style={{ color: 'white',fontSize:'40px'}}>
                Heal. Change. Grow</h1>
               <p className='text1'>Do you feel unsatisfied with the direction of your life and the
                 quality of your relationships? If so, you are certainly not alone.
                 Our goal is to empower individuals and couples to heal from past wounds,
                 grow into the person they would like to become, and thrive in their
                 lives and relationships.
               </p>
            </div>
          </div>

          {/* Block 2: Why Choose Us */}
          <div className="block block-why-choose-us">
            <div className="block-content">
              <div className="columns" style={{width:1010}}>
                <div className="colum is-6" style={{padding:'40px 20px 0 0',fontSize:20}}>
                 
                  <p>You can think and feel better. Consumer reports conducted a study 
                    examining the effectiveness of therapy. Of the 4,000 therapy clients
                    who responded, nearly 90% reported that they were managing life
                    better after getting help.
                  </p><br/>
                  <h4 style={{fontWeight:'bolder', fontSize:15}}>MATTHEW HAWKINS, PH. D</h4>
                </div>
                <div className="column is-8" style={{paddingLeft:100}}>
                 <h2 className='title' style={{textAlign:'left'}}>Why Choose Us?</h2>
                  <p>Dr Ozodi is qualified to treat many psychological disorders and help
                     clients of most ages. She has had more than  20 years of experience
                      practising with people from different ways of life with a variety
                      of mental issues.Our intimate size enables us to offer very 
                      reasonable out-of-pocket fees if needed.
                  </p>
                </div>
              </div>
           </div>
          </div>

                
                <section className="section">
                <div className="container">
                 {/* Main Content */}
                 <div className="columns is-custom-gap is-flex" style={{ marginTop: 50 }}>
                 <div className="column custom-background-1">
                      <h2 className="subtitle" style={{ color:'white',margin:40,width:300,fontSize:27,fontWeight:600}}>
                       Relationship & Marriage Therapy</h2>
                      <p style={{margin:40,width:300}}>Relationships can oftentimes be difficult. Even the most
                        well-intentioned and high functioning couples can come upon
                         rough times. Chances are if you sense that something is wrong
                          with your relationship or marriage then there likely is a problem.
                      </p>
                    </div>
                    <div className="column custom-background-2">
                    <h2 className="subtitle" style={{ color:'white',margin:50,width:300,fontSize:27,fontWeight:600}}>
                     Depression and Anxiety Therapy</h2>
                    <p style={{margin:50,width:300}}>Does your life look pretty good on the outside? And yet, you just 
                        aren’t as happy you want to be? This is not uncommon. Stress, anxiety,
                        depression and relationship issues can hit even the most secure people
                        at times. At Dr Ozodi psychology services, we have a staff who can 
                        help you feel better.
                     </p>
                  </div>
                  <div className="column custom-background-3">
                    <h2 className="subtitle" style={{ color:'white',margin:50,width:300,fontSize:27,fontWeight:600}}>
                     Children & Adolescent Therapy</h2>
                    <p style={{margin:50,width:300}}>Children and teens can face a range of difficult problems in their
                      lives that might include sadness, anxiety, transitions, social
                      difficulties, academic stress, and family conflicts. They may need to
                      learn how to understand, control, and share their emotions
                      appropriately.
                    </p>
                  </div>
                </div>
               </div>
     
                {/* Scroll to Top Button */}
                 {showScrollButton && (
                   <button className="scroll-to-top" onClick={scrollToTop}>
                     <FontAwesomeIcon icon={faArrowUp} />
                   </button>
                 )}
     
             </section>
             <MainFooter />
              
           
            </div>
          )}
       </div>
        );
      };
        

       

export default HomePage;
