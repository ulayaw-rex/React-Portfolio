import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="row">
        {/*Left Side*/}
        <div className="col-md-3 bg-black p-4 rounded-start shadow border-start border-dark">
          <ProfilePicture />
          <PersonalInfo />
        </div>

        {/*Right Side*/}
        <div className="col-md-9 bg-dark p-4 rounded-end shadow-lg border-end border-dark">
          <Experience />
          <div className="pt-4">
            <Skills />
          </div>
          <div className="pt-5">
            <Education />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
