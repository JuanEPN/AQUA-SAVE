import useSlider from "../../stores/use-slider";
import "./Slider2.css";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from 'react-router-dom'; 

const Card = ({ item }) => {
  const navigate = useNavigate(); 

  return (
    <div className="card-slider2">
      <h1 className="title2">{item.title}</h1>
      <p className="content2">{item.content}
      </p>


      <button
        className="redirect-button2"
        onClick={() => navigate(item.redirectTo)} 
      >
        Ir a la página
      </button>
    </div>
  );
};

function Slider2() {
  const { slider, setSlider, data } = useSlider();

  return (
    <>
      <div className={`${slider ? "open" : "close"} container-slider2`}>
        <div style={{ position: "relative" }}>
          <button className="close-button2" onClick={() => setSlider(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </button>

          <Carousel fade>
            {data.map((item, index) => (
              <Carousel.Item key={index}>
                <Card item={item} /> 
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Slider2;