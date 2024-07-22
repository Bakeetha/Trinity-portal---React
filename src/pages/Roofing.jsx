import React from 'react'
import Roofing_banner from "../assets/images/Roofing_banner.jpg";
import iko_partner1 from "../assets/images/iko_partner1.jpg";
import sunnova_partner2 from "../assets/images/sunnova_partner2.jpg";
import srs_partner3 from "../assets/images/srs_partner3.png";
import { FaCertificate, FaHammer, FaDollarSign } from "react-icons/fa";
import UserForm from "../components/UserForm";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome CSS is imported
export default function Roofing() {
  function handleSubmit(event) {
    console.log("form has been submitted: ");
    // console.log(this.state.firstName+" - "+this.state.lastName+" - "+this.state.email+" - "+this.state.contact);
    event.preventDefault();
  }
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
          src={Roofing_banner}
          className="border-[none] bottom-[0] [box-shadow:none] h-full left-[0] m-0 max-h-[none] 
          max-w-none object-cover outline-[none] p-0 absolute right-[0] top-[0] w-full
          opacity-100 z-0 min-w-[100vw] 
          [clip-path:polygon(100%_0%,_0%_0%,_0%_78%,_6%_85%,_10%_88%,_23%_91%,_86%_100%,_78%_100%,_85%_90%,_90%_82%,_100%_65%)]
          rounded-tr-none rounded-bl-[35%] rounded-br-[30%]"
        />

        <div className="relative z-40 !w-[1140px]">
          <div className="max-w-[66.666667%] ">
            <h3 className="text-white text-[2.6rem] font-light leading-[1.2] mb-[.5rem]">
              Add New Roofing & Save</h3>
            <p className="text-white mb-4 text-[16px]">
              Improve the performance and longevity of your solar with a new roof.
            </p>

          </div>
        </div>
      </div>

      <section className="block relative mt-0 mb-0 border-none mr-0 ml-0 max-w-full !py-5 !px-4">
        <div className="max-w-[1140px] relative mr-auto ml-auto ">
          <p id="savings_message" className="mt-4 mb-2 text-center text-xl text-semibold leading-7 text-black ">
            After being on over 100,000 roofs we’ve learned one thing: great solar starts with a good roof.
          </p>
          <p id="savings_message" className="mt-4 mb-4 text-center text-xl text-semibold leading-7 text-black ">
            Let our experts help you start your solar journey on the right foot with new, reliable roofing.
          </p>
        </div>
      </section>


      <div className="flex flex-col text-center relative gap-[20px] [container-widget-height:initial] [container-widget-align-self:initial] mt-0 mb-0 ml-0 mr-0 pt-[25px] pb-[20px] pl-0 pr-0">
        <div className="flex gap-[20px] w-full mx-[auto] my-[0] h-full flex-col [flex-basis:auto] grow shrink self-auto">
          <div className="max-w-full">
            <div className="h-full [transition:background_.3s,_border_.3s,_border-radius_.3s,_box-shadow_.3s,_transform_.4s]">
              <h2 className="text-[#408bc0] text-[30px] font-normal p-0 m-0 leading-none">
                Why Choose Trinity for Your New Roof?
                {/* Choose <span className='text-[#408bc0]'>Solar</span>. Choose <span className='text-[#408bc0]'>Trinity</span>. */}
              </h2>
            </div>
          </div>
          <div className="max-w-full text-[#000000] text-[20px] font-normal leading-[35px]">
            <div className="h-full [transition:background_.3s,_border_.3s,_border-radius_.3s,_box-shadow_.3s,_transform_.4s]">
              <p id="savings_message" className="mt-4 mb-2 text-center text-xl text-semibold leading-7 text-black ">
                We’ve spent the last 30 years perfecting our roofing system so you can rest easy.
              </p>
              <p id="savings_message" className="mt-4 mb-4 text-center text-xl text-semibold leading-7 text-black ">
                We call it the Trinity Total Trust Roofing Advantage, and it includes:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-center relative [container-widget-height:initial] w-full
      [container-widget-align-self:initial] mt-0 mb-0 ml-0 mr-0 pt-[50px] pb-[20px] pl-0 pr-0">
        <div className="flex mx-[auto] my-[0] h-full [flex-basis:auto] grow shrink self-auto
        relative mr-auto ml-auto max-w-[1140px]
        ">
          {/* <form onSubmit={handleSubmit}>
        <UserForm />
      </form> */}
          <div className='w-1/2 roofing-system'>

            <div className="text-left leading-10 text-md  gap-10 pt-[20px] pr-[95px] pl-[25px]">
              <p className='pt-[10px]'>A systematic, 13-step installation process developed by our seasoned construction department</p>
              <p className='pt-[10px]'>Most installations completed in one day*</p>
              <p className='pt-[10px]'>Dedicated project manager</p>
              <p className='pt-[10px]'>Compliance and permit oversight</p>
              <p className='pt-[10px]'>Roof removal to plywood</p>
              <p className='pt-[10px]'>Thorough prep and repair process as well as gutter cleanup</p>
              <p className='pt-[10px]'>Premium IKO Dynasty shingles, the world’s largest manufacturer</p>
              <p className='pt-[10px]'>Installation by highly-trained, professional installers</p>
              <p className='pt-[10px]'>Site cleanup and waste disposal with Magnetic Sweep</p>
              <p className='pt-[10px]'>24-hour support hotline</p>
            </div>

          </div>
          <div className='w-1/2'>
            <UserForm />
          </div>
        </div>
      </div>



      <div className="flex flex-col text-center relative gap-[20px] [container-widget-height:initial] 
      [container-widget-align-self:initial] mt-0 mb-0 ml-0 mr-0 pt-[50px] pb-[20px] pl-0 pr-0">
        <div className="flex gap-[20px] w-full mx-[auto] my-[0] h-full flex-col [flex-basis:auto] grow shrink self-auto">

          <div className="max-w-full">
            <div className="h-full [transition:background_.3s,_border_.3s,_border-radius_.3s,_box-shadow_.3s,_transform_.4s]">
              <h2 className="text-[#000000] text-[30px] font-normal p-0 m-0 leading-none">
                Experience the <span className='text-[#408bc0]'>Trinity Difference</span>
              </h2>
            </div>
          </div>


          <section className="relative max-w-full mt-5 mb-5 pt-5  border-none mr-0 ml-0 " >
            <div className="relative mr-auto ml-auto max-w-[1140px]">
              <div className="box-border flex flex-wrap gap-[2em] mb-[1.75em] items-stretch">
                <div className="relative bg-[#efefef] transition duration-150 ease-in-out p-4 pt-5 rounded-xl 
                basis-0 grow">
                  <div className="text-center absolute bg-[#33B789] w-[95px] h-[95px] rounded-[100%] text-white 
            -top-[30px] left-2/4 -translate-x-1/2 translate-y-[0] right-[0] leading-[100px] text-[50px] 
            [transition:all_.5s_ease] hover:text-[#69727d]">
                    <FaCertificate className='text-center absolute left-[1.4rem] top-[1.4rem] ' />
                  </div>
                  <h3 className="text-2xl text-center font-light leading-[1.2] mb-3 pt-12 mt-5"> High-Quality Roofing </h3>
                  <p className="text-center text-sm mb-4 leading-6">
                    Our established partnerships with roofing suppliers and shingle manufacturers provide you with the industry’s most reliable products and warranties.
                  </p>
                </div>

                <div className="relative bg-[#efefef] transition duration-150 ease-in-out p-4 pt-5 rounded-xl 
                basis-0 grow ">
                  <div className="text-center absolute bg-[#33B789] w-[95px] h-[95px] rounded-[100%] text-white 
            -top-[30px] left-2/4 -translate-x-1/2 translate-y-[0] right-[0] leading-[100px] text-[50px] 
            [transition:all_.5s_ease] group-hover:top-0 hover:text-[#69727d]">
                    <FaHammer className='text-center absolute left-[1.4rem] top-[1.4rem]' />
                  </div>
                  <h3 className="text-2xl text-center font-light leading-[1.2] mb-3 pt-12 mt-5"> Craftsmanship And Labor Warranties </h3>
                  <p className="text-center text-sm mb-4 leading-6">
                    With an industry leading 25-year craftsmanship and labor warranty, we stand behind our roof installations and provide lifetime support.
                  </p>
                </div>

                <div className="relative bg-[#efefef] transition duration-150 ease-in-out p-4 pt-5 rounded-xl 
                basis-0 grow ">
                  <div className="text-center absolute bg-[#33B789] w-[95px] h-[95px] rounded-[100%] text-white 
                  -top-[30px] left-2/4 -translate-x-1/2 translate-y-[0] right-[0] leading-[100px] text-[50px]
                  [transition:all_.5s_ease] group-hover:top-0 hover:text-[#69727d]">
                    <FaDollarSign className='text-center absolute left-[1.4rem] top-[1.4rem] ' />
                  </div>
                  <h3 className="text-2xl text-center font-light leading-[1.2] mb-3 pt-12 mt-5"> Financing Options </h3>
                  <p className="text-center text-sm mb-4 leading-6">
                    Getting a new roof is simple with long-term loan options up to 25 years, low interest rates and $0 initial out-of-pocket costs from our finance partners.
                  </p>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>





      <div className="flex flex-col text-center relative gap-[20px] [container-widget-height:initial] 
      [container-widget-align-self:initial] mt-2 mb-0 ml-0 mr-0 pb-[20px] pl-0 pr-0">
        <div className="flex gap-[20px] w-full mx-[auto] my-[0] h-full flex-col [flex-basis:auto] grow shrink self-auto">

          <div className="max-w-full">
            <div className="h-full [transition:background_.3s,_border_.3s,_border-radius_.3s,_box-shadow_.3s,_transform_.4s]">
              <h2 className="text-[#000000] text-[30px] font-normal p-0 m-0 leading-none">
                Our<span className='text-[#408bc0]'>Partners</span>
              </h2>
            </div>
          </div>

          {/* starts */}

          <section className="relative w-full border-none mr-0 ml-0  mt-5 mb-5 pt-5 " >
            <div className="relative mr-auto ml-auto max-w-[1140px]">
              <div className="box-border flex flex-wrap">
                <div className="w-1/3 flex justify-center">
                  <a href="https://www.iko.com/our-history/">
                    <img decoding="async" width="268" height="87"
                      src={iko_partner1}
                      className="attachment-medium size-medium wp-image-37179" alt=""
                      sizes="(max-width: 268px) 100vw, 268px" />
                  </a>
                </div>
                <div className="w-1/3 flex justify-center">
                  <a href="https://www.sunnova.com/about-sunnova/why-sunnova">
                    <img decoding="async" width="182" height="80"
                      src={sunnova_partner2}
                      className="attachment-medium size-medium wp-image-37180" alt=""
                      sizes="(max-width: 182px) 100vw, 182px" />
                  </a>
                </div>
                <div className="w-1/3 flex justify-center">
                  <a href="https://www.sunnova.com/about-sunnova/why-sunnova">
                    <img decoding="async" width="182" height="80"
                      src={srs_partner3}
                      className="attachment-medium size-medium wp-image-42017" alt=""
                      sizes="(max-width: 182px) 100vw, 182px" />
                  </a>
                </div>
              </div>
            </div>
          </section>


          {/* ends */}


        </div>
      </div>




      <div className="flex flex-col text-center relative gap-[20px] [container-widget-height:initial] 
      [container-widget-align-self:initial] mt-2 mb-0 ml-0 mr-0 pb-[20px] pl-0 pr-0">
        <div className="flex gap-[20px] w-full mx-[auto] my-[0] h-full flex-col [flex-basis:auto] grow shrink self-auto">

          <div className="max-w-full">
            <div className="h-full [transition:background_.3s,_border_.3s,_border-radius_.3s,_box-shadow_.3s,_transform_.4s]">
              <h2 className="text-[#000000] text-[30px] font-normal p-0 m-0 leading-none">
                <span className='text-[#408bc0]'>Your New Roof</span> Includes:
              </h2>
            </div>
          </div>


          <section className="relative w-full border-none mr-0 ml-0  mt-5 mb-5 pt-5 " >
            <div className="relative mr-auto ml-auto max-w-[1140px]">
              <div className="box-border flex flex-wrap">

              </div>
            </div>
          </section>




        </div>
      </div>








      <section className="block relative mt-0 mb-0 border-none mr-0 ml-0 max-w-full !py-5 !px-4">
        <div className="max-w-[1140px] relative mr-auto ml-auto ">
          <p id="savings_message" className="mt-4 mb-2 text-base leading-7 text-black  flex justify-normal">
            *Weather, materials, and other unforeseen factors may impact the installation timeline
          </p>
          <p id="savings_message" className="mt-4 mb-4 text-base leading-7
           text-black flex justify-start">**You will still be a utility customer and receive a bill from your standard utility for energy usage not offset by the solar electric system and any administrative and/or regulatory fees. Individual savings will vary based on your utility rate, energy consumption habits, solar system equipment installed on your property, tax incentives eligibility, weather, and other factors. Individual savings estimates are based on your solar energy production, your solar kWh rate, potential tax incentives, your utility kWh rate at the time of purchase and projected increase in the utility rate (based on historical data and national averages). Estimates do not take into consideration other changes in utility rates. Such changes could affect your overall estimated savings. Trinity does not guarantee savings.
          </p>
        </div>
      </section>


    </div>
  )
}
