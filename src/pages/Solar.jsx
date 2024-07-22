import React from 'react'
import { FaMoneyCheckAlt, FaHandHoldingUsd, FaDollarSign, FaSearch } from "react-icons/fa";
import Solar_Home from "../assets/images/Solar_Home.jpg";
import combined_map_bg from "../assets/images/combined_map_bg.png";
import CardContainer from "../components/FlipCard";
import ReactPlayer from 'react-player';
import TestimonialCard from "../components/TestimonialCard";
import Testimonials from "../components/Testimonials";
import "../App.css";
export default function Solar() {
  return (
    <div className='relative ' >
      <div className="items-center top-0 p-[1em] relative shadow-sm bg-[50%]  justify-center
       flex  box-border min-h-screen
       ">
        <span
          className="bottom-[0] left-[0] opacity-[.5] absolute right-[0] top-[0]
            w-full object-cover bg-[#000000] z-10 min-w-[100vw] 
            [clip-path:polygon(100%_0%,_0%_0%,_0%_78%,_6%_85%,_10%_88%,_23%_91%,_86%_100%,_78%_100%,_85%_90%,_90%_82%,_100%_65%)]
            rounded-tr-none rounded-bl-[35%] rounded-br-[30%]"
        ></span>

        <img
          src={Solar_Home}
          className="border-[none] bottom-[0] [box-shadow:none] h-full left-[0] m-0 max-h-[none] 
          max-w-none object-cover outline-[none] p-0 absolute right-[0] top-[0] w-full
          opacity-100 z-0 min-w-[100vw] 
          [clip-path:polygon(100%_0%,_0%_0%,_0%_78%,_6%_85%,_10%_88%,_23%_91%,_86%_100%,_78%_100%,_85%_90%,_90%_82%,_100%_65%)]
          rounded-tr-none rounded-bl-[35%] rounded-br-[30%]"
        />

        <div className="relative z-40 !w-[1140px]">
          <div className="max-w-[66.666667%] ">
            <h3 className="text-white text-[2.6rem] font-light leading-[1.2] mb-[.5rem]">
              Empower Yourself and Your Family.</h3>
            <p className="text-white mb-4 text-[16px]">
              Make the switch to solar and save money with predictable energy rates.
            </p>
            {/* <a
              className="bg-[#2ecc71] border-[#2ecc71] rounded-[100px] px-[20px] py-[6px] [transition:all_.5s_ease]
              text-white inline-flex font-normal text-center align-middle 
               border-[1px] border-[solid] border-[transparent] text-[1rem] leading-normal no-underline cursor-pointer
               hover:text-white hover:bg-[#408bc0] hover:border-[#408bc0] hover:no-underline"
              onClick="dataLayer.push({'event': 'Go Solar'});"
              href="https://www.trinity-solar.com/go-solar/"
            >
              <FaSolarPanel className="font-black text-[x-large] p-[0.1rem]" /> GO SOLAR
            </a> */}
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


      <div className="flex flex-col text-center relative gap-[20px] [container-widget-height:initial] [container-widget-align-self:initial] mt-0 mb-0 ml-0 mr-0 pt-[50px] pb-[20px] pl-0 pr-0">
        <div className="flex gap-[20px] w-full mx-[auto] my-[0] h-full flex-col [flex-basis:auto] grow shrink self-auto">
          <div className="max-w-full">
            <div className="h-full [transition:background_.3s,_border_.3s,_border-radius_.3s,_box-shadow_.3s,_transform_.4s]">
              <h2 className="text-[#000000] text-[30px] font-normal p-0 m-0 leading-none">
                Choose <span className='text-[#408bc0]'>Solar</span>. Choose <span className='text-[#408bc0]'>Trinity</span>.
              </h2>
            </div>
          </div>
          <div className="max-w-full" >
            <div className="h-full [transition:background_.3s,_border_.3s,_border-radius_.3s,_box-shadow_.3s,_transform_.4s]">
              <h5 className="text-[#000000] text-[20px] font-normal p-0 m-0 leading-none">
                Trinity Solar Is A Leading Installer Of Solar Electric Systems In The Country.</h5>
            </div>
          </div>
          <div className="max-w-full text-[#000000] text-[20px] font-normal leading-[35px]">
            <div className="h-full [transition:background_.3s,_border_.3s,_border-radius_.3s,_box-shadow_.3s,_transform_.4s]">
              <p className='mt-0 mb-4'>Going solar with Trinity is simple and saves you thousands of dollars over time.
                * Why pay more for power when you can have predictable electric bills,
                enjoy federal and state incentives and take advantage of our industry-leading warranty?
                In business since 1994, our philosophy is to put our customer first and ensure a positive experience.
                Our in-house, licensed professionals are well-equipped to provide you with a customized solution to meet your family’s
                specific energy needs. Don’t trust just anyone. Join 100,000+ Trinity customers and rely on our over 30 years of
                experience so you can rest easy knowing you<br />made the right decision.
              </p>
            </div>
          </div>
        </div>
      </div>


     
      {/* <div className='relative bodyContainer bg-gray-100 p-10'>
      <div className="flex flex-wrap justify-center">
        <div className="group perspective-1000 m-8">
          <div className="relative w-64 h-96 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
            <div className="absolute w-full h-full backface-hidden bg-white shadow-lg rounded p-8">
              <div className="hidden sm:block">
                <p className="text-grey-dark font-thin text-sm leading-normal">
                  <span>67,621*</span> Connecticut families are already powering their homes with clean solar energy.
                </p>
                <p className="text-grey-dark font-thin text-sm leading-normal">
                  Trinity expanded to Connecticut in 2014. The state aims to run on 40% clean energy by 2030.
                </p>
              </div>
              <div className="sm:hidden">
                <img className="md:border-white md:border-solid md:border-4" alt='Connecticut' src={Connecticut} />
                <h3 className="text-orange text-xl font-semibold md:text-white">Connecticut</h3>
              </div>
            </div>
            <div className="absolute w-full h-full backface-hidden bg-orange shadow-lg rounded p-8 transform rotate-y-180">
              <div className="flex flex-col justify-center h-full">
                <p className="text-white font-thin text-sm leading-normal">
                  <span>67,621*</span> Connecticut families are already powering their homes with clean solar energy.
                </p>
                <p className="text-white font-thin text-sm leading-normal">
                  Trinity expanded to Connecticut in 2014. The state aims to run on 40% clean energy by 2030.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="group perspective-1000 m-8">
          <div className="relative w-64 h-96 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
            <div className="absolute w-full h-full backface-hidden bg-white shadow-lg rounded p-8">
              <div className="hidden sm:block">
                <p className="text-grey-dark font-thin text-sm leading-normal">
                  <span>7,435*</span> Delaware families are already powering their homes with clean solar energy.
                </p>
                <p className="text-grey-dark font-thin text-sm leading-normal">
                  Trinity expanded to Delaware in 2007. The state aims to run on 25% renewable energy by 2025.
                </p>
              </div>
              <div className="sm:hidden">
                <img className="md:border-white md:border-solid md:border-4" alt='Delaware' src={Delaware} />
                <h3 className="text-orange text-xl font-semibold md:text-white">Delaware</h3>
              </div>
            </div>
            <div className="absolute w-full h-full backface-hidden bg-orange shadow-lg rounded p-8 transform rotate-y-180">
              <div className="flex flex-col justify-center h-full">
                <p className="text-white font-thin text-sm leading-normal">
                  <span>7,435*</span> Delaware families are already powering their homes with clean solar energy.
                </p>
                <p className="text-white font-thin text-sm leading-normal">
                  Trinity expanded to Delaware in 2007. The state aims to run on 25% renewable energy by 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}


    




      <div className=" bg-cover flex flex-row [container-widget-width:initial] gap-[0px 0px] flex-wrap mt-[40px] 
      mb-0 ml-0 mr-0 pt-[160px] pb-[20px] pl-0 pr-0 relative"
        style={{ background: `url(${combined_map_bg})` }} >
        <div className="flex-wrap [justify-content:initial] [align-items:initial] [align-content:initial] 
        [flex-basis:auto] flex-grow flex-shrink self-auto flex-row [text-align:initial]"
        >
          <div className="text-center w-full max-w-full" >
            <div className="pl-0 pr-0 py-0 h-full  [transition:background_.3s,_border_.3s,_border-radius_.3s,_box-shadow_.3s,_transform_.4s] ">
              <h2 className="p-0 m-0 leading-none text-white text-[30px] font-light">Trinity Operates In 10 States And Counting</h2>		</div>
          </div>
          <CardContainer />
          {/* <div className=" flex">
            <div className="bg-white shadow-lg rounded m-8 p-8 md:bg-orange">
              <div className="w-1/3 hidden sm:block" >
                <p className="text-grey-dark font-thin text-sm leading-normal ">
                  <span> 67,621*</span> Connecticut families are already powering their homes with clean solar energy.
                </p>
                <p className="text-grey-dark font-thin text-sm leading-normal ">
                  Trinity expanded to Connecticut in 2014. The state aims to run on 40% clean energy by 2030.
                </p>
              </div>
              <div className="sm:w-2/3 md:hidden">
                <img className="md:border-white md:border-solid md:border-4 " alt='map1' src={Connecticut} />
                  <h3 className="text-orange text-xl font-semibold md:text-white">Connecticut</h3>  
              </div>
            </div>
            
            
            <div className="bg-white shadow-lg rounded  m-8 p-8 md:bg-orange">
              <div className="w-1/3 hidden sm:block" >
                <p className="text-grey-dark font-thin text-sm leading-normal ">
                <span>  7,435*</span> Delaware families are already powering their homes with clean solar energy.
                </p>
                <p className="text-grey-dark font-thin text-sm leading-normal ">
                Trinity expanded to Delaware in 2007. The state aims to run on 25% renewable energy by 2025.
                </p>
              </div>
              <div className="sm:w-2/3 md:hidden">
                <img className="md:border-white md:border-solid md:border-4 " alt='map1' src={Delaware} />
                  <h3 className="text-orange text-xl font-semibold md:text-white">Delaware</h3>  
              </div>
            </div>
           
          </div> */}
        
          <div className="text-center w-full max-w-full" >
            <div className="h-full pt-[70px] pb-[35px] pl-0 pr-0 ">
              <h2 className="p-0 m-0 leading-none text-white text-[30px] font-light">Proudly Serving</h2>
            </div>
          </div>
          <div className="shrink-0 grow-0 gap-x-0 text-center text-[white] text-[18px] font-normal w-full max-w-full" >
            <div className="pt-0 px-[20px] pb-[10px] h-full">
              Connecticut, Delaware, Florida, Maryland, Massachusetts, New Hampshire, New Jersey, New York, Pennsylvania, &amp; Rhode Island						</div>
          </div>
          <div className="shrink-0 grow-0 gap-x-0 text-center text-[white] text-[18px] font-normal w-full max-w-full" >
            <div className="pt-0 px-[10px] pb-[120px] h-full">

              * Information provided by State sources. Information for all residential solar installers.						</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center relative gap-[20px] [container-widget-height:initial] [container-widget-align-self:initial] mt-0 mb-0 ml-0 mr-0 pt-[50px] pb-[20px] pl-0 pr-0">
        <div className="flex gap-[20px] w-full mx-[auto] my-[0] h-full flex-col [flex-basis:auto] grow shrink self-auto">
          <div className="max-w-full">
            <div className="h-full [transition:background_.3s,_border_.3s,_border-radius_.3s,_box-shadow_.3s,_transform_.4s]">
              <h2 className="text-[#000000] text-[30px] font-normal p-0 m-0 leading-none">
                3 Ways You Can Save.*
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center relative gap-[20px] [container-widget-height:initial] 
      [container-widget-align-self:initial] mt-0 mb-0 ml-0 mr-0 pt-[50px] pb-[20px] pl-0 pr-0">
        <div className="flex gap-[20px] w-full mx-[auto] my-[0] h-full flex-col [flex-basis:auto] grow shrink self-auto">

          <section className="relative max-w-full mt-5 mb-5 pt-5  border-none mr-0 ml-0 " >
            <div className="relative mr-auto ml-auto max-w-[1140px]">
              <div className="box-border flex flex-wrap gap-[2em] mb-[1.75em] items-stretch">
                <div className="relative bg-[#efefef] transition duration-150 ease-in-out p-4 pt-5 rounded-xl basis-0 grow 
          hover:rounded-[5rem] hover:transition-all delay-200 group">
                  <div className="text-center absolute bg-[#33B789] w-[95px] h-[95px] rounded-[100%] text-white 
            -top-[30px] left-2/4 -translate-x-1/2 translate-y-[0] right-[0] leading-[100px] text-[50px] 
            [transition:all_.5s_ease] group-hover:top-0 hover:text-[#69727d]">
                    <FaMoneyCheckAlt className='text-center absolute left-[1.4rem] top-[1.4rem] hover:scale-125 ' />
                  </div>
                  <h3 className="text-2xl text-center font-light leading-[1.2] mb-3 pt-12 mt-5"> Zero Upfront. </h3>
                  <p className="text-center text-sm mb-4 leading-6">
                    Start producing clean, renewable energy with a no-cost solar installation and pay less for the power you produce. </p>
                </div>

                <div className="relative bg-[#efefef] transition duration-150 ease-in-out p-4 pt-5 rounded-xl basis-0 grow 
          hover:rounded-[5rem] hover:transition-all delay-200 group">
                  <div className="text-center absolute bg-[#33B789] w-[95px] h-[95px] rounded-[100%] text-white 
            -top-[30px] left-2/4 -translate-x-1/2 translate-y-[0] right-[0] leading-[100px] text-[50px] 
            [transition:all_.5s_ease] group-hover:top-0 hover:text-[#69727d]">
                    <FaHandHoldingUsd className='text-center absolute left-[1.4rem] top-[1.4rem]' />
                  </div>
                  <h3 className="text-2xl text-center font-light leading-[1.2] mb-3 pt-12 mt-5"> Solar Finance. </h3>
                  <p className="text-center text-sm mb-4 leading-6">
                    Take steps toward ownership with affordable monthly payments. Once you own, pay nothing for the power you produce.
                  </p>
                </div>

                <div className="relative bg-[#efefef] transition duration-150 ease-in-out p-4 pt-5 rounded-xl basis-0 grow 
          hover:rounded-[5rem] hover:transition-all delay-200 group">
                  <div className="text-center absolute bg-[#33B789] w-[95px] h-[95px] rounded-[100%] text-white 
                  -top-[30px] left-2/4 -translate-x-1/2 translate-y-[0] right-[0] leading-[100px] text-[50px]
                  [transition:all_.5s_ease] group-hover:top-0 hover:text-[#69727d]">
                    <FaDollarSign className='text-center absolute left-[1.4rem] top-[1.4rem] ' />
                  </div>
                  <h3 className="text-2xl text-center font-light leading-[1.2] mb-3 pt-12 mt-5"> Solar Purchase. </h3>
                  <p className="text-center text-sm mb-4 leading-6">
                    Purchase your system up front. Pay nothing for the power you produce moving forward.
                  </p>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>






    <div className="flex justify-center items-center ">
        <div className="bg-[#efefef] shadow-lg rounded m-8 p-8 gap-[20px]  max-w-[1140px] 
        flex items-center justify-between relative">
          <div className="w-2/4">  
          <ReactPlayer   width="100%" controls
        url="https://www.youtube.com/embed/p7XTp8WSfMM?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fdev.trinity-solar.com&amp;widgetid=1"
      />
            {/* <img 
            className="rounded-full md:border-white md:border-solid md:border-4" src="https://randomuser.me/api/portraits/men/44.jpg"/> */}
         	{/* <iframe class="elementor-video" frameborder="0" allowfullscreen="" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerpolicy="strict-origin-when-cross-origin" title="Trinity Solar - Sandra Stanton Testimonial" 
             width="640" height="360" 
             src="https://www.youtube.com/embed/p7XTp8WSfMM?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fdev.trinity-solar.com&amp;widgetid=1" 
            id="widget2" data-gtm-yt-inspected-32="true"></iframe>	 */}
  
          </div>
          <div className="w-2/4 ">
            
   
          <h2 className="text-[#000000] text-[30px] font-normal p-0 m-0 leading-none">
          The <span className='text-[#408bc0]'>Trinity</span>Experience 
              </h2>
                    <div className='text-[#000000] text-[15px] font-normal leading-[35px] pt-6'>
                    <p className="">
            “Trinity took care of all the legwork. The process was simple and the installation was done in under a day. I was pleased to find out that Trinity is a family owned company; that’s important to me.”
              </p>
                    </div>
            	
          </div>  
      </div>
</div>


<div>

     <TestimonialCard />

     {/* <Testimonials /> */}
</div>




      <section className="block relative mt-0 mb-0 border-none mr-0 ml-0 max-w-full !py-5 !px-4">
        <div className="max-w-[1140px] relative mr-auto ml-auto">
          <p id="savings_message" className="mt-4 mb-4 text-center text-[.9rem] leading-[1.3rem] text-black">
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
