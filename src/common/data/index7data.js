import card1 from "../../assets/images/01.jpg"
import card2 from "../../assets/images/02.jpg"
import card3 from "../../assets/images/03.jpg"
import card4 from "../../assets/images/04.jpg"
import topTranding1 from "../../assets/images/116.jpg"
import topTranding2 from "../../assets/images/215.jpg"
import topTranding3 from "../../assets/images/314.jpg"
import artical1 from "../../assets/images/218.jpg"
import artical2 from "../../assets/images/318.jpg"
import postList1 from "../../assets/images/126.jpg"
import postList2 from "../../assets/images/223.jpg"
import postList3 from "../../assets/images/321.jpg"
import postList4 from "../../assets/images/414.jpg"
import postList5 from "../../assets/images/513.jpg"
import post1 from "../../assets/images/610.jpg"
import post2 from "../../assets/images/83.jpg"
import post3 from "../../assets/images/74.jpg"
import post4 from "../../assets/images/92.jpg"
import news1 from "../../assets/images/137.jpg"
import news2 from "../../assets/images/233.jpg"
import news3 from "../../assets/images/331.jpg"
import news4 from "../../assets/images/419.jpg"
import video from "../../assets/video/sample.mp4"
import image2 from "../../assets/images/best-way.jpg"

const sidebardata = {
  topSearches: [
    "Business",
    "Games",
    "Sports",
    "Marketing",
    "Election",
    "News",
    "Social media",
    "Statistics",
    "Holidays",
    "Cricket",
    "Festivals",
  ],
  socialLinks: [
    {
      platform: "Facebook",
      icon: "ri-facebook-fill",
      bgColor: "#3b579d",
      hoverColor: "#314881",
    },
    {
      platform: "Twitter",
      icon: "ri-twitter-x-fill",
      bgColor: "#2caae1",
      hoverColor: "#1d95c9",
    },
    {
      platform: "LinkedIn",
      icon: "ri-linkedin-fill",
      bgColor: "#004182",
      hoverColor: "#0056b3",
    },
    {
      platform: "Instagram",
      icon: "ri-instagram-line",
      bgColor: "linear-gradient(to right, #863FA6, #E12C61, #F46F46)",
      hoverColor: "linear-gradient(to right, #683181, #c91d50, #f25626)",
    },
    {
      platform: "YouTube",
      icon: "ri-youtube-fill",
      bgColor: "#e6291b",
      hoverColor: "#b81f14",
    },
  ],
}

const cardData = [
  {
    id: 1,
    imageSrc: card1,
    category: "Technology",
    title:
      "Friday Deals On Gaming Laptops Tablet PC Market By Exponential Growth",
    author: "John Doe",
    timeAgo: "7 Months Ago",
    link: "/single-post",
    share: true,
  },
  {
    id: 2,
    imageSrc: card2,
    category: "Technology",
    title: "The Best Early Black Friday Deals On Gaming Laptops Accessories",
    author: "John Doe",
    timeAgo: "7 Months Ago",
    link: "/single-post",
  },
  {
    id: 3,
    imageSrc: card3,
    category: "Technology",
    title: "The Best Early Black Friday Deals On Gaming Laptops Accessories",
    author: "John Doe",
    timeAgo: "7 Months Ago",
    link: "/single-post",
  },
  {
    id: 4,
    imageSrc: card4,
    category: "Technology",
    title: "The Best Early Black Friday Deals On Gaming Laptops Accessories",
    author: "John Doe",
    timeAgo: "7 Months Ago",
    link: "/single-post",
  },
]

const cardList = [
  {
    category: "Technology",
    title: "One Plus Will Focus On A Premium Build Over Camera Performance",
    description:
      "To understand the new smart watched and other pro devices of recent focus, we should look to Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    author: "John Doe",
    date: "7 Months Ago",
    imgSrc: topTranding1,
    imgAlt: "post image",
  },
  {
    category: "Technology",
    title: "One Plus Will Focus On A Premium Build Over Camera Performance",
    description:
      "To understand the new smart watched and other pro devices of recent focus, we should look to Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    author: "John Doe",
    date: "7 Months Ago",
    imgSrc: topTranding2,
    imgAlt: "post image",
  },
  {
    category: "Music",
    title: "One Plus Will Focus On A Premium Build Over Camera Performance",
    description:
      "To understand the new smart watched and other pro devices of recent focus, we should look to Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    author: "John Doe",
    date: "7 Months Ago",
    imgSrc: topTranding3,
    imgAlt: "post image",
  },
]

const simpleCard = [
  {
    imgSrc: artical1,
    imgAlt: "post",
    category: "Technology",
    title: "Google Says Surveillance Vendor Targeted Samsung Phones",
    author: "Armin Vans",
    date: "August 7, 2024",
  },
  {
    imgSrc: artical2,
    imgAlt: "post",
    category: "Technology",
    title: "Google Says Surveillance Vendor Targeted Samsung Phones",
    author: "Armin Vans",
    date: "August 7, 2024",
  },
]

const listsData = {
  posts1: [
    {
      id: 1,
      image: postList1,
      title: "The Power Of Big Data In The Fashion Decision Making.",
      author: "John Doe",
      date: "7 Months Ago",
    },
    {
      id: 2,
      image: postList2,
      title: "Best tech accessories 10 work from home essentials",
      author: "John Doe",
      date: "7 Months Ago",
    },
    {
      id: 3,
      image: postList3,
      title: "The fashion trends and li edelkoort the culture shock",
      author: "John Doe",
      date: "7 Months Ago",
    },
    {
      id: 4,
      image: postList4,
      title: "Festival style made a triumphant the fashion return",
      author: "John Doe",
      date: "7 Months Ago",
    },
    {
      id: 5,
      image: postList5,
      title: "The Power Of Big Data In The Fashion Decision Making",
      author: "John Doe",
      date: "7 Months Ago",
    },
  ],
  posts2: [
    {
      id: 1,
      image: post1,
      category: "Style",
      title: "The Power Of Big Data In The Fashion Decision Macking",
    },
    {
      id: 2,
      image: post2,
      category: "Gadgets",
      title: "The Power Of Big Data In The Fashion Decision Macking",
    },
    {
      id: 3,
      image: post3,
      category: "Furniture",
      title: "The Power Of Big Data In The Fashion Decision Macking",
    },
    {
      id: 4,
      image: post4,
      category: "Foods",
      title: "The Power Of Big Data In The Fashion Decision Macking",
    },
  ],
}

const cardGrid = [
  {
    imgSrc: news1,
    title: "Winter Dressing Tips When It’s The Really Cold Fashion",
    category: "Drinks",
    author: "Alex H. Hilixzer",
    date: "April 05, 2024",
  },
  {
    imgSrc: news2,
    title: "Winter Dressing Tips When It’s The Really Cold Fashion",
    category: "Drinks",
    author: "Alex H. Hilixzer",
    date: "April 05, 2024",
  },
  {
    imgSrc: news3,
    title: "Winter Dressing Tips When It’s The Really Cold Fashion",
    category: "Drinks",
    author: "Alex H. Hilixzer",
    date: "April 05, 2024",
  },
  {
    imgSrc: news4,
    title: "Winter Dressing Tips When It’s The Really Cold Fashion",
    category: "Drinks",
    author: "Alex H. Hilixzer",
    date: "April 05, 2024",
  },
]

const section6data = [
  {
    type: "video",
    source: video,
    title: "The Best Early Black Friday Deals On Gaming Laptops Accessories",
    description:
      "To understand the new smart watches and other pro devices of recent focus, we should look to Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    author: "John Doe",
    date: "7 Months Ago",
    category: null,
    image: null,
  },
  {
    type: "image",
    image: image2,
    title: "The Best Early Black Friday Deals On Gaming Laptops Accessories",
    description:
      "To understand the new smart watches and other pro devices of recent focus, we should look to Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    author: "John Doe",
    date: "7 Months Ago",
    category: "Technology",
  },
]

export {
  cardData,
  sidebardata,
  cardList,
  simpleCard,
  listsData,
  cardGrid,
  section6data,
}
