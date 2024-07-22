import React from 'react'
import home_panels from "../assets/images/home_panels.jpg";
import home_family_run from "../assets/images/home_family_run.jpg";
import home_installers from "../assets/images/home_installers.jpg";
import home_junior_gardener from "../assets/images/home_junior_gardener.jpg";
import { FaSearch, FaSolarPanel, FaShieldAlt, FaLightbulb, FaBahai, FaUserTie, FaChevronCircleRight, FaTree, FaCar  } from "react-icons/fa";

export default function Home() {
  return (
    <div className='relative bodyContainer'> 
    {/*   mb-28  */}
      <div className="items-center top-0 p-[1em] relative shadow-sm bg-[50%]  justify-center
       flex  box-border min-h-screen
       ">
        {/* overflow-hidden   min-h-[430px] */}
        {/* border-b shadow-sm sticky top-0 z-40 */}
        <span
          className="bottom-[0] left-[0] opacity-[.5] absolute right-[0] top-[0]
            w-full object-cover bg-[#408bc0] z-10 min-w-[100vw] 
            [clip-path:polygon(100%_0%,_0%_0%,_0%_78%,_6%_85%,_10%_88%,_23%_91%,_86%_100%,_78%_100%,_85%_90%,_90%_82%,_100%_65%)]
            rounded-tr-none rounded-bl-[35%] rounded-br-[30%]"
        ></span>
        {/* [clip-path:polygon(100%_0%,_0%_0%,_0%_76%,_5%_88%,_10%_92%,_16%_94%,_71%_100%,_80%_99%,_85%_96%,_96%_84%,_100%_78%)] */}
        {/* bottom-[12.5%] left-[0] opacity-[.5] absolute right-[0] top-[0] z-10
          w-full object-cover bg-[#408bc0]
          [clip-path:circle(80%_at_53%_33%)] rounded-tr-none rounded-bl-[35%] rounded-br-[30%] */}
        <img
          src={home_panels}
          className="border-[none] bottom-[0] [box-shadow:none] h-full left-[0] m-0 max-h-[none] 
          max-w-none object-cover outline-[none] p-0 absolute right-[0] top-[0] w-full
          opacity-100 z-0 min-w-[100vw] 
          [clip-path:polygon(100%_0%,_0%_0%,_0%_78%,_6%_85%,_10%_88%,_23%_91%,_86%_100%,_78%_100%,_85%_90%,_90%_82%,_100%_65%)]
          rounded-tr-none rounded-bl-[35%] rounded-br-[30%]"
        />
        {/*
         w-full object-cover relative overflow-hidden center cover no-repeat
            border-[none] [box-shadow:none] h-full left-[0] m-0 max-h-[none] max-w-none outline-[none] p-0 absolute right-[0] top-[0] bottom-[0] 
            [clip-path:circle(80%_at_53%_33%)] rounded-tr-none rounded-bl-[35%] rounded-br-[30%] z-0 */}
        {/* <img src={home_panels} className='relative w-full overflow-hidden center cover no-repeat'/> */}
        {/* <header className={`w-full flex justify-between items-center pl-12 pr-0 mx-auto top-[3%] fixed z-50
             ${scrolled && 'bg-[#408bc0] rounded-tl-[0] rounded-br-[35%] rounded-tr-[0] rounded-bl-[35%] fixed left-[0] right-[0] top-[0] [transition:all_.4s_ease-in-out]' }`}> */}

        <div className="relative z-40 !w-[1140px]">
          {/* relative !w-[1140px] items-center bg-[50%] box-border flex justify-center overflow-hidden p-[1em] z-20 */}
          <div className="max-w-[66.666667%] ">
            {/* w-full md:w-2/3 */}
            <h3 className="text-white text-[2.6rem] font-light leading-[1.2] mb-[.5rem]">Energy with Integrity®. Since 1994.</h3>
            <p className="text-white mb-4 text-[16px]">
              Solar energy can lower your cost of living, protect the
              environment and improve your quality of life. Take control of your
              electric bill with a no-cost solar installation today.
            </p>
            <a
              className="bg-[#2ecc71] border-[#2ecc71] rounded-[100px] px-[20px] py-[6px] [transition:all_.5s_ease]
              text-white inline-flex font-normal text-center align-middle 
               border-[1px] border-[solid] border-[transparent] text-[1rem] leading-normal no-underline cursor-pointer
               hover:text-white hover:bg-[#408bc0] hover:border-[#408bc0] hover:no-underline"
              onClick="dataLayer.push({'event': 'Go Solar'});"
              href="https://www.trinity-solar.com/go-solar/"
            >
              {/* bg-[#2ecc71] border-[#2ecc71] rounded-[100px] px-[20px] py-[6px] [transition:all_.5s_ease] text-white */}
              <FaSolarPanel className="font-black text-[x-large] p-[0.1rem]" /> GO SOLAR
            </a>
          </div>
        </div>
      </div>


      <div className="mr-auto ml-auto text-center mt-5 mb-5 p-2 ">
        <h3 className="text-dark mt-3 font-light text-[2.1rem] mb-3 leading-[1.2]">Discover the benefits of solar in your area.</h3>
        <form className="flex [flex-flow:row_wrap] items-center mb-5" action="/get-solar" method="GET">
          <div className="mt-4 relative w-[22.85rem] m-auto">
            <input className="rounded-[100px] bg-[#eef3f7] border-[0] px-[20px] py-[10px] 
            w-[21.42rem] outline-[0] h-[3.07rem]" maxLength="5" id="zip" name="zip"
              pattern="[0-9]{5}" required="" type="number" placeholder="Enter Zip Code"
              aria-required="true" aria-invalid="false" />
            <button className="px-[22px] py-[10px] bg-[#2ecc71] border-[1px] border-[solid] border-[#2ecc71] 
            rounded-[100px] absolute right-[0] text-[#fff] leading-[1.57rem] h-[3.07rem] cursor-pointer inline-flex
             [transition:.4s] font-medium" type="submit">
              <FaSearch className='m-[5px]' /> Search
            </button>
          </div>
        </form>
      </div>


      <div className='relative w-full min-h-[590px] px-0 py-[120px] flex justify-center items-center 
      bg-cover bg-no-repeat bg-[50%] custom-mask'>
        <span aria-hidden="true" className="bg-[#000] bottom-[0] left-[0] opacity-[.5] absolute right-[0] top-[0]"></span>
        <img
          decoding="async"
          width="1119"
          height="590"
          className="border-[none] bottom-[0] [box-shadow:none] h-full left-[0] m-0 max-h-[none] max-w-none 
        object-cover outline-[none] p-0 absolute right-[0] top-[0] w-full z-0"
          alt="home_family_run"
          src={home_family_run}
          data-object-fit="cover"
          sizes="(max-width: 1119px) 100vw, 1119px"
        />
        <div className="relative w-[1140px] z-10">
          <h3 className="text-center text-white font-light text-[2.1rem] leading-[1.2] mb-[.5rem]">Trinity Makes Solar Simple.</h3>
          <p className="text-center m-auto text-white max-w-[75%] relative w-full pr-[15px] pl-[15px]">
            From designing your system to completing permits to installing your panels with precision,
            Trinity is here for you every step of the way.
            Trust us to get the job done right so you have more time to focus on what matters most.
          </p>
          <p className="text-center mt-0 mb-4">
            <a href="https://www.trinity-solar.com/go-solar/"
              className="mt-4 bg-[#2ecc71] border-[#2ecc71] rounded-[100px] px-[20px] py-[6px] [transition:all_.5s_ease]
            text-white inline-flex font-normal text-center align-middle 
             border-[1px] border-[solid] border-[transparent] text-[1rem] leading-normal no-underline cursor-pointer
             hover:text-white hover:bg-[#408bc0] hover:border-[#408bc0] hover:no-underline"
              onclick="dataLayer.push({'event': 'Go Solar'});">
              <FaSolarPanel className="font-black text-[x-large] p-[0.1rem]" /> GO SOLAR</a>


          </p>
        </div>
      </div>


      <section className="relative max-w-full mt-5 mb-5 pt-5  border-none mr-0 ml-0 " >
        <div className="relative mr-auto ml-auto max-w-[1140px]">
          <div className="box-border flex flex-wrap gap-[2em] mb-[1.75em] items-stretch">
            <div className="relative bg-[#efefef] transition duration-150 ease-in-out p-4 pt-5 rounded-xl basis-0 grow 
          hover:rounded-[5rem] hover:transition-all delay-200 group">
              <div className="text-center absolute bg-[#2ecc71] w-[95px] h-[95px] rounded-[100%] text-white 
            -top-[30px] left-2/4 -translate-x-1/2 translate-y-[0] right-[0] leading-[100px] text-[50px] 
            [transition:all_.5s_ease] group-hover:top-0">
                <FaShieldAlt className='text-center absolute left-[1.4rem] top-[1.4rem] hover:scale-125 ' />
              </div>
              <h3 className="text-2xl text-center font-light leading-[1.2] mb-3 pt-12 mt-5"> Reliable </h3>
              <p className="text-center text-sm mb-4 leading-6">Trust Trinity to&nbsp;be there for you and your family. Trinity’s been in business since 1994. With many&nbsp;years of experience, we’re equipped to provide you with high-quality installations and top-notch service. </p>
            </div>

            <div className="relative bg-[#efefef] transition duration-150 ease-in-out p-4 pt-5 rounded-xl basis-0 grow 
          hover:rounded-[5rem] hover:transition-all delay-200 group">
              <div className="text-center absolute bg-[#2ecc71] w-[95px] h-[95px] rounded-[100%] text-white 
            -top-[30px] left-2/4 -translate-x-1/2 translate-y-[0] right-[0] leading-[100px] text-[50px] 
            [transition:all_.5s_ease] group-hover:top-0"><FaLightbulb className='text-center absolute left-[1.4rem] top-[1.4rem]' /></div>
              <h3 className="text-2xl text-center font-light leading-[1.2] mb-3 pt-12 mt-5"> Impactful </h3>
              <p className="text-center text-sm mb-4 leading-6"> Over 100,000 families have made a positive difference by switching to solar with Trinity, the largest privately-owned residential solar installer in the nation. </p>
            </div>

            <div className="relative bg-[#efefef] transition duration-150 ease-in-out p-4 pt-5 rounded-xl basis-0 grow 
          hover:rounded-[5rem] hover:transition-all delay-200 group">
              <div className="text-center absolute bg-[#2ecc71] w-[95px] h-[95px] rounded-[100%] text-white 
                  -top-[30px] left-2/4 -translate-x-1/2 translate-y-[0] right-[0] leading-[100px] text-[50px]
                  [transition:all_.5s_ease] group-hover:top-0"><FaBahai className='text-center absolute left-[1.4rem] top-[1.4rem]' /></div>
              <h3 className="text-2xl text-center font-light leading-[1.2] mb-3 pt-12 mt-5"> Sustainable*** </h3>
              <p className="text-center text-sm mb-4 leading-6"> Solar is a financially and environmentally sustainable energy source. You can stabilize your electric costs and protect the planet by harnessing the sun’s rays.&nbsp; </p>
            </div>

          </div>
        </div>
      </section>





      <div className='relative w-full min-h-[590px] px-0 py-[120px] flex justify-center items-center 
      bg-cover bg-no-repeat bg-[50%] custom-mask'>
        <span aria-hidden="true" className="bg-[#000] bottom-[0] left-[0] opacity-[.5] absolute right-[0] top-[0]"></span>
        <img
          decoding="async"
          width="1119"
          height="590"
          className="border-[none] bottom-[0] [box-shadow:none] h-full left-[0] m-0 max-h-[none] max-w-none 
        object-cover outline-[none] p-0 absolute right-[0] top-[0] w-full z-0"
          alt="home_installers"
          src={home_installers}
          data-object-fit="cover"
          sizes="(max-width: 1119px) 100vw, 1119px"
        />
        <div className="relative w-[1140px] z-10">
          <h3 className="text-center text-white font-light text-[2.1rem] leading-[1.2] mb-[.5rem]">
            An Established Name in Solar.</h3>
          <p className="text-center m-auto text-white max-w-[75%] relative w-full pr-[15px] pl-[15px]">
            Through many years of hard work, we’ve proven ourselves as leaders in the industry.
            The Trinity family has grown to more than 2,700 employees who make up our in-house customer support,
            construction, electrical and service teams.
            Count on us to make solar as simple and seamless as possible for you.
          </p>
          <p className="text-center mt-0 mb-4">
            <a href="https://www.trinity-solar.com/go-solar/"
              className="mt-4 bg-[#2ecc71] border-[#2ecc71] rounded-[100px] px-[20px] py-[6px] [transition:all_.5s_ease]
            text-white inline-flex font-normal text-center align-middle 
             border-[1px] border-[solid] border-[transparent] text-[1rem] leading-normal no-underline cursor-pointer
             hover:text-white hover:bg-[#408bc0] hover:border-[#408bc0] hover:no-underline"
              onclick="dataLayer.push({'event': 'About Us'}); ">
              <FaUserTie className="font-black text-[x-large] p-[0.1rem]" /> ABOUT US</a>
          </p>
        </div>
      </div>




      <section className="relative block px-[15px] py-[20px] max-w-full mt-5 mb-5 pt-5 pb-5">
      <div className="max-w-[1140px] relative z-20 mr-auto ml-auto">
        <h3 className="text-center font-light text-[2.1rem] text-[#000] mb-[.5rem] leading-[1.2]">
          Together, Trinity Customers Are Making A Difference With Solar Energy.
        </h3>
        <div className="m-auto px-[15px] py-[20px] relative max-w-[900px]">
          <div className="max-w-full relative mr-auto ml-auto">
          <div className="flex-nowrap items-center flex box-border gap-[2em] mb-[1.75em]">
            <div className="relative text-center min-w-[0] break-words basis-0 grow">
              < FaTree className='text-[50px] text-[#2ecc71] leading-[54px] font-black inline-block'/>
              <h6 className="ml-[0] mr-[0] my-[10px] font-normal text-[1.42rem] text-center leading-[2.14rem] text-[#333]" id="trees-saved">48,990,308</h6>
              <p className="text-[#666] m-0 p-0 text-center text-[14px] leading-[12px]">Trees Saved</p>
            </div>
            <div className="relative text-center min-w-[0] break-words basis-0 grow">
              < FaCar className='text-[50px] text-[#2ecc71] leading-[54px] font-black inline-block'/>
              <h6 className="ml-[0] mr-[0] my-[10px] font-normal text-[1.42rem] text-center leading-[2.14rem] text-[#333]" id="miles-not-driven">7,351,828,497</h6>
              <p className="text-[#666] m-0 p-0 text-center text-[14px] leading-[12px]">Miles Not Driven</p>
            </div>
            <div className="relative text-center min-w-[0] break-words basis-0 grow">
              < FaSolarPanel className='text-[50px] text-[#2ecc71] leading-[54px] font-black inline-block'/>
              <h6 className="ml-[0] mr-[0] my-[10px] font-normal text-[1.42rem] text-center leading-[2.14rem] text-[#333]" id="pounds-reduced">6,531,826,989</h6>
              <p className="text-[#666] m-0 p-0 text-center text-[14px] leading-[12px]">Pounds of CO2 Reduced</p>
            </div>
          </div>
          <p className="text-[.9rem] leading-[1.3rem] text-[#999] text-center mt-4 mb-0">Figures based on EPA calculator –
            <a rel="noreferrer noopener"
              aria-label="https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator (opens in a new tab)"
              href="https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator" target="_blank"
              className='text-[#408bc0] text-[.9rem] leading-[1.14rem] no-underline
              hover:no-underline hover:text-[#2ecc71]'>
              https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator
            </a>
          </p>
          <p className="text-[.9rem] leading-[1.3rem] text-[#999] text-center mt-0 mb-4">
            All 3 scenarios are individually equivalent to the total environmental impact of Trinity customers to date.</p>
        </div>
        </div>
      </div>
      </section>




      <div className='relative w-full min-h-[590px] px-0 py-[120px] flex justify-center items-center 
      bg-cover bg-no-repeat bg-[50%] custom-mask'>
        <span aria-hidden="true" className="bg-[#000] bottom-[0] left-[0] opacity-[.5] absolute right-[0] top-[0]"></span>
        <img
          decoding="async"
          width="1119"
          height="590"
          className="border-[none] bottom-[0] [box-shadow:none] h-full left-[0] m-0 max-h-[none] max-w-none 
        object-cover outline-[none] p-0 absolute right-[0] top-[0] w-full z-0"
          alt="home_junior_gardener"
          src={home_junior_gardener}
          data-object-fit="cover"
          sizes="(max-width: 1119px) 100vw, 1119px"
        />
        <div className="relative w-[1140px] z-10">
          <h3 className="text-center text-white font-light text-[2.1rem] leading-[1.2] mb-[.5rem]">
          Keep Our Earth Clean</h3>
          <p className="text-center m-auto text-white max-w-[75%] relative w-full pr-[15px] pl-[15px]">
          One of the most impactful ways to lower your carbon footprint is with renewable energy. 
          Improve your quality of life and protect the environment for future generations by switching to solar.
          </p>
          <p className="text-center mt-0 mb-4">
            <a href="https://www.trinity-solar.com/go-solar/"
              className="mt-4 bg-[#2ecc71] border-[#2ecc71] rounded-[100px] px-[20px] py-[6px] [transition:all_.5s_ease]
            text-white inline-flex font-normal text-center align-middle 
             border-[1px] border-[solid] border-[transparent] text-[1rem] leading-normal no-underline cursor-pointer
             hover:text-white hover:bg-[#408bc0] hover:border-[#408bc0] hover:no-underline"
             onclick="dataLayer.push({'event': 'Learn More'});">
              <FaChevronCircleRight  className="font-black text-[x-large] p-[0.1rem]" /> LEARN MORE</a>
          </p>
        </div>
      </div>


      

      <section className="block relative mt-0 mb-0 border-none mr-0 ml-0 max-w-full !py-5 !px-4"
      // style={{ padding: '1.25rem 1rem !important' }} // py-5 and px-4 equivalents  
      >
        <div className="max-w-[1140px] relative mr-auto ml-auto">
          <p id="savings_message" className="mt-4 mb-4 text-center text-[.9rem] leading-[1.3rem] text-[#999]">
            *** Individual savings will vary based on your utility rate, energy consumption habits, 
            solar system equipment installed on your property, tax incentives eligibility, weather, 
            and other factors. Individual savings estimates are based on your solar energy production, 
            your solar kWh rate, potential tax incentives, your utility kWh rate at the time of purchase and 
            projected increase in the utility rate (based on historical data and national averages). 
            Estimate do not take into consideration other changes in utility rates. Such changes could affect 
            your overall estimated savings. Trinity does not guarantee savings. 
          </p>
        </div>
      </section>





    </div>
  )
}
