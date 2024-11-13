import '@fontsource/fahkwang';
import '@fontsource/montserrat';
import 'bootstrap/dist/css/bootstrap.min.css';
import headerImage from '../../assets/images/LandingHero1.png';
import Logo from '../../assets/images/logotype_fullcolor_rgb 1.png';
import './successfulRegistry.css';

const SuccessfulRegistry = () => {
  return (
    <div className="container-fluid main relative px-0">
      <img
        className="hero img-fluid min-h-screen h-screen"
        src={headerImage}
        alt="Hero"
      />
      <img className="logo img-fluid" src={Logo} alt="Logo" />
      <div className="modal-container  absolute gap-5  px-[7%] p-[7%]  max-w-2xl mx-4 my-4  lg:m4 align-middle  rounded-[32px] top-[12%] bottom-[12%]flex flex-wrap overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-white/40 to-white/30">
        <h1 className="text-center text-3xl lg:text-4xl tracking-wide font-bold F-Family2">
          Thank you <br /> for your registration
        </h1>

        <p className="text-center text-lg lg:text-xl tracking-wide F-Family">
          An email has been sent to your email box, please check your spam
          folder
        </p>

        <h4 className="text-center text-lg lg:text-xl tracking-widest font-semibold F-Family ">
          LEARN MORE ABOUT OVIVA CARE{' '}
        </h4>
      </div>
    </div>
  );
};

export default SuccessfulRegistry;
