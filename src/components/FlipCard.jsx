import React from 'react';
import { ReactComponent as Connecticut } from '../assets/svg/solar-maps/Connecticut.svg';
import { ReactComponent as Delaware } from '../assets/svg/solar-maps/Delaware.svg';
import { ReactComponent as Florida } from '../assets/svg/solar-maps/Florida.svg';
import { ReactComponent as Maryland } from '../assets/svg/solar-maps/Maryland.svg';
import { ReactComponent as Massachusetts } from '../assets/svg/solar-maps/Massachusetts.svg';
import { ReactComponent as NewHampshire } from '../assets/svg/solar-maps/NewHampshire.svg';
import { ReactComponent as NewJersey } from '../assets/svg/solar-maps/NewJersey.svg';
import { ReactComponent as NewYork } from '../assets/svg/solar-maps/NewYork.svg';
import { ReactComponent as Pennsylvania } from '../assets/svg/solar-maps/Pennsylvania.svg';
import { ReactComponent as RhodeIsland } from '../assets/svg/solar-maps/RhodeIsland.svg';

const FlipCard = ({ SvgComponent, title, description1, description2 }) => {
  return (
    <div className="card perspective ">
      <div className="card-inner">
        <div className="card-front py-10">
        <SvgComponent className="Card Front w-3/4 h-3/4 fill-current text-[#333333] border-current text-center pl-6 py-5 " />
          {/* <img src={image} alt="Card Front" className="w-3/4 h-3/4 text-center pl-6 py-5 fill-[#333333] border-[#333333]" /> */}
          <h3 className="text-xl text-center mt-2 font-semibold text-[#333333]">{title}</h3>  
          {/* <h2 className="text-center mt-4">{title}</h2> */}
        </div>
        <div className="card-back flex items-center justify-center flex-col">
          <p className="mb-4 text-center ">{description1}</p>
          <p>{description2}</p>
        </div>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const cards = [
    {
      SvgComponent: Connecticut,
      title: 'Connecticut',
      description1: '67,621* Connecticut families are already powering their homes with clean solar energy.',
      description2: 'Trinity expanded to Connecticut in 2014. The state aims to run on 40% clean energy by 2030.',
    },
    {
      SvgComponent: Delaware,
      title: 'Delaware',
      description1: '7,435* Delaware families are already powering their homes with clean solar energy.',
      description2: 'Trinity expanded to Delaware in 2007. The state aims to run on 25% renewable energy by 2025.',
    },
    {
      SvgComponent: Florida,
      title: 'Florida',
      description1: 'More than 142,910* solar systems are already powering Florida with clean energy.',
      description2: 'Trinity expanded to Florida in 2021. Learn more about solar with Trinity in the Sunshine State!',
    },
    {
        SvgComponent: Maryland,
        title: 'Maryland',
        description1: '84,524* Maryland families are already powering their homes with clean solar energy.',
        description2: 'Trinity expanded to Maryland in 2015. The state aims to run on 100% clean electricity by 2040.',
      },
      {
        SvgComponent: Massachusetts,
        title: 'Massachusetts',
        description1: '135,574* Massachusetts families are already powering their homes with clean solar energy.',
        description2: 'Trinity expanded to Massachusetts in 2014. The state is aiming for net zero emissions by 2050.',
      },
      {
        SvgComponent: NewHampshire,
        title: 'New Hampshire',
        description1: '29,503* New Hampshire families are already powering their homes with clean solar energy.',
        description2: 'Trinity expanded to New Hampshire in 2023. By 2025, 25.2% of energy in the state must come from renewable sources, with home solar systems helping to achieve this goal.',
      },
      {
        SvgComponent: NewJersey,
        title: 'New Jersey',
        description1: '149,314* New Jersey families are already powering their homes with clean solar energy.',
        description2: 'Trinity was established in New Jersey in 1994 and became a solar installer in 2004. The state aims to run on 100% clean energy by 2050.',
      },
      {
        SvgComponent: NewYork,
        title: 'New York',
        description1: '167,669* New York families are already powering their homes with clean solar energy.',
        description2: 'Trinity expanded to New York in 2014. The state aims to run on 70% renewable energy by 2030.',
      },
      {
        SvgComponent: Pennsylvania,
        title: 'Pennsylvania',
        description1: '37,772* Pennsylvania families are already powering their homes with clean solar energy.',
        description2: 'Trinity expanded to Pennsylvania in 2017. The state aims to reduce greenhouse gas emissions by 26% below 2005 levels by 2025.',
      },
      {
        SvgComponent: RhodeIsland,
        title: 'Rhode Island',
        description1: '13,080* Rhode Island families are already powering their homes with clean solar energy.',
        description2: 'Trinity expanded to Rhode Island in 2016. The state aims to run on 100% clean energy by 2030.',
      },
      
  ];

  return (
    // <div className="flex justify-center space-x-8 mt-10">
    //   {cards.map((card, index) => (
    //     <FlipCard
    //       key={index}
    //       image={card.image}
    //       title={card.title}
    //       description1={card.description1}
    //       description2={card.description2}
    //     />
    //   ))}
    // </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 
px-36 text-center justify-items-center">
{cards.map((card, index) => (
  <FlipCard
    key={index}
    // image={card.image}
    SvgComponent={card.SvgComponent}
    title={card.title}
    description1={card.description1}
    description2={card.description2}
  />
))}
</div>


  );
};

export default CardContainer;
