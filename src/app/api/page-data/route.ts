import { NextResponse } from "next/server";
import { title } from "process";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "official.moizakhtar@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:official.moizakhtar@gmail.com"
    },
    {
      type: "phone",
      label: "+92 303 3533388",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+923033533388"
    },
    {
      type: "website",
      label: "moizakhtar.com",
      icon: "/images/icon/web-icon.svg",
      link: "https://moiz-sooty.vercel.app/"
    }
  ],
  socialItems: [
   // {
   //   platform: "dribbble",
   //   icon: "/images/icon/dribble-icon.svg",
   //   link: "https://dribbble.com"
  //  },
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/moiz-abdul-rauf/"
    },
   // {
   //   platform: "facebook",
   //   icon: "/images/icon/facebook-icon.svg",
   //   link: "https://facebook.com"
   // }
  ]
};


const educationData = {
  education: [
    {
      title: "Master of Computer Science (MCS) – 2018",
      description: "Institute of Management and Sciences, Lahore"
    },
    {
      title: "Bachelor of Science (2015)",
      description: "University of the Punjab, Lahore"
    },
    {
      title: "Professional Web Development Experience – 2016 to Present",
      description: "Hands-on industry experience working with WordPress, Shopify, frontend & backend technologies, and real-world client projects across multiple domains."
    }
  ],
  skills: [
    {
      name: "Wordpress",
      icon: "/images/home/education-skill/cdnlogo.com_wordpress.svg",
      rating: 5
    },
    {
      name: "Shopify",
      icon: "/images/home/education-skill/shopify-2.svg",
      rating: 5
    },
    {
      name: "Photoshop",
      icon: "/images/home/education-skill/photoshop-icon.svg",
      rating: 3
    },
    {
      name: "Frontend Languages",
      icon: "/images/home/education-skill/html+css+javascript.png",
      rating: 4
    },
    {
      name: "Framer",
      icon: "/images/home/education-skill/framer-icon.svg",
      rating: 5
    },
    {
      name: "Webflow",
      icon: "/images/home/education-skill/Webflow New.svg",
      rating: 4
    }
  ]
}

const contactLinks = {
  socialLinks: [
    {
      title: "Dribble",
      href: "/"
    },
    {
      title: "Facebook",
      href: "/"
    },
    {
      title: "LinkedIn",
      href: "/"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "hello@imsruthi.com",
      link: "mailto:hello@imsruthi.com"
    },
    {
      type: "phone",
      label: "+901 5588 2500",
      link: "tel:+90155882500"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
