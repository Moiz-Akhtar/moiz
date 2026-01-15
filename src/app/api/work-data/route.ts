import { NextResponse } from "next/server";

const workData = [
    {
        image: "/images/work/nutrislife.jpg",
        title: "Website Development & Optimization",
        client: "Nutrislife",
        //slug: "nutrislife-web-design"
    },
    {
        image: "/images/work/999.jpg",
        title: "Website Development and Maintainance",
        client: "Nine Ninety Nine",
        //slug: "florent-development"
    },
    {
        image: "/images/work/florentpakistan.webp",
        title: "Website Development and Maintainance",
        client: "Florent Pakistan",
        //slug: "florent-development"
    },
    {
        image: "/images/work/Travel & More.jpg",
        title: "Website Design & development",
        client: "Travel & More",
       // slug: "travel-website-template"
    },
    {
        image: "/images/work/ostruce.jpg",
        title: "Website Development",
        client: "Ostruce",
       // slug: "ostruce-design"
    },
    {
        image: "/images/work/Matchless Adventures.jpg",
        title: "Website Maintainance & upgradation",
        client: "Matchbox Advertising",
       // slug: "adventures-upgradation"
    },
    {
        image: "/images/work/Mariam Javaid Law Associates.jpg",
        title: "MJLA | Website Development",
        client: "Matchbox Advertising",
       // slug: "mjla-development"
    },
    {
        image: "/images/work/Matchless travels Inc.jpg",
        title: "Website Development & Maintainance",
        client: "Matchbox Advertising",
       // slug: "matchless-travels"
    }
];




export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
