import './informationStyles.css';
import CountUp from '../../components/CountUpEffect/CountUp.jsx'
import headerImage from '../../pages/information/informationImages/headerImage.png'

const InformationSection = () => {
  return (
    <div className="information-container">
      <div className='header-image-container'>
        <img src={headerImage} alt="Skin Cancer Awareness" className="header-image" />
        <h1 className="header-text">Discover Your Answers Here</h1>
      </div>
      <div className="count-up-line">
          <h1>Approximately</h1>
          <CountUp
            from={0}
            to={9500}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
          <h1>people are diagnosed with skin cancer every day</h1>
        </div>

      <div className="info-box">

        <h2>Risks and Causes of Skin Cancer</h2>
        <p>
        Skin cancer is primarily caused by prolonged exposure to ultraviolet (UV) radiation from the sun or tanning beds. 
        UV rays damage skin cells over time, leading to abnormal growth and, in some cases, cancerous tumors. 
        People with fair skin, a history of frequent sunburns, or excessive mole growth are at higher risk. 
        Other risk factors include genetics, a weakened immune system, and exposure to harmful chemicals. 
        Those who spend long hours outdoors without protection or use tanning beds regularly are particularly vulnerable. 
        While skin cancer can develop at any age, older individuals and those with a family history of the disease should be especially cautious.
        Detecting skin cancer early is crucial, as it can spread if left untreated. 
        Monitoring moles and skin changes can help with early diagnosis and improve treatment outcomes.
        </p>

        <h2>Reducing Your Skin Cancer Risk</h2>
        <p>
        The best way to reduce the risk of skin cancer is by protecting your skin from UV radiation. 
        Apply a broad-spectrum sunscreen with SPF 30 or higher daily, even on cloudy days.
        Reapply every two hours, especially when swimming or sweating. Wearing protective clothing, such as hats, long sleeves, and sunglasses, can also shield your skin from harmful rays. 
        Avoid tanning beds, as they emit concentrated UV radiation that increases the risk of skin cancer. 
        Seek shade during peak sun hours (10 AM - 4 PM) and stay hydrated to maintain skin health. 
        Regular self-examinations and dermatologist visits are essential for early detection. 
        If you notice new or changing moles, irregular spots, or persistent skin lesions, consult a doctor immediately. 
        By taking these preventive measures, you can significantly lower your risk and maintain healthy skin.
        </p>
      </div>

    </div>
  );
};

export default InformationSection;
