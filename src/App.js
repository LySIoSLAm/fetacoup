import React, {useRef} from 'react';
import {Button} from "react-bootstrap/Button";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js.map';
import 'bootstrap/dist/js/bootstrap.min.js';
import Logo from './img/logo_fetacoup.png';


function App() {
    const ref = useRef(null)

    function handleClicked(event) {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        ref.current.scrollTo({
            top: ref.current.querySelector(target).offsetTop,
            behavior: 'smooth'
        });
    }

  return (
      <body id="top">
      <header className="d-flex flex-column">
          <div className="container pt-4">
              <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-0">
                  <a className="navbar-brand" href="#">
                    <img src={Logo} alt="Fetacoup Logo" className="img-fluid  w-25 h-auto"/>
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#da-navbarNav" aria-controls="da-navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse text-uppercase" id="da-navbarNav">
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item"><a className="nav-link smooth-scroll" onClick={handleClicked} href="#top">Accueil</a></li>
                          <li className="nav-item"><a className="nav-link smooth-scroll" onClick={handleClicked} href="#learn">boutique</a></li>
                          <li className="nav-item"><a className="nav-link smooth-scroll" onClick={handleClicked} href="#learn">propos</a></li>
                          <li className="nav-item"><a className="nav-link smooth-scroll" onClick={handleClicked} href="#services">Services</a></li>
                          <li className="nav-item"><a className="nav-link smooth-scroll" onClick={handleClicked} href="#projects">l'équipe</a></li>
                          <li className="nav-item"><a className="nav-link smooth-scroll" onClick={handleClicked} href="#gallery">Galerie</a></li>
                          <li className="nav-item"><a className="nav-link smooth-scroll" onClick={handleClicked} href="#contact">Contact</a></li>
                      </ul>
                  </div>
              </nav>
          </div>
          <div className="da-home-page-text flex-grow-1 d-flex align-items-center" data-aos="fade-right" data-aos-duration="1000">
              <div className="container">
                  <div className="col-md-10 col-sm-12 px-0 mx-0">
                      <h2 className="display-3 text-uppercase">Bienvenue sur Fetacoup !</h2>
                      <a className="smooth-scroll btn btn-outline-light mt-4" href="#learn">En savoir plus</a>
                  </div>
              </div>
          </div>
      </header>
      <div className="page-content">
          <div>
              <div className="da-section da-work bg-secondary" id="learn">
                  <div className="container">
                      <div className="h3 pb-3 text-center text-white" data-aos="fade-up">A propos de nous</div>
                      <p className="px-5 pb-5 text-center text-white" data-aos="fade-up">Fé ta coup est un salon de coiffure pour homme qui a été créé en 2020 à quelques mètres de Mc Arthur Glen nous nous situons au 147 rue de Lannoy à Roubaix. <br/>
                      Fé ta coup c'est : </p>
                      <div className="row">
                          <div className="col-md-4">
                              <div className="card mb-3" data-aos="flip-left">
                                  <div className="card-body mt-4 mb-1 text-center"><i
                                      className="pb-3 text-primary fas fa-briefcase fa-3x"></i>
                                      <div className="h4 pb-3">A l'écoute du client</div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="card mb-3" data-aos="zoom-in-up">
                                  <div className="card-body mt-4 mb-1 text-center"><i
                                      className="pb-3 text-primary fas fa-sliders-h fa-3x"></i>
                                      <div className="h4 pb-3">Accueil chalereux</div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="card mb-3" data-aos="zoom-in-up">
                                  <div className="card-body mt-4 mb-1 text-center"><i
                                      className="pb-3 text-primary fas fa-sliders-h fa-3x"></i>
                                      <div className="h4 pb-3">Coiffure rapide</div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="card mb-3" data-aos="flip-right">
                                  <div className="card-body mt-4 mb-1 text-center"><i
                                      className="pb-3 text-primary fas fa-trophy fa-3x"></i>
                                      <div className="h4 pb-3">Coiffure pas cher</div>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="da-section bg-light" id="services">
                  <div className="da-services">
                      <div className="container text-center">
                          <div className="h3 pb-5 text-center" data-aos="fade-up">Our Services</div>
                          <div className="row">
                              <div className="col-lg-3 col-md-6">
                                  <div className="card mb-3">
                                      <div className="card-body py-5" data-aos="zoom-in" data-aos-duration="500">
                                          <div className="text-primary"><i className="pb-3 fas fa-code fa-3x"></i>
                                              <p className="font-weight-bold">Web Design</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                  <div className="card mb-3">
                                      <div className="card-body py-5" data-aos="zoom-in" data-aos-duration="1000">
                                          <div className="text-primary"><i
                                              className="pb-3 fab fa-buromobelexperte fa-3x"></i>
                                              <p className="font-weight-bold">Graphic Design</p>
                                          </div>
                                          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum,
                                              nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                  <div className="card mb-3">
                                      <div className="card-body py-5" data-aos="zoom-in" data-aos-duration="1500">
                                          <div className="text-primary"><i className="pb-3 fas fa-cubes fa-3x"></i>
                                              <p className="font-weight-bold">App Development</p>
                                          </div>
                                          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum,
                                              nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                  <div className="card mb-3">
                                      <div className="card-body py-5" data-aos="zoom-in" data-aos-duration="2000">
                                          <div className="text-primary"><i className="pb-3 fas fa-eye fa-3x"></i>
                                              <p className="font-weight-bold">Application Support</p>
                                          </div>
                                          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum,
                                              nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="da-projects" id="projects">
                  <div className="row mx-0">
                      <div className="col-md-6 px-0 da-project-1"
                           data-aos="zoom-in"></div>
                      <div className="col-md-6 pl-5 pt-5 pb-3">
                          <div className="row">
                              <div className="col-1 da-project-icon"><i
                                  className="text-warning fas fa-user-md fa-2x fa-fw"></i></div>
                              <div className="col-10">
                                  <div className="h4">Healthcare</div>
                                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor
                                      malesuada laoreet tempus blandit pretium etc.</p>
                              </div>
                          </div>
                          <div className="row mb-3">
                              <div className="col-1 da-project-icon"><i
                                  className="text-info fas fa-book fa-2x fa-fw"></i></div>
                              <div className="col-10">
                                  <div className="h4">Education</div>
                                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor
                                      malesuada laoreet tempus blandit pretium etc.</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-1 da-project-icon"><i
                                  className="fas fa-shopping-basket fa-2x fa-fw"></i></div>
                              <div className="col-10">
                                  <div className="h4">Digital Retail</div>
                                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor
                                      malesuada laoreet tempus blandit pretium etc.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row mx-0">
                      <div className="col-md-6 pl-5 pt-5 pb-3">
                          <div className="row mb-3">
                              <div className="col-1 da-project-icon"><i
                                  className="text-warning fas fa-money-bill-alt fa-2x fa-fw"></i></div>
                              <div className="col-10">
                                  <div className="h4">Finance</div>
                                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor
                                      malesuada laoreet tempus blandit pretium etc.</p>
                              </div>
                          </div>
                          <div className="row mb-3">
                              <div className="col-1 da-project-icon"><i
                                  className="text-info far fa-chart-bar fa-2x fa-fw"></i></div>
                              <div className="col-10">
                                  <div className="h4">Marketing</div>
                                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor
                                      malesuada laoreet tempus blandit pretium etc.</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-1 da-project-icon"><i className="fas fa-music fa-2x fa-fw"></i></div>
                              <div className="col-10">
                                  <div className="h4">Entertainment</div>
                                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor
                                      malesuada laoreet tempus blandit pretium etc.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 px-0 da-project-2"
                           data-aos="zoom-in"></div>
                  </div>
              </div>
              <div className="da-expertise">
                  <div className="row mx-0">
                      <div className="col-md-6 px-0 da-exp-image"
                           data-aos="zoom-in"></div>
                      <div className="col-md-6 da-exp-skills">
                          <div className="container text-uppercase">
                              <h3 className="h5 mb-5">Our Expertise</h3>
                              <div className="col px-0 mb-4">
                                  <p>Graphic Design 90%</p>
                                  <div className="progress">
                                      <div className="progress-bar" data-aos="progress-full" data-aos-offset="10"
                                           data-aos-duration="2000" role="progressbar"
                                           aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">

                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="da-section bg-secondary text-white">
                  <div className="container">
                      <div className="row px-4">
                          <div className="col-md-3 col-sm-6">
                              <div className="media py-2" data-aos="flip-up"><i
                                  className="mr-3 fas fa-clipboard-check  fa-3x fa-fw"></i>
                                  <div className="media-body">
                                      <div className="h5">1575</div>
                                      <div className="h6">Projects Done</div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-6">
                              <div className="media py-2" data-aos="flip-up"><i
                                  className="mr-3 fas fa-smile  fa-3x fa-fw"></i>
                                  <div className="media-body">
                                      <div className="h5">1245</div>
                                      <div className="h6">Happy Clients</div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-6">
                              <div className="media py-2" data-aos="flip-up"><i
                                  className="mr-3 fas fa-file-alt fa-3x fa-fw"></i>
                                  <div className="media-body">
                                      <div className="h5">865</div>
                                      <div className="h6">Appreciations</div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-6">
                              <div className="media py-2" data-aos="flip-up"><i
                                  className="mr-3 fas fa-clock  fa-3x fa-fw"></i>
                                  <div className="media-body">
                                      <div className="h5">8565</div>
                                      <div className="h6">Working Hours</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="da-section">
                  <div className="container">
                      <div className="h3 text-center" data-aos="fade-up">Meet our Team Members</div>
                  </div>
                  <div className="da-team carousel slide py-5" id="da-carouselIndicator" data-ride="carousel"
                       data-aos="zoom-in-up" data-aos-duration="1000">
                      <div className="container">
                          <ol className="carousel-indicators">
                              <li className="active" data-target="#da-carouselIndicator" data-slide-to="0"></li>
                              <li data-target="#da-carouselIndicator" data-slide-to="1"></li>
                          </ol>
                          <div className="carousel-inner">
                              <div className="carousel-item active">
                                  <div className="row">
                                      <div className="col-md-4">
                                          <div className="card d-block mb-3">
                                              <img className="card-img-top" src="#" alt="image"/>
                                              <div className="card-body text-center">
                                                  <div className="h5">Pamela Lopez</div>
                                                  <p className="text-muted">CEO</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  <div className="row">

                                      <div className="col-md-4">
                                          <div className="card d-block mb-3">
                                              <img className="card-img-top" src="#" alt="image"/>
                                              <div className="card-body text-center">
                                                  <div className="h5">Jeremy Little</div>
                                                  <p className="text-muted">Software Developer</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container da-gallery" id="gallery">
                  <div className="h3 pb-5 text-center" data-aos="fade-up">Photo Gallery</div>
                  <div className="card-columns">
                      <div className="card">
                          <a href="#" data-toggle="lightbox" data-gallery="da-gallery">
                              <img className="img-fluid" src="#" alt="Gallery Image 5"/>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="da-section">
                  <div className="container da-company-brand py-5">
                      <div className="h3 pb-3 text-uppercase text-center" data-aos="fade-up">Featured in</div>
                      <p className="pb-3 text-center" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur
                          adipiscing elit primis rutrum, <br/>nullam tempor malesuada laoreet tempus</p>
                      <div className="row">
                          <div className="col-md-3 text-center">
                              <img className="img-fluid" src="#" alt="Company Image 1"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="da-section da-brand bg-secondary">
                  <div className="container text-center text-white">
                      <div className="carousel slide pb-5" id="da-brand-carouselIndicator" data-ride="carousel">
                          <ol className="carousel-indicators">
                              <li className="active" data-target="#da-brand-carouselIndicator" data-slide-to="0"></li>
                              <li data-target="#da-brand-carouselIndicator" data-slide-to="1"></li>
                              <li data-target="#da-brand-carouselIndicator" data-slide-to="2"></li>
                          </ol>
                          <div className="carousel-inner">
                              <div className="carousel-item active">
                                  <div className="row justify-content-center">
                                      <div className="col-md-8">
                                          <p>"Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat tellus
                                              sociosqu ornare, morbi risus urna tincidunt mus curabitur vel non massa
                                              natoque. Pretium tristique eget nulla sem condimentum ligula eu ultrices
                                              convallis, ridiculus nibh bibendum posuere consequat tempus blandit
                                              donec."</p>
                                          <div className="h6 text-uppercase">Lorem Ipsum</div>
                                      </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  <div className="row justify-content-center">
                                      <div className="col-md-8">
                                          <p>"Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat tellus
                                              sociosqu ornare, morbi risus urna tincidunt mus curabitur vel non massa
                                              natoque. Pretium tristique eget nulla sem condimentum ligula eu ultrices
                                              convallis, ridiculus nibh bibendum posuere consequat tempus blandit
                                              donec."</p>
                                          <div className="h6 text-uppercase">Lorem Ipsum</div>
                                      </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  <div className="row justify-content-center">
                                      <div className="col-md-8">
                                          <p>"Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat tellus
                                              sociosqu ornare, morbi risus urna tincidunt mus curabitur vel non massa
                                              natoque. Pretium tristique eget nulla sem condimentum ligula eu ultrices
                                              convallis, ridiculus nibh bibendum posuere consequat tempus blandit
                                              donec."</p>
                                          <div className="h6 text-uppercase">Lorem Ipsum</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="da-contact" id="contact">
                  <div className="da-contact-detail" data-aos="zoom-in" data-aos-duration="1000">
                      <div className="container">
                          <div className="card py-4 px-4">
                              <div className="h4 pb-4">Contact Us</div>
                              <div className="row">
                                  <div className="col-md-7 col-sm-12 mb-3">
                                      <div className="da-contact-message">
                                          <form action="https://formspree.io/your@email.com" method="POST">
                                              <div className="row">
                                                  <div className="col-md-6 col-sm-12 mb-3">
                                                      <input className="mr-3 form-control" type="text" name="first-name"
                                                             placeholder="*First Name" required="required"/>
                                                  </div>
                                                  <div className="col-md-6 col-sm-12 mb-3">
                                                      <input className="form-control" type="text" name="last-name"
                                                             placeholder="Last Name"/>
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <div className="col">
                                                      <input className="form-control" type="text" name="Subject"
                                                             placeholder="*Subject" required="required"/>
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <div className="col">
                                                      <input className="form-control" type="email" name="_replyto"
                                                             placeholder="*E-mail" required="required"/>
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <div className="col">
                                                      <textarea className="form-control" name="message"
                                                                placeholder="*Your Message" rows="4"
                                                                required="required"></textarea>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  <div className="col">
                                                      <button className="btn btn-primary" type="submit">Send</button>
                                                  </div>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                                  <div className="col-md-5">
                                      <p>Non dis torquent conubia neque duis enim lectus, dictumst bibendum nam lacinia
                                          faucibus sollicitudin consequat tortor, mattis taciti sem arcu pellentesque
                                          quisque.</p>
                                      <p><b>Address:</b> 568, Hill Road, USA</p>
                                      <p><b>Phone:</b> +1 802-457-1144</p>
                                      <p><b>Email:</b> info@example.com</p>
                                      <p><b>Fax:</b> +1 502-257-1156</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <footer className="bg-secondary da-section">
          <div className="container text-white">
              <div className="row">
                  <div className="col-md-5">
                      <div className="h2 mb-4">Digital Agency</div>
                      <p className="mb-3">info@digitalagency.com</p>
                      <p>+1 502-257-1157</p>
                  </div>
                  <div className="col-md-4">
                      <div className="h6 pb-2">Follow Us</div>
                      <ul>
                          <li className="mb-1"><a className="da-social-link" href="#"><i className="fab fa-twitter"
                                                                                         aria-hidden="true"></i><span
                              className="ml-2">Twitter</span></a></li>
                          <li className="mb-1"><a className="da-social-link" href="#"><i className="fab fa-facebook-f"
                                                                                         aria-hidden="true"></i><span
                              className="ml-2">Facebook</span></a></li>
                          <li className="mb-1"><a className="da-social-link" href="#"><i className="fab fa-instagram"
                                                                                         aria-hidden="true"></i><span
                              className="ml-2">Instagram</span></a></li>
                          <li className="mb-1"><a className="da-social-link" href="#"><i className="fab fa-youtube"
                                                                                         aria-hidden="true"></i><span
                              className="ml-2">Youtube</span></a></li>
                      </ul>
                  </div>
                  <div className="col-md-3">
                      <div className="h6 pb-4">Copyright</div>
                      <p className="pb-1">&copy; Digital Agency. All rights reserved.</p>
                      <p>Design - <a className="credit" href="https://templateflip.com" target="_blank">TemplateFlip</a>
                      </p>
                  </div>
              </div>
          </div>
      </footer>
      <div id="scrolltop">
          <button className="btn btn-primary"><span className="icon"><i className="fas fa-angle-up fa-2x"></i></span>
          </button>
      </div>

      </body>

  );
}

export default App;
