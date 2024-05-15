import React, { useState } from 'react';
import indiaMap from './assets/svg/in.svg';
import Navbar from './Navbar';
import Footer from './Footer'
// import { Link } from 'react-router-dom'

const statesData = [
  { name: 'Rajasthan', wikiLink: './Rajasthan', cx: 256.7, cy: 320.8, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/375px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg' },
  { name: 'Punjab', wikiLink: 'https://en.wikipedia.org/wiki/Punjab,_India', cx: 300.5, cy: 210.4, image: 'https://lh3.googleusercontent.com/p/AF1QipMU8xPHOakcdPjjT4bNIiIxuTiv6pQ7DRWxIGfn=s1360-w1360-h1020' },
  { name: 'Uttar Pradesh', wikiLink: 'https://en.wikipedia.org/wiki/Uttar_Pradesh', cx: 448.7, cy: 301.8, image: 'https://volzero.com/img/news/88041_banner.jpg' },
  { name: 'Gujarat', wikiLink: 'https://en.wikipedia.org/wiki/Gujarat', cx: 199.2, cy: 400, image: 'https://media.licdn.com/dms/image/D4E12AQGftCogfufPrg/article-cover_image-shrink_600_2000/0/1698734811266?e=2147483647&v=beta&t=4Wxbqq7SYlORHkbR-Mu8C_ERnX4irYHPwamHZKo-dbI' },
  { name: 'Delhi', wikiLink: './monument', cx: 360, cy: 260, image: 'https://lh3.googleusercontent.com/p/AF1QipNaQ1SZnIKTduoRA8gG4NgMV3wNmn36Xnji2Oro=s1360-w1360-h1020' },
];

const IndiaMap = () => {
  const [hoveredState, setHoveredState] = useState(null);

  const handleStateClick = (stateName) => {
    const state = statesData.find(state => state.name === stateName);
    if (state) {
      window.location.href = state.wikiLink;
    }
  };
  

  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', height: '100vh', marginLeft: '50px', marginTop: '50px'}}>
        <h1>Select Place to Know More!!</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 800"
          width="800"
          height="900"
        >
          <image xlinkHref={indiaMap} width="100%" height="100%" />
          {statesData.map((state, index) => (
            <g key={index}>
              <text
                x={state.cx}
                y={state.cy}
                fill={hoveredState === state.name ? 'red' : 'black'}
                fontSize="16"
                fontWeight="bold"
                textAnchor="middle"
                cursor="pointer"
                data-name={state.name}
                onMouseEnter={() => setHoveredState(state.name)}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick(state.name)}
              >
                {state.name}
              </text>
              {hoveredState === state.name && (
                <image
                  xlinkHref={state.image}
                  x={state.cx - 15}
                  y={state.cy - 110}
                  width="100"
                  height="100"
                />
              )}
            </g>
          ))}
        </svg>
      </div>
      <footer className="footer" id="footer" >
        <Footer/>
        </footer>
    </div>
  );
};

export default IndiaMap;
