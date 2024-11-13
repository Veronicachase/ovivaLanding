import '@fontsource/fahkwang';
import '@fontsource/montserrat';
import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import orangeBottomLarge from '../../assets/images/bottom-orange-large.png';
import orangeBottomSmall from '../../assets/images/bottom-orange-small.png';
import Agniezka from '../../assets/images/Col-left-Agniezka.png';
import iconPoint1 from '../../assets/images/Color=Default-Number=Yes-Size=80-Device=Mobile.png';
import iconPoint from '../../assets/images/Color=Orange-Number=No-Size=96-Device=Desktop.png';
import ImageFooterSin from '../../assets/images/ImageFooterSin.png';
import headerImage from '../../assets/images/LandingHero1.png';
import LandingSlice12 from '../../assets/images/LandingSlice1.2.png';
import LandingSlice2 from '../../assets/images/landingSlice2.jpg';
import LandingSlice3 from '../../assets/images/landingSlice3.png';
import Logo from '../../assets/images/logotype_fullcolor_rgb 1.png';
import Opinion1 from '../../assets/images/opinion1.jpeg';
import Opinion2 from '../../assets/images/opinion2.jpeg';
import Opinion3 from '../../assets/images/opinion3.png';
import scarfWomanImg from '../../assets/images/scarfWoman.png';
import timeline2Small from '../../assets/images/timeline2-mobile.png';
import timeline3Small from '../../assets/images/timeline3-mobile.png';
import orangeTopLarge from '../../assets/images/top-orange-large.png';
import orangeTopSmall from '../../assets/images/Top-orange-small.png';
import timeline2 from '../../assets/images/Type=Line-group, Group=2, Device=Desktop.png';
import timeline1 from '../../assets/images/Type=Line-group-Group=1-Device=Desktop.png';
import timeline3 from '../../assets/images/Type=Line-group-Group=3-Device=Desktop.png';
import timeline4 from '../../assets/images/Type=Line-group-Group=4-Device=Desktop.png';
import './landingPage.css';

function LandingPage() {
  const [timeLeft, setTimeleft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const dueDate = new Date('2024-10-25T13:00:00');
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDifference = dueDate - now;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
      setTimeleft({ days, hours, minutes });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const QuoteIcon = () => (
    <svg
      width="24"
      height="17"
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.885 7.07951C9.71167 7.47951 10.3517 8.06618 10.805 8.83951C11.2583 9.58618 11.485 10.4795 11.485 11.5195C11.485 13.0662 10.9917 14.3062 10.005 15.2395C9.01833 16.1728 7.75167 16.6395 6.205 16.6395C4.65833 16.6395 3.39167 16.1728 2.405 15.2395C1.41833 14.3062 0.925 13.0662 0.925 11.5195C0.925 10.8262 1.01833 10.1328 1.205 9.43951C1.39167 8.74618 1.81833 7.69284 2.485 6.27951L5.285 0.31951H10.885L8.885 7.07951ZM20.485 7.07951C21.3117 7.47951 21.9517 8.06618 22.405 8.83951C22.8583 9.58618 23.085 10.4795 23.085 11.5195C23.085 13.0662 22.5917 14.3062 21.605 15.2395C20.6183 16.1728 19.3517 16.6395 17.805 16.6395C16.2583 16.6395 14.9917 16.1728 14.005 15.2395C13.0183 14.3062 12.525 13.0662 12.525 11.5195C12.525 10.8262 12.6183 10.1328 12.805 9.43951C12.9917 8.74618 13.4183 7.69284 14.085 6.27951L16.885 0.31951H22.485L20.485 7.07951Z"
        fill="#F68E3D"
      />
    </svg>
  );

  return (
    <div className=" w-dvw overflow-hidden">
      <div className="relative flex justify-center  md:justify-start min-h-[812px]">
        <img className="hero" src={headerImage} alt="Hero" />
        <img className="logo" src={Logo} alt="Logo" />

        <div className="modal-container absolute px-[5%] py-[10%]  md:py-[5%] gap-4 md:gap-y-8  max-w-2xl m-4 align-middle  rounded-[32px] top-[12%] bottom-[12%]flex flex-wrap overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-white/40 to-white/30  ">
          <p className=" F-Family text-base md:text-lg font-black text-center tracking-widest px-8">
            YOU FEEL TIRED, HUNGRY, FOGGY, ANXIOUS, AND YOU CRAVE FOR SUGAR ALL
            THE TIME?
          </p>
          <p className="text-base md:text-lg text-center tracking-widest F-Family ">
            JOIN LIVE <br /> WOMEN´S HORMONAL HEALTH WEBINAR
          </p>
          <h5 className="text-3xl md:text-4xl font-bold text-center tracking-wider F-Family2">
            Boost Your Mood & Get Back Your Energy
          </h5>
          <p className="text-base md:text-lg font-semibold text-center tracking-wider mt-2 px-8 F-Family ">
            10TH SEPTEMBER 2024 12 PM - 1PM CET
          </p>
          <Link to="/landing-form">
            <button className="mainButton">SAVE YOUR SPOT</button>
          </Link>
        </div>
      </div>
      <div />
      {/********************************************second block ****************************************** */}
      <div className="secondary mb-5">
        <picture className="orangeTopContainer">
          <source media="(min-width: 768px)" srcSet={orangeTopLarge} />
          <source media="(max-width: 767px)" srcSet={orangeTopSmall} />
          <img src={orangeTopLarge} alt="Time Line" className="orangeTop" />
        </picture>

        <div className="webinarInfo">
          <h1 className="secondaryTitle px-8 md:px-4">Webinar starts in</h1>
          <div className="d-flex mb-5 mt-5 round-container">
            <div className="d-flex flex-column ">
              <div className="round">
                <h1 className="F-Family">{timeLeft.days} </h1>
              </div>
              <div>
                <h5 className="F-Family"> DAYS </h5>
              </div>
            </div>

            <div className="d-flex flex-column">
              <div className="round">
                <h1 className="F-Family">{timeLeft.hours} </h1>
              </div>
              <div>
                <h5 className="F-Family"> HOURS </h5>
              </div>
            </div>

            <div className="d-flex flex-column ">
              <div className="round ">
                <h1 className="F-Family">{timeLeft.minutes} </h1>
              </div>
              <div>
                <h5 className="F-Family"> MINUTES </h5>
              </div>
            </div>
          </div>

          <Link to="/landing-form">
            <button className="mainButton">SAVE YOUR SPOT</button>
          </Link>
        </div>
      </div>
      {/************************************************* feeling******************************************** */}

      <div className="flex flex-col px-4 justify-center md:flex-row md:justify-between lg:py-8">
        <div className="flex flex-col ml-4 mr-4 md:ml-8  ">
          <h1 className="text-5xl mb-4 secondaryTitle ">Are you feeling:</h1>
          <div className="mb-4 lg:pb-6">
            <img
              src={iconPoint}
              className="w-12 md:w-20 lg:w-24"
              alt="Exhausted"
            />
            <p className="mt-[-30px] md:mt-[-50px] ml-[50px] lg:mt-[-60px] F-Family ">
              <strong>EXHAUSTED</strong> No matter how much you sleep?
            </p>
          </div>

          <div className="mb-4 lg:pb-6">
            <img
              src={iconPoint}
              className="w-12 md:w-20 lg:w-24"
              alt="Foggy-headed"
            />
            <p className="mt-[-30px]  md:mt-[-50px] ml-[50px] lg:mt-[-60px] F-Family">
              <strong>FOGGY-HEADED</strong> and unable to focus?
            </p>
          </div>
          <div className="mb-4 lg:pb-6">
            <img
              src={iconPoint}
              className="w-12 md:w-20 lg:w-24"
              alt="Hungry"
            />
            <p className="mt-[-30px] md:mt-[-50px] ml-[50px] lg:mt-[-60px]  F-Family">
              <strong>HUNGRY</strong> Shortly after eating?
            </p>
          </div>
          <div className="mb-4 lg:pb-6">
            <img
              src={iconPoint}
              className="w-12 md:w-20 lg:w-24"
              alt="Anxious"
            />
            <p className="mt-[-30px] md:mt-[-50px] ml-[50px] lg:mt-[-60px] F-Family">
              <strong>ANXIOUS</strong> And on edge?
            </p>
          </div>

          <div className="mb-5">
            <img
              src={iconPoint}
              className="w-12 md:w-20 lg:w-24"
              alt="Craving Sugar"
            />
            <p className="mt-[-30px]  md:mt-[-50px] ml-[50px] lg:mt-[-60px] F-Family">
              <strong>CRAVING SUGAR</strong> All the time?
            </p>
          </div>
        </div>

        <div className="image-container justify-center">
          <img src={scarfWomanImg} alt="Scarf Woman" />
        </div>
      </div>

      {/*************************************************dive into******************************************** */}

      <div className="flex flex-col  justify-center mt-4">
        <picture className="TimeLinePIcture">
          <source media="(min-width: 768px)" srcSet={timeline1} />
          <source media="(max-width: 767px)" srcSet={timeline3Small} />
          <img
            className=" w-screen  mb-4"
            src={timeline1}
            alt="time Line Division"
          />
        </picture>
        <div className="lg:mx-4">
          <div className="flex mb-4">
            <h2 className="secondaryTitle px-4 lg:px-8">
              What we´ll dive into:{' '}
            </h2>
          </div>

          <div className="flex-col md:columns-2 gap-4  mt-5 mb-5 px-4 lg:px-8 ">
            <div className="mb-4 md:mb-8 lg:pb-8">
              <img
                src={iconPoint1}
                className="w-12 md:w-14 lg:w-20 md:mb-8  "
                alt="Icon 1"
              />
              <div className="mt-[-35px] ml-[60px] md:mt-[-90px] lg:mt-[-100px] md:ml-[100px] lg:ml-[100px] text-base lg:text-lg F-Family">
                <strong>UNDERSTANDING THE SYMPTOMS:</strong>
                <p className="md:pr-8">
                  Explore the causes of fatigue, brain-fog, anxiety, sleep
                  issues, and sugar cravings.
                </p>
              </div>
            </div>

            <div className="mb-4 md:mb-8 lg:pb-8">
              <img
                src={iconPoint1}
                className="w-12 md:w-14 lg:w-20 md:mb-8 "
                alt="Icon 2"
              />
              <div className="mt-[-35px] ml-[60px] md:mt-[-90px] lg:mt-[-100px] md:ml-[100px] lg:ml-[100px]  text-base lg:text-lg F-Family">
                <strong>PRACTICAL TIPS:</strong>
                <p className="md:pr-8">
                  Gain simple, everyday strategies to combat brain fog, improve
                  focus, and manage and reduce symptoms.
                </p>
              </div>
            </div>

            <div className="mb-4 md:mb-8 lg:pb-8">
              <img
                src={iconPoint1}
                className="w-12 md:w-14 lg:w-20 md:mb-8 "
                alt="Icon 3"
              />
              <div className="mt-[-35px] ml-[60px] md:mt-[-90px] lg:mt-[-100px] md:ml-[100px] lg:ml-[100px] text-base lg:text-lg F-Family">
                <strong>ROOT CAUSES AND SOLUTIONS:</strong>
                <p className="md:pr-8">
                  Identify what´s contributing to your anxiety and sleep
                  problems and get actionable solutions to start feeling better.
                </p>
              </div>
            </div>

            <div className="mb-4 md:mb-8 lg:pb-8">
              <img
                src={iconPoint1}
                className="w-12 md:w-14 lg:w-20 md:mb-8 "
                alt="Icon 4"
              />
              <div className="mt-[-35px] ml-[60px] md:mt-[-90px] lg:mt-[-100px] md:ml-[100px] lg:ml-[100px] text-base lg:text-lg F-Family">
                <strong>HORMONAL SHIFTS:</strong>
                <p className="md:pr-8">
                  Learn how hormonal changes affect these symptoms and uncover
                  what´s really going on in your body.
                </p>
              </div>
            </div>

            <div className="mb-4 md:mb-8 lg:pb-8">
              <img
                src={iconPoint1}
                className="w-12 md:w-14 lg:w-20 md:mb-8 "
                alt="Icon 5"
              />
              <div className="mt-[-35px] ml-[60px] md:mt-[-90px] lg:mt-[-100px] md:ml-[100px] lg:ml-[100px]  text-base lg:text-lg F-Family F-Family">
                <strong>BALANCING HORMONES:</strong>
                <p className="md:pr-8  ">
                  Discover ways to balance your hormones and curb your sugar
                  craving.
                </p>
              </div>
            </div>

            <div className="mb-4 md:mb-8 lg:pb-8 ">
              <img
                src={iconPoint1}
                className="w-12 md:w-14 lg:w-20 md:mb-8 "
                alt="Icon 6"
              />
              <div className="mt-[-35px] ml-[60px] md:mt-[-90px] lg:mt-[-100px] md:ml-[100px] lg:ml-[100px] text-base lg:text-lg F-Family">
                <strong>COMMUNITY SUPPORT:</strong>
                <p className="md:pr-8">
                  Connect with other women facing similar challenges and share
                  experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-5 mt-5">
            <Link to="/landing-form">
              <button className="mainButton">SAVE YOUR SPOT</button>
            </Link>
          </div>
        </div>

        {/**+******************************************Agniezka******************************************+ */}
        <div className="">
          <picture className="TimeLinePIcture ">
            <source media="(min-width: 768px)" srcSet={timeline2} />
            <source media="(max-width: 767px)" srcSet={timeline2Small} />
            <img
              src={timeline2}
              alt="time Line Division"
              className="mb-4 rounded-[32px] md:rounded-tr-[32px] md:rounded-br-[32px] w-screen"
            />
          </picture>

          <div className="flex flex-col justify-between lg:flex-row mx-4 mb-4 gap-5">
            <div className="agnieszkaImage lg:w-1/2 order-[2] lg:order-[1] lg:ml-[-24px]">
              <img
                src={Agniezka}
                alt="Agnieszka"
                className="max-h-[500px] lg:min-h-[100%] w-full object-cover rounded-[32px] lg:rounded-s-none"
                style={{ objectPosition: '0% 40%' }}
              />
            </div>

            <div className="lg:w-1/2 xl:px-[3%] order-1 lg:order-2">
              <p className="secondaryTitle mb-4  ml-0 F-Family text-[47px] xl:text-[56px]">
                Meet our speaker
              </p>
              <p className=" mb-4 secondaryText text-xl xl:text-2xl  font-semibold">
                AGNIESZKA FRONIA
              </p>
              <p className="text-base lg:text-lg 2xl:text-xl mb-2 xl:leading-relaxed F-Family">
                Hi, I am Agnieszka and I am a certified women’s health expert
                with a passion for helping others.
              </p>
              <p className="text-base lg:text-lg 2xl:text-xl mb-2 xl:leading-relaxed F-Family">
                For many years, I struggled with hormonal health issues such as
                acne, hair loss, weight gain, absence of periods, insomnia, and
                high levels of stress and anxiety. Feeling confused, tired, and
                often ignored by many doctors, I decided to take control of my
                health.
              </p>
              <p className="text-base lg:text-lg 2xl:text-xl mb-2 xl:leading-relaxed F-Family">
                Since 2015, I’ve traveled across South America and India,
                exploring various methods to resolve my symptoms. Along the way,
                I became a certified yoga, meditation, and breath-work teacher.
              </p>
              <p className="text-base lg:text-lg 2xl:text-xl mb-2 xl:leading-relaxed F-Family">
                Additionally, I earned an MSc in Psychological Medicine and
                Mental Health from London Metropolitan University, focusing on
                hormones, inflammation, and gut health.
              </p>
              <p className="text-base lg:text-lg 2xl:text-xl mb-2 xl:leading-relaxed F-Family">
                My goal is to help you navigate your hormonal, physical,
                psychological, and emotional health with ease.
              </p>
              <p className="text-base lg:text-lg  2xl:text-xl mb-2 xl:leading-relaxed F-Family">
                Join my upcoming webinar so we can get to know each other better
                and gain the knowledge you need to take control of your health.
              </p>
            </div>
          </div>
        </div>

        {/**+******************************************carrousel******************************************+ */}
        <div className="">
          <picture className="TimeLinePIcture mt-3 mb-3">
            <source media="(min-width: 768px)" srcSet={timeline3} />
            <source media="(max-width: 767px)" srcSet={timeline3Small} />
            <img
              src={timeline3}
              alt="time Line Division"
              className="w-screen  mb-4"
            />
          </picture>

          <div className="flex-col md:columns-2">
            <div className="m-4 md:mr-5  md:px-8 ">
              <h2 className="secondaryTitle mb-4">What is Oviva Care?</h2>
              <p className="text-base lg:text-xl  lg:leading-relaxed mb-4  tracking-wider F-Family ">
                Our mission is to create a future where every woman has the
                Knowledge, Resources, and Support to live her best life.
                Pellentesque non tincidunt eget molestie libero. Aenean ut quis
                adipiscing amet. Sociis imperdiet luctus eget sagittis nisl. Sed
                ut lectus amet nulla lectus vitae. Mattis volutpat natoque ac
                quis vestibulum.
              </p>
              <h3 className="text-2xl  mb-4 tracking-widest font-bold F-Family">
                TO LIVE HER BEST LIFE!
              </h3>
            </div>

            <div className=" carrousel px-4 ">
              <Slider {...settings}>
                <div className="carrouselImg  md:mt-5  relative">
                  <img src={LandingSlice12} alt="Slide 1" />
                  <h1
                    className="F-Family absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-bold text-4xl lg:text-6xl z-10"
                    
                  >
                    SUPPORT
                  </h1>
                </div>
                <div className="carrouselImg  md:mt-5 relative ">
                  <img src={LandingSlice2} alt="Slide 2" />
                  <h1 className="F-Family absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-bold text-4xl  lg:text-6xl z-10">
                    RESOURCES
                  </h1>
                </div>
                <div className="carrouselImg  md:mt-5 relative ">
                  <img src={LandingSlice3} alt="Slide 3" />
                  <h1 className="F-Family absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-bold text-4xl lg:text-6xl z-10">
                    AWARENESS
                  </h1>
                </div>
              </Slider>
            </div>
          </div>
          {/**+******************************************comments******************************************+ */}
          <div className="mt-4  ">
            <picture className="TimeLinePIcture">
              <source media="(min-width: 768px)" srcSet={timeline4} />
              <source media="(max-width: 767px)" srcSet={timeline2Small} />
              <img
                src={timeline4}
                alt="time Line Division"
                className=" w-screen  mb-4"
              />
            </picture>

            <h2 className="secondaryTitle ms-4  mb-[30px] md:mb-[100px]   ">
              What people are saying
            </h2>

            <div className="film-strip-container overflow-hidden relative pt-5">
              <div className="comments flex flex-wrap gap-4 justify-center mt-5 mb-[200px]">
                <div className="film-strip flex flex-col sm:flex-row animate-scroll gap-12 sm:gap-4">
                  <div className="comment  relative p-4 mb-5">
                    <div className="flex justify-center mb-4">
                      <img
                        className="roundImage rounded-full absolute"
                        src={Opinion3}
                        alt="User Opinion 1"
                      />
                    </div>
                    <div className="mt-[80px] md:mt-[120px] flex justify-center">
                      <QuoteIcon />
                    </div>
                    <p className="text-base  px-3 pt-0 mt-4 text-center leading-7 F-Family">
                      Very resonating session with a good balance for theory and
                      practice. Very practical and easy to integrate.
                      <br /> I think the hormonal world is a very unknown and
                      influential world, so I believe more webinars like this
                      are needed more often.
                    </p>
                    <p className="commentName p-4 text-center">LAURA</p>
                  </div>

                  <div className="comment relative p-4 mb-5">
                    <div className="flex justify-center mb-4">
                      <img
                        className="roundImage rounded-full absolute"
                        src={Opinion1}
                        alt="User Opinion 1"
                      />
                    </div>
                    <div className="mt-[80px] md:mt-[120px] flex justify-center">
                      <QuoteIcon />
                    </div>
                    <p className="text-base  px-3 pt-0 mt-4 text-center leading-7 F-Family">
                      In Agnieszka I found a professional and at the same time
                      human curiosity - devoid of any form of judgment. NO ANY
                      PRE-SET PLAN. Agnieszka supported me through a customized
                      program based on my symptoms. I learnt to take care of my
                      thoughts, my spaces, my daily routine and all of this is
                      having such a profound impact on my whole life!
                    </p>
                    <p className="commentName p-4 text-center">MANUELA</p>
                  </div>

                  <div className="comment relative p-4 mb-5">
                    <div className="flex justify-center mb-4">
                      <img
                        className="roundImage rounded-full absolute"
                        src={Opinion2}
                        alt="User Opinion 2"
                      />
                    </div>
                    <div className="mt-[80px] md:mt-[120px] flex justify-center">
                      <QuoteIcon />
                    </div>
                    <p className="text-base  px-3 pt-0 mt-4 text-center leading-7 F-Family">
                      I was diagnosed with PCOS a few years ago. It was
                      Agnieszka who drew my attention to test myself in this
                      direction when I told her how I felt and what my symptoms
                      were. Thanks to her, I am definitely more aware of the
                      direction in which I should be going. I am only at the
                      beginning of this road, because I have recently decided to
                      stop taking birth control. I believe that with her help I
                      will achieve my health goal.
                    </p>
                    <p className="commentName p-4 text-center">PATRYCJA</p>
                  </div>

                  {/**Duplicado pra completar el tiempo de circulado */}
                  <div className="comment  relative p-4 mb-5">
                    <div className="flex justify-center mb-4">
                      <img
                        className="roundImage rounded-full absolute"
                        src={Opinion3}
                        alt="User Opinion 1"
                      />
                    </div>
                    <div className="mt-[80px] md:mt-[120px] flex justify-center">
                      <QuoteIcon />
                    </div>
                    <p className="text-base longText px-3 pt-0 mt-4 text-center leading-7 F-Family">
                      Very resonating session with a good balance for theory and
                      practice. Very practical and easy to integrate.
                      <br /> I think the hormonal world is a very unknown and
                      influential world, so I believe more webinars like this
                      are needed more often.
                    </p>
                    <p className="commentName p-4 text-center">LAURA</p>
                  </div>

                  <div className="comment relative p-4 mb-5">
                    <div className="flex justify-center mb-4">
                      <img
                        className="roundImage rounded-full absolute"
                        src={Opinion1}
                        alt="User Opinion 1"
                      />
                    </div>
                    <div className="mt-[80px] md:mt-[120px] flex justify-center">
                      <QuoteIcon />
                    </div>
                    <p className="text-base longText px-3 pt-0 mt-4 text-center leading-7 F-Family">
                      In Agnieszka I found a professional and at the same time
                      human curiosity - devoid of any form of judgment. NO ANY
                      PRE-SET PLAN. Agnieszka supported me through a customized
                      program based on my symptoms. I learnt to take care of my
                      thoughts, my spaces, my daily routine and all of this is
                      having such a profound impact on my whole life!
                    </p>
                    <p className="commentName p-4 text-center">MANUELA</p>
                  </div>

                  <div className="comment relative p-4 mb-5">
                    <div className="flex justify-center mb-4">
                      <img
                        className="roundImage rounded-full absolute"
                        src={Opinion2}
                        alt="User Opinion 2"
                      />
                    </div>
                    <div className="mt-[80px] md:mt-[120px] flex justify-center">
                      <QuoteIcon />
                    </div>
                    <p className=" text-base longText px-3  pt-0 mt-4 text-center leading-7 F-Family">
                      I was diagnosed with PCOS a few years ago. It was
                      Agnieszka who drew my attention to test myself in this
                      direction when I told her how I felt and what my symptoms
                      were. Thanks to her, I am definitely more aware of the
                      direction in which I should be going. I am only at the
                      beginning of this road, because I have recently decided to
                      stop taking birth control. I believe that with her help I
                      will achieve my health goal.
                    </p>
                    <p className="commentName p-4 text-center">PATRYCJA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/****************************************bottom section*************************************** */}
          <div className="relative orangeBottom w-screen">
            <picture>
              <source media="(min-width: 768px)" srcSet={orangeBottomLarge} />
              <source media="(max-width: 767px)" srcSet={orangeBottomSmall} />
              <img
                src={orangeBottomLarge}
                alt="Orange background"
                className="orangeBottom w-screen max-h-[730px]"
              />
            </picture>

            <div className="absolute w-full inset-y-72 lg:inset-y-40  md:inset-0  flex flex-col  md:flex-row">
              <div className="relative flex-shrink-0 md:w-1/2 flex items-center md:items-end justify-center">
                <img
                  className="bottom-img absolute bottom-[0px] lg:left-[30px] lg:bottom-[-160px] object-cover min-w-[342px] scale-x-[-1]  "
                  src={ImageFooterSin}
                  alt="bottom image"
                />
              </div>

              <div className="bottom-details md:w-1/2 flex flex-col justify-center items-center text-center mt-8 lg:mt-0 md:text-left lg:mx-12 px-10 md:px-8">
                <h3 className="text-xl lg:text-[41px]">SIGN UP NOW</h3>
                <p className="F-Family text-lg xl:text-xl">
                  WEBINAR DAY 10TH SEPTEMBER 2024
                </p>
                <h2 className="F-Family-2 text-2xl lg:text-3xl xl:text-[41px] line">
                  Boost Your Mood & Get Back Your Energy
                </h2>
                <Link to="/landing-form">
                  <button className="mainButton bottomButton mt-4 md:mt-0">
                    SAVE YOUR SPOT
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/*****************************************footer*********************************************** */}

          <div className="flex flex-col  p-4">
            <div className="flex justify-between md:justify-around mb-3">
              <div className="flex gap-x-5 text-2xl">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
              </div>

              <div>
                <h5>
                  <strong className="underline decoration-solid  ">
                    CONTACT US{' '}
                  </strong>
                </h5>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center md:justify-around mb-3">
              <div className="flex  md:flex-row gap-4 md:gap-8 mb-3 mt-4 md:mt-0">
                <p className="text-[14px] md:text-base">Privacy</p>
                <p className="text-[14px] md:text-base">Terms and condition</p>
                <p className="text-[14px] md:text-base">Cookies</p>
              </div>

              <div className="mt-4 md:mt-0 text-[14px] md:text-base ">
                <p>@ all rights reserved to Oviva Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
