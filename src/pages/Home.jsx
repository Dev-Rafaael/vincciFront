import React, { useState,useEffect,lazy,useRef} from 'react';
import drink3 from '../assets/drink7.jpg';
import drink2 from '../assets/drink6.jpg';
import drink1 from '../assets/drink10.jpg';
import drink4 from '../assets/drink1.jpeg';
import drink12 from '../assets/drink12.webp';
import drink13 from '../assets/drink13.webp';
import videoFile from '../assets/videoDrink.mp4'; 
import seta from '../assets/seta.png';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import { FaPlay } from 'react-icons/fa'; 
import 'aos/dist/aos.css';
import AOS from 'aos';
import LazyLoad from 'react-lazy-load';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 
import { Navigation,Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${classes.customArrow}`}
      style={{ ...style, display: "block", left: "10px" }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${classes.customArrow}`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const targetSectionRef = useRef(null);
  // HOME CARROSEL 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    draggable: true,
  };
// HOME CARROSEL 


// BARTENDERS CARROSSEL

  const openModal = () => {
    setModalIsOpen(true);
  };
  
  const closeModal = () => setModalIsOpen(false);

  // EFEITO DE APARECER 
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });
  }, []);
  const scrollToSection = () => {
    if (targetSectionRef.current) {
 
      const topPosition = targetSectionRef.current.getBoundingClientRect().top + window.scrollY;
      
      
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <>
     
      <main className={classes.home}>
      <div className={classes.homeContent}>
        <Slider {...settings} className={classes.imgHome}>
          <div className={classes.slide}>
            <div className={classes.imgContainer}>
            <LazyLoad>
                  <img src={drink1} alt="Drink 1" className={classes.img} loading={lazy} />
                </LazyLoad>
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.imgContainer}>
            <LazyLoad>
                  <img src={drink2} alt="Drink 2" className={classes.img} loading={lazy} />
                </LazyLoad>
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.imgContainer}>
            <LazyLoad>
                  <img src={drink3} alt="Drink 3" className={classes.img} loading={lazy} />
                </LazyLoad>
              </div>
          </div>
        </Slider>

        {/* Content Section */}
        <div className={classes.contentHome}>
          <h1>Bem Vindo Ao <span>Vincci PUB</span></h1>
          <h3>Deliciosos Drinks</h3>
          <div className={classes.btn}>
            <Link to="#"  onClick={scrollToSection} >Nossos Serviços</Link>
            <Link to="/Pacotes/">Faça Seu Pedido</Link>
          </div>
        </div>

        {/* Video Section */}
        <div className={classes.video} loading={lazy}>
          <div className={classes.videoContainer}>
          <div className={classes.iconContainer}>
            <div className={classes.bola}></div>
            <FaPlay className={classes.playIcon} onClick={openModal} />
          </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              shouldCloseOnOverlayClick={true}
              className={classes.videoModal}
              overlayClassName={classes.videoModalOverlay}
              contentLabel="Video Modal"
            >
              <button onClick={closeModal} className={classes.closeButton}>X</button>
              <iframe
                src="https://www.youtube.com/embed/LXb3EKWsInQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Modal>
          </div>
        </div>
      </div>

   
      <section ref={targetSectionRef} className={classes.sectionCard}>
      <article className={classes.articleCard}>
  <div className={classes.sectionTitle}  data-aos="fade-up">
    <h1>Serviços <span>________</span></h1>
    <h2>Drinks com e sem álcool</h2>
  </div>
  <div className={classes.container}>
    <div className={classes.cardItem} data-aos="fade-up" data-aos-delay="100">
      <span><i className="bi bi-cup-straw"></i></span>
      <h4>Bar de caipirinhas</h4>
      <p>Diversas outras combinações de Frutas e Especiarias para Caipirinhas que agradarão todos os seus convidados!</p>
      <Link to="/Pacotes/">Ver Preços</Link>
    </div>
    <div className={classes.cardItem} data-aos="fade-up" data-aos-delay="100">
      <span><i className="bi bi-cup-straw"></i></span>
      <h4>Coquetéis Clássicos</h4>
      <p>Gin Tônica, Aperol Spritz e diversos outros drinks perfeitos para festas que demandam Elegância e Sofisticação.</p>
      <Link to="/Pacotes/">Ver Preços</Link>
    </div>
    <div className={classes.cardItem} data-aos="fade-up" data-aos-delay="100">
      <span><i className="bi bi-cup-straw"></i></span>
      <h4>Drinks Sem Álcool</h4>
      <p>Grande variedade de Drinks e sabores não alcoólicos para agradar à todos os paladares e conquistar todos os seus convidados. Sem exceções.</p>
      <Link to="/Pacotes/">Ver Preços</Link>
    </div>
  </div>
  </article>
</section>
      <section className={classes.videoSection}>
      <video autoPlay loop muted playsInline >
        <source src={videoFile} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      
      <div className={classes.overlayGradient}></div>
      
      <article className={classes.articleContrate}>
        <div className={classes.contrate} data-aos="fade-up">
          <h3>Sua festa tratada com</h3>
          <h4>Profissionalismo e Respeito</h4>
          <p>Bartenders para aniversários, casamentos, ou qualquer outra comemoração importante para você.
            Estamos prontos para servir todos os seus convidados
            com deliciosos drinks com e sem álcool. Conte com os melhores bartenders para o 
            melhor dia da sua vida!</p>     
        </div>
        <div className={classes.contentBtn}>
            <Link to="/Pacotes/">CONTRATE NOS</Link>
          </div>
      </article>
    </section>
   
<section className={classes.sectionPacotes}>
  <div className={classes.pacoteTitle}>
    <h1>
      Pacotes <span>________</span>
    </h1>
    <h2>Encontre o pacote de drinks ideal para a sua festa</h2>
  </div>

  <div className={classes.sectionContainer}>
    <div className={`${classes.CustomPrevArrowPacotes} CustomPrevArrowPacotes`}>
      <FaArrowLeft size={30} color="#fff" />
    </div>
    <div className={`${classes.CustomNextArrowPacotes} CustomNextArrowPacotes`}>
      <FaArrowRight size={30} color="#fff" />
    </div>
    <Swiper
      observer={true}
      observeParents={true}
      spaceBetween={-45}
      loop={true}
      navigation={{
        nextEl: '.CustomNextArrowPacotes',
        prevEl: '.CustomPrevArrowPacotes',
      }}
      pagination={{ clickable: true }}
      autoplay={true}
      breakpoints={{
        1280: { slidesPerView: 4 },
        1024: { slidesPerView: 3 },
        660: { slidesPerView: 2 },
        480: { slidesPerView: 1 }, 
    320: { slidesPerView: 1 }, 
  
      }}
    >
  <SwiperSlide>
    <div className={classes.pacotes}>
      <LazyLoad>
        <img src={drink1} alt="Pacote 1" />
      </LazyLoad>
      <h2>Drinks sem álcool</h2>
      <p>Bartenders para festas, São Paulo</p>
      <div className={classes.pacotePreco}>
        <p>A partir de R$550,00</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className={classes.pacotes}>
      <LazyLoad>
        <img src={drink1} alt="Pacote 2" />
      </LazyLoad>
      <h2>Barman + lista de compras</h2>
      <p>Bartenders para festas, São Paulo</p>
      <div className={classes.pacotePreco}>
        <p>A partir de R$1.689,99</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
          <div className={classes.pacotes}>
              <LazyLoad>
                <img src={drink4} alt="Pacote 3" />
              </LazyLoad>
              <h2>Drinks com e sem álcool</h2>
              <p>Bartenders para festas, São Paulo</p>
              <div className={classes.pacotePreco}>
                <p>A partir de R$550,00</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.pacotes}>
              <LazyLoad>
                <img src={drink2} alt="Pacote 3" />
              </LazyLoad>
              <h2>Drinks com e sem álcool</h2>
              <p>Bartenders para festas, São Paulo</p>
              <div className={classes.pacotePreco}>
                <p>A partir de R$550,00</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.pacotes}>
              <LazyLoad>
                <img src={drink12} alt="Pacote 3" />
              </LazyLoad>
              <h2>Drinks com e sem álcool</h2>
              <p>Bartenders para festas, São Paulo</p>
              <div className={classes.pacotePreco}>
                <p>A partir de R$550,00</p>
              </div>
            </div>
          </SwiperSlide>
          </Swiper>
      </div>

      {/* Botões de navegação personalizados */}
     

      <div className={classes.maispacote}>
    <Link to="/Pacotes/">VEJA MAIS PACOTES</Link>
  </div>
    </section>


      {/* About Section */}
      <section className={classes.videoSection} >
      <video autoPlay loop muted playsInline >
        <source src={videoFile} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      
      <div className={classes.sobreOverlayGradient}></div>
       
        <article className={classes.sobreArticle}>
        <div className={classes.sobre}  >
          <p >Buscando eventos de qualidade?</p>
          <h3>MUITO PRAZER, SOMOS A <span>VINCCI PUB</span></h3>
          <h5>Fundada em 2003, a <span>vincci</span> tem como missão oferecer o melhor ambiente e 
            estrutura para que você possa se divertir. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, molestias esse! Accusamus quibusdam quam suscipit reprehenderit consequuntur? Commodi id hic ipsam ducimus neque quasi</h5>
          
        </div>
        <div className={classes.sobreBtn}>
            <Link to="/sobre/">SAIBA MAIS</Link>
          </div>
        </article>
        </section>

        <section className={classes.sectionBartenders}>
  <div className={classes.conhecerAmbiente} data-aos="fade-up">
    <figcaption className={classes.frase}>
      CONHEÇA NOSSOS BARTENDERS
    </figcaption>
  </div>
   
    
  <div className={classes.carrosselContainer}>
  <div className={`${classes.CustomPrevArrow} CustomPrevArrow`}>
    <FaArrowLeft size={30} color="#fff" />
  </div>
  <div className={`${classes.CustomNextArrow} CustomNextArrow`}>
    <FaArrowRight size={30} color="#fff" />
  </div>

  <Swiper
  modules={[Navigation]} 
  navigation={{
    nextEl: '.CustomNextArrow',
    prevEl: '.CustomPrevArrow',
  }}
  loop
  autoplay={{ delay: 3000 }}
  spaceBetween={30}
  slidesPerView={1}
  centeredSlides={true}
  breakpoints={{
    1024: { slidesPerView: 3 },
    660: { slidesPerView: 2 },
    480: { slidesPerView: 1 }, 
    320: { slidesPerView: 1 }, 
  }}
>
  
      <SwiperSlide>
        <div className={classes.detalhes} data-aos="fade-up" data-aos-delay="200">
          <figure data-aos="fade-left" data-aos-delay="200">
            <LazyLoad>
              <img src={drink2} alt="foto" />
            </LazyLoad>
          </figure>
          <figcaption className={classes.contentDetalhes}>
            <h1>Vinicius Lima</h1>
            <ul className={classes.listaDetalhes}>
              <li className={classes.list}>Bartender</li>
              <li className={classes.list}>Especialista em Caipirinhas</li>
              <li className={classes.list}>Gosta De Surpreender</li>
              <li className={classes.list}>Organizado</li>
              <li className={classes.listEspecial}>E muito mais...</li>
            </ul>
          </figcaption>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className={classes.detalhes} data-aos="fade-up" data-aos-delay="200">
          <figure data-aos="fade-left" data-aos-delay="200">
            <LazyLoad>
              <img src={drink13} alt="foto" />
            </LazyLoad>
          </figure>
          <figcaption className={classes.contentDetalhes}>
            <h1>Vinicius Lima</h1>
            <ul className={classes.listaDetalhes}>
              <li className={classes.list}>Bartender</li>
              <li className={classes.list}>Especialista em Caipirinhas</li>
              <li className={classes.list}>Gosta De Surpreender</li>
              <li className={classes.list}>Organizado</li>
              <li className={classes.listEspecial}>E muito mais...</li>
            </ul>
          </figcaption>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={classes.detalhes} data-aos="fade-up" data-aos-delay="200">
          <figure data-aos="fade-left" data-aos-delay="200">
            <LazyLoad>
              <img src={drink12} alt="foto" />
            </LazyLoad>
          </figure>
          <figcaption className={classes.contentDetalhes}>
            <h1>Vinicius Lima</h1>
            <ul className={classes.listaDetalhes}>
              <li className={classes.list}>Bartender</li>
              <li className={classes.list}>Especialista em Caipirinhas</li>
              <li className={classes.list}>Gosta De Surpreender</li>
              <li className={classes.list}>Organizado</li>
              <li className={classes.listEspecial}>E muito mais...</li>
            </ul>
          </figcaption>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.detalhes} data-aos="fade-up" data-aos-delay="200">
          <figure data-aos="fade-left" data-aos-delay="200">
            <LazyLoad>
              <img src={drink12} alt="foto" />
            </LazyLoad>
          </figure>
          <figcaption className={classes.contentDetalhes}>
            <h1>Vinicius Lima</h1>
            <ul className={classes.listaDetalhes}>
              <li className={classes.list}>Bartender</li>
              <li className={classes.list}>Especialista em Caipirinhas</li>
              <li className={classes.list}>Gosta De Surpreender</li>
              <li className={classes.list}>Organizado</li>
              <li className={classes.listEspecial}>E muito mais...</li>
            </ul>
          </figcaption>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
</section>
<section className={classes.faqSection} data-aos="fade-up" data-aos-delay="100">
  <div className={classes.faqInfo}>
      <figure className={classes.faqImage}>
        <img src={drink12} alt="Drink Da Casa" />
      </figure>
      
      <article className={classes.faqContent} >
        <header>
          <h1>PERGUNTAS FREQUENTES</h1>
          <p>
            Sample text. Click to select the text box. Click again or double click to start editing the text.
            Image from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a>
          </p>
        </header>
        
        <details className={classes.faqItem}>
          <summary><span>What's included in the quoted daily rate?</span> <img src={seta}  /></summary>
          <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. 
            Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
        </details>

        <details className={classes.faqItem}>
        <summary><span>What's included in the quoted daily rate?</span> <img src={seta}  /></summary>
          <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </details>

        <details className={classes.faqItem}>
        <summary><span>What's included in the quoted daily rate?</span> <img src={seta}  /></summary>
          <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </details>

        <details className={classes.faqItem}>
        <summary><span>What's included in the quoted daily rate?</span> <img src={seta}  /></summary>
          <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </details>
      </article>
      </div>
    </section>
  
  

      </main>
    </>
  );
}

export default Home;
