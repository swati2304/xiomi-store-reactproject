import React from "react";


const Footer = () => {
    // Define the data for the footer
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const title = "Lorem Ipsum";
  
    const columns = [{
      title: "Column 1",
      resources: [{
        name: "Item 1",
        link: "/item1"
      },{
        name: "Item 2",
        link: "/item2"
      },{
        name: "Item 3",
        link: "/item3"
      },{
        name: "Item 4",
        link: "/item4"
      }]
    },{
      title: "Column 2",
      resources: [{
        name: "Item 5",
        link: "/item5"
      },{
        name: "Item 6",
        link: "/item6"
      }]
    },{
      title: "Column 3",
      resources: [{
        name: "Item 7",
        link: "/item7"
      },{
        name: "Item 8",
        link: "/item8"
      }]
    }];
  
  }
  
  export default Footer;