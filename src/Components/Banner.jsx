import React, { useState } from 'react';
import smiley from '../Assets/emo 1.png';
import image1 from '../Assets/Vector 1.png';
import image2 from '../Assets/Layer 1.png';
import image3 from '../Assets/Vector 2.png';
import image4 from '../Assets/Layer 2.png';
import round from '../Assets/VectorRound.png'
const Banner = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
            <div className="flex justify-center">
                <button className="bg-gray-100 text-blue-700 rounded-full p-2 px-4">UNIQUE CURRY POWDERS</button>
            </div>
            <div className="text-center mt-4">
                <p className="font-bold text-2xl font-mochie" style={{ fontFamily: 'Mochiy Pop One', fontSize: 60, lineHeight: 1.5 }}>
                    <span>
                        Wake Up Your{' '}
                        <img
                            src={smiley}
                            alt="Your Alt Text"
                            className="inline align-middle"
                            style={{ width: '70px', height: '70px' }}
                        />
                    </span>
                    <br />Taste Buds With Us
                </p>
            </div>
            <div className="flex justify-center mt-8">
                <div className="left-div flex items-center space-x-4">
                    <img className="image1" src={image1} alt="Image 1" />
                    <img className="image2" src={image2} alt="Image 2" />
                </div>
                <div className="right-div flex items-center space-x-4 ml-8" >
                    <img className="image1" src={image3} alt="Image 1" />
                    <img className="image2" src={image4} alt="Image 2" style={{ width: '350px', height: '400px' }} />
                </div>
            </div>

            <div style={{ width: '100%', height: '60px', position: 'relative' }}>
                <img src={round} alt="" style={{ marginTop: '-234px', objectFit: 'contain', width: '100%' }} />
                <h1 style={{ position: 'absolute', top: '550%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Mochiy Pop One', fontSize: 40, lineHeight: 1.5 }} >
                    <span className='text-blue-900' >Products</span> Within<br />
                    &nbsp; Your Province
                </h1>

            </div>
            <div className="relative inline-block">
      <div className="flex">
        <input
          type="text"
          placeholder="Select an option"
          className="py-2 px-4 border border-gray-300 rounded-l focus:outline-none"
        />
        <div
          className="cursor-pointer bg-gray-300 p-2 rounded-r"
          onClick={toggleDropdown}
        >
          &#9662; {/* Unicode character for a downward-pointing triangle */}
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-b">
          {/* Dropdown content goes here */}
          <p className="p-2 hover:bg-gray-100 cursor-pointer">Option 1</p>
          <p className="p-2 hover:bg-gray-100 cursor-pointer">Option 2</p>
          <p className="p-2 hover:bg-gray-100 cursor-pointer">Option 3</p>
        </div>
      )}
    </div>
        </>
    );
};

export default Banner;

// import React from 'react';
// import smiley from '../Assets/emo 1.png';
// import image1 from '../Assets/Vector 1.png';
// import image2 from '../Assets/Layer 1.png';

// const Banner = () => {
//   return (
//     <>
//       <div className="flex justify-center">
//         <button className="bg-gray-100 text-blue-700 rounded-full p-2 px-4">UNIQUE CURRY POWDERS</button>
//       </div>
//       <div className="text-center mt-4">
//         <p className="font-bold text-3xl font-mochie" style={{ fontFamily: 'Mochie Pop One', fontSize: 64, lineHeight: 1 }}>
//           <span>
//             Wake Up Your{' '}
//             <img
//               src={smiley}
//               alt="Your Alt Text"
//               className="inline align-middle"
//               style={{ width: '50px', height: '50px' }}
//             />
//           </span>
//           <br />Taste Buds With Us
//         </p>
//       </div>
//       <div className="flex justify-center mt-8">
//         <div className="left-div flex items-center space-x-4">
//           <img className="image1" src={image1} alt="Image 1" />
//           <img className="image2" src={image2} alt="Image 2" />
//         </div>
//         <div className="right-div flex items-center space-x-4">
//           <img className="image1" src={image1} alt="Image 1" />
//           <img className="image2" src={image2} alt="Image 2" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Banner;
