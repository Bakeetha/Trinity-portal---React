import React from 'react';
import Trinity_Logo_White_SVG from '../assets/svg/Trinity_Logo_White_SVG.svg';
import darkgray_seal from '../assets/images/darkgray_seal.png';

export default function Footer() {
    return (
        <div className=''>
            <footer className='bg-[#333] w-full overflow-hidden justify-between pt-[50px] pb-0 
            bottom-[0] z-0 text-[#dbd7d7] pl-[0] pr-[0] py-[70px] block'>
                {/* fixed  */}
                <section className="w-100 text-center footer mt-5  pb-4 block">
                <div className="max-w-[41.666667%] relative w-full pr-[15px] pl-[15px] m-auto">
                <div className="w-100 mb-3 pb-3 border-b border-[rgba(255,_255,_255,_0.08)]" >

                    <a className="pr-4 pl-4 mr-0 text-[#FFF] underline border-[none] inline-block 
                    pt-[.3125rem] pb-[.3125rem] text-[1.25rem] [line-height:inherit] whitespace-nowrap
                    border-r-[1px_solid_rgba(255,_255,_255,_0.08)]" href="https://dev.trinity-solar.com/">
                        <img className="pb-0 [transition:all_.4s_ease-in-out] align-middle border-none" 
                        src={Trinity_Logo_White_SVG} 
                        width="162px" height="" alt="trinity"/>
                    </a>

                    <a className="pr-4 pl-4 mr-0 text-[#FFF] underline border-[none] inline-block 
                    pt-[.3125rem] pb-[.3125rem] text-[1.25rem] [line-height:inherit] whitespace-nowrap" 
                    href="https://www.bbb.org/us/nj/wall-township/profile/solar-energy-design/trinity-solar-0221-16001220/#sealclick" 
                    target="_blank" rel="nofollow">
                        <img src={darkgray_seal} className='border-[0] w-[200px] h-auto'
                    alt="Trinity Solar BBB Business Review" />
                    </a>
                </div>
                </div>
                <span className="text-[#6c757d]">© Trinity Solar, Inc.  
                    <script>
                        var CurrentYear = new Date().getFullYear()
                        document.write(CurrentYear)
                        document.write('.')
                    </script>2024. All Rights Reserved.
                </span>
                <div className="grid-cols-12 mt-2 mb-3">
                    <a href="https://dev.trinity-solar.com/privacy-policy" className="text-white underline">Privacy Policy</a>
                     &nbsp;|&nbsp;  
                    <a href="https://dev.trinity-solar.com/locations-licenses" className="text-white underline">Locations and Licenses</a>
                </div>
                

                </section>

            </footer>
            {/* <footer class="footer-styling">
                <section class="w-100 text-center footer mt-5  pb-4">
                    <div class="col-sm-5 m-auto">
                        <div class="w-100 mb-3 pb-3" style="border-bottom: 1px solid rgba(255, 255, 255, 0.08);">


                            <a style="border-right:1px solid rgba(255,255,255,0.08);" class="navbar-brand break_the_links pr-4 pl-4 mr-0" href="https://dev.trinity-solar.com/">
                            <img class="navbar-logo" src="https://dev.trinity-solar.com/wp-content/uploads/2020/02/Trinity_Logo_White_SVG.svg" width="162px" height="" alt="trinity"></a>
                            <a class="navbar-brand break_the_links pr-4 pl-4 mr-0" href="https://www.bbb.org/us/nj/wall-township/profile/solar-energy-design/trinity-solar-0221-16001220/#sealclick" target="_blank" rel="nofollow"><img src="https://seal-newjersey.bbb.org/seals/darkgray-seal-280-80-bbb-16001220.png" style="border: 0; width: 200px; height:auto;" alt="Trinity Solar BBB Business Review"></a>

                        </div></div>

                    <span class="text-muted">© Trinity Solar, Inc.  <script>
                        var CurrentYear = new Date().getFullYear()
                        document.write(CurrentYear)
                        document.write('.')
                    </script>2024. All Rights Reserved.</span>

                    <div class="col-md-12 mt-2 mb-3">
                        <a href="https://dev.trinity-solar.com/privacy-policy" class="footer-links">Privacy Policy</a>
                        <a href="https://dev.trinity-solar.com/locations-licenses" class="footer-links">Locations and Licenses</a>
                    </div>
                    <div class="footer-image" style="background: url('https://dev.trinity-solar.com/wp-content/uploads/2020/02/TINY-LOGO-WHITE.png');background-repeat: no-repeat; background-size: 100% 100%;"></div>
                    <div class="footer-social">
                        <div class="container" >
                            <ul class="list-inline">
                                <li class="list-inline-item footer-icon">

                                    <a target="https://www.facebook.com/TrinitySolar/" href="https://www.facebook.com/TrinitySolar/"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>

                                </li>
                                <li class="list-inline-item footer-icon">

                                    <a target="_blank" href="https://twitter.com/Trinity_Solar"><i class="fab fa-twitter" aria-hidden="true"></i></a>

                                </li>
                                <li class="list-inline-item footer-icon">

                                    <a target="_blank" href="https://www.youtube.com/trinitysolar"><i class="fab fa-youtube" aria-hidden="true"></i></a>

                                </li>
                                <li class="list-inline-item footer-icon">

                                    <a target="https://www.linkedin.com/company/trinity-solar" href="https://www.linkedin.com/company/trinity-solar"><i class="fab fa-linkedin" aria-hidden="true"></i></a>

                                </li>
                            </ul>
                        </div>
                    </div>

                </section>


            </footer> */}

        </div>
    )
}
