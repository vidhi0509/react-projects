// import React from 'react'
// import Profile from './ProfileClass'
// import ProfileFunctional from './Profile'
// import UserContext from '../utils/UserContext'

// // const About = () => {
// //   return (
// //     <div>
// //       <h1>About Us Page</h1>
// //       <ProfileFunctional name={"Vidhi"}/>
// //       <Profile name={"Vidhi"}/>
// //     </div>
// //   )
// // }

// class About extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log("Parent Constructor")
//   }

//   componentDidMount() {
//     console.log("Parent componentDidMount")
//   }

//   render() {
//     console.log("Parent render")
//      return (
//       <div>
//         <h1>About Us Page</h1>
//         <UserContext.Consumer>
//           {({user}) => <h4 className='font-bold '>{user.name}</h4>}
//         </UserContext.Consumer>
//         <ProfileFunctional name={"Vidhi"}/>
//         {/* <Profile name={"Vidhi"}/> */}
//     </div>
//     )
//   }
// }

// export default About

// AboutUs.js

import React from "react";

const About = () => {
  return (
    <>
        <h1 className="text-4xl font-bold text-center mb-6 p-2">About Us</h1>
        <p className="text-lg text-center mb-8">Welcome to FoodVilla!!</p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="p-2 max-w-screen-md">
            <p className="text-lg mb-4">
              "FoodVilla" is a user-friendly mobile application designed to
              streamline the process of ordering food from a variety of
              restaurants. With an intuitive interface and robust features,
              FoodVilla aims to enhance the dining experience for users by
              providing a convenient platform to browse menus, place orders, and
              track deliveries with ease.
            </p>
          </div>
        </div>
      </>
  );
};

export default About;
