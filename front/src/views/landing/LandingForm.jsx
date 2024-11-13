import '@fontsource/fahkwang';
import '@fontsource/montserrat';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import addWebinarData from '../../apis/addWebinarData';
import getActivityDate from '../../apis/getActivityDate';
import headerImage from '../../assets/images/LandingHero1.png';
import Logo from '../../assets/images/logotype_fullcolor_rgb 1.png';
import './landingForm.css';

const LandingForm = () => {
  const [activityDate, setActivityDate] = useState({});
  const [ errorMessage, setErrorMessage ]= useState("")
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    age: '',
    mainStruggle: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActivityDate = async () => {
      try {
        const dateData = await getActivityDate();
        const parseDate = new Date(dateData.activityDate);
        const day = parseDate.getDay();
        const month = parseDate.getMonth() + 1;
        const year = parseDate.getFullYear();

        setActivityDate({ day, month, year });
      } catch (error) {
        console.error('Error fetching activity date:', error);
      }
    };
    fetchActivityDate();
  }, []);

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    try {
      const successful = await addWebinarData(formData);
      if (successful) {
        navigate('/successful-registry');
      }
    } catch (error) {
      console.error('Error adding webinar data:', error);
      if(error.response && error.response.status === 409){
        setErrorMessage("This email has already been used, please use another one")
      } else{ setErrorMessage(" An error has occurred, please try later/ or use another email")}
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'TH';
    switch (day % 10) {
      case 1:
        return 'ST';
      case 2:
        return 'ND';
      case 3:
        return 'RD';
      default:
        return 'TH';
    }
  };
  const getMonthName = (month) => {
    const monthNames = [
      'JANUARY',
      'FEBRUARY',
      'MARCH',
      'APRIL',
      'MAY',
      'JUNE',
      'JULY',
      'AUGUST',
      'SEPTEMBER',
      'OCTOBER',
      'NOVEMBER',
      'DECEMBER',
    ];
    return monthNames[month - 1];
  };

  const day = activityDate.day
    ? `${activityDate.day}${getOrdinalSuffix(activityDate.day)}`
    : '';
  const month = activityDate.month ? getMonthName(activityDate.month) : '';
  const year = activityDate.year || '';

  return (
    <div className="container-fluid main2 relative h-screen ">
      <img
        className="hero2 w-vw  h-screen object-cover"
        style={{ objectPosition: '20% 0%' }}
        src={headerImage}
        alt="Hero"
      />
      <img className="logo img-fluid" src={Logo} alt="Logo" />

      <div className=" absolute py-[7%]  px-[7%] sm:py-[10%]  md:py-[5%]  max-w-2xl mx-4 my-4  lg:m-4 align-middle  rounded-[32px]  top-[10%] sm:top-[12%] bottom-[12%]flex flex-wrap overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-white/40 to-white/30">
        <h4 className=" mb-3 lg:mb-5">
          {day} {month} {year} 12 PM - 1 PM CET
        </h4>

        <form onSubmit={handleSubmitButton} className="form ">
        
          {/* Primera fila: Name y Last Name */}
          <div className="row">
            <div className="col-md-6 mb-2 lg:mb-3">
              <label className=" text-[13px] lg:text-base" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="text-[14px] lg:text-base form-control"
                required
              />
            </div>

            <div className="col-md-6 mb-2 lg:mb-3">
              <label className=" text-[13px] lg:text-base" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className=" text-[14px] lg:text-base form-control"
                required
              />
            </div>
          </div>

          {/* Segunda fila: Email ocupa toda la fila */}
          <div className="row">
            <div className="col-12 full-width-email mb-2 lg:mb-3">
              <label className=" text-[13px] lg:text-base" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className=" text-[14px] lg:text-base form-control "
                required
              />
            </div>
          </div>

          {/* Tercera fila: Age y Main Struggle */}
          <div className="row ">
            <div className="col-md-6 mb-2 lg:mb-3">
              <label className=" text-[13px] lg:text-base" htmlFor="age">
                Age
              </label>
              <select
                name="age"
                id="age"
                value={formData.age}
                onChange={handleInputChange}
                className=" text-[14px] lg:text-base form-select"
                required
              >
                <option value="" disabled>
                  Select Age
                </option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="55-64">55-64</option>
                <option value="65+">65+</option>
              </select>
            </div>

            <div className="col-md-6 mb-2 lg:mb-3">
              <label
                className=" text-[13px] lg:text-base"
                htmlFor="mainStruggle"
              >
                Main Struggle
              </label>
              <select
                name="mainStruggle"
                id="mainStruggle"
                value={formData.mainStruggle}
                onChange={handleInputChange}
                className="text-[14px] lg:text-base form-select"
                required
              >
                <option value="" disabled>
                  Main Struggle
                </option>
                <option value="pain">Pain</option>
                <option value="pregnant">Getting pregnant</option>
                <option value="focus">Focus</option>
                <option value="anxiety">Anxious</option>
                <option value="acne">Acne</option>
                <option value="sleep">Sleep</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <h5 className="text-lg sm:text-3xl md:text-4xl font-bold text-center tracking-wider mb-2 mt-2 lg:order-first">
            Boost Your Mood & Get Back Your Energy
          </h5>
          {/* Botón de enviar */}
          <button
            type="submit"
            className="mainButton mt-2 sm:mt-4 lg:mt-5 self-center"
          >
            SAVE YOUR SPOT
          </button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default LandingForm;
