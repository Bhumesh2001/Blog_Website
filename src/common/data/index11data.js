import imageSix1 from "../../assets/images/layout-11/6/1.jpg"
import imageSix2 from "../../assets/images/layout-11/6/2.jpg"
import imageSix3 from "../../assets/images/layout-11/6/3.jpg"

const cardData = [
  {
    icon: "ri-search-line",
    title: "Competitor Research",
    description:
      "Ignorant branched humanity led now marianne too strongly entrance. Rose to shew bore no ye of paid rent form. Old design are dinner here etc.",
    link: "single-post.html",
  },
  {
    icon: "ri-store-2-line",
    title: "Social media marketing",
    description:
      "Ignorant branched humanity led now marianne too strongly entrance. Rose to shew bore no ye of paid rent form. Old design are dinner here etc.",
    link: "single-post.html",
  },
  {
    icon: "ri-search-eye-line",
    title: "Keyword Research",
    description:
      "Ignorant branched humanity led now marianne too strongly entrance. Rose to shew bore no ye of paid rent form. Old design are dinner here etc.",
    link: "single-post.html",
  },
  {
    icon: "ri-store-line",
    title: "Content Marketing",
    description:
      "Ignorant branched humanity led now marianne too strongly entrance. Rose to shew bore no ye of paid rent form. Old design are dinner here etc.",
    link: "single-post.html",
  },
]

const projectData = [
  {
    image: imageSix1,
    category: "DIGITAL MARKETING",
    title: "Remarketing Campaign",
    link: "single-post.html",
    alt: "1",
  },
  {
    image: imageSix2,
    category: "DIGITAL MARKETING",
    title: "Email Campaign",
    link: "single-post.html",
    alt: "2",
  },
  {
    image: imageSix3,
    category: "DIGITAL MARKETING",
    title: "Social Media Ad Campaign",
    link: "single-post.html",
    alt: "3",
  },
]

const plans = [
  {
    label: "Cheapest Plan",
    labelColor: "#2B8D1A",
    title: "REGULAR plan",
    price: "$1000",
    description:
      "Individuals or small startups testing the waters or the small to medium require with minimal testing.",
    buttonText: "Get A Started",
    features: [
      { text: "basic analytics and reporting tools & data", included: true },
      { text: "basic access to core features", included: true },
      { text: "standard security protocols features", included: true },
      { text: "advanced security options", included: true },
      { text: "full access to library & monthly q & a", included: false },
    ],
  },
  {
    label: "Best Plan",
    labelColor: "#FC2517",
    title: "OPTIMAL plan",
    price: "$40",
    description:
      "Individuals or small startups testing the waters or the small to medium require with minimal testing.",
    buttonText: "Get A Started",
    features: [
      { text: "basic analytics and reporting tools & data", included: true },
      { text: "basic access to core features", included: true },
      { text: "standard security protocols features", included: true },
      { text: "advanced security options", included: false },
      { text: "full access to library & monthly q & a", included: false },
    ],
  },
  {
    label: "ON SALE",
    labelColor: "#4B3DB7",
    title: "UNLIMITED plan",
    price: "$200",
    description:
      "Individuals or small startups testing the waters or the small to medium require with minimal testing.",
    buttonText: "Get A Started",
    features: [
      { text: "basic analytics and reporting tools & data", included: true },
      { text: "basic access to core features", included: true },
      { text: "standard security protocols features", included: true },
      { text: "advanced security options", included: true },
      { text: "full access to library & monthly q & a", included: true },
    ],
  },
]

export { cardData, projectData, plans }
