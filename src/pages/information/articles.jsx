import { useRef, useState, useEffect } from "react";
import './articlesStyles.css';
import cdcImg from './informationImages/CDC.png';
import wcrfImg from './informationImages/WorldCancerResearchFund.png';
import whoImg from './informationImages/WorldHealthOrganization.png';
import nihImg from './informationImages/NationalCancerInstitute.png';
import tsImg from './informationImages/TheSun.png';
import nlmImg from './informationImages/NLM.png';

const Articles = () => {
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef(null)

  const articles = [
    {
      img: cdcImg,
      title: "CDC: Skin Cancer Prevention",
      description: "Tips and guidelines to reduce your risk of skin cancer.",
      url: "https://www.cdc.gov/skin-cancer/prevention/index.html",
    },
    {
      img: wcrfImg,
      title: "Sun, UV Rays and Cancer",
      description: "Too much sun and using sunbeds can both increase your risk of developing skin cancer.",
      url: "https://www.wcrf.org/preventing-cancer/topics/sun-uv-rays-and-cancer/",
    },
    {
      img: whoImg,
      title: "Radiation: Protecting against skin cancer",
      description: "Learn how ultraviolet (UV) radiation from the sun can lead to skin cancer.",
      url: "https://www.who.int/news-room/questions-and-answers/item/radiation-protecting-against-skin-cancer",
    },
    {
      img: nihImg,
      title: "Skin Cancer Prevention (PDQ®)",
      description: "This NCI patient guide outlines skin cancer prevention strategies.",
      url: "https://www.cancer.gov/types/skin/patient/skin-prevention-pdq",
    },
    {
      img: tsImg,
      title: "The Sun: Sunburn & Melanoma Risk",
      description: "Just five sunburns in your lifetime can double your risk of deadly melanoma.",
      url: "https://www.thesun.co.uk/health/34728569/how-many-sunburns-double-risk-melanoma-skin-cancer/",
    },
    {
      img: nlmImg,
      title: "Recognising Skin Cancer in Primary Care",
      description: "80% of skin cancers are considered preventable, primarily through reduction in exposure to the main risk factor, UV radiation.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6969010/",
    },
  ]

  // Duplicate articles to create seamless loop
  const allArticles = [...articles, ...articles]

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return
    if (isPaused) {
      slider.style.animationPlayState = "paused"
    } else {
      slider.style.animationPlayState = "running"
    }

    // Calculate animation duration based on number of cards
    // More cards = longer duration for consistent speed
    const duration = articles.length * 5 // 5 seconds per card
    slider.style.animationDuration = `${duration}s`
  }, [isPaused, articles.length])

  return (
    <div className="article-section">
      <h2 className="article-title">Featured Articles</h2>

      <div className="article-slider-container">
        <div
          className="article-slider"
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {allArticles.map((article, index) => (
            <div
              key={index}
              className="article-card"
              onClick={() => window.open(article.url, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <img src={article.img || "/placeholder.svg"} alt={article.title} className="article-image" />
              <div className="article-overlay">
                <div className="article-heading">{article.title}</div>
                <div className="article-description">{article.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles;
