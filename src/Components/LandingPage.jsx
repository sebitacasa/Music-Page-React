 import React from "react";
 import { Link } from "react-router-dom";
 import './landing.css'





 export function LandingPage(){

   
    
    
     return (
         <body className="bodyL">
                   <header id="header">
        <nav class = "menu">
        
            <div class = "logo-box">
                <h1><a href="#">DJs Tacos</a></h1>
                <span class="btn-menu"><i class="fab fa-wolf-pack-battalion"></i></span>
                
            </div>
        
            <div class="list-container">
                <ul class="lists">
                    <li><a href="#" class="activo">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Blog</a></li>
                    
                    <Link to= "/form">
                    <li><a href="#" className="contacto">Contacto</a></li>
                    </Link>
                </ul>
            </div>
        
        </nav>
        
      
        <div class="img-header">
            <div class = "Welcome">
                <h1>Welcome to DJ's Tacos</h1>
                
                <p>DJ recruitment </p>
                <button id="abajo">see below</button>
            </div>
        </div>
        
        </header>

        <main>

<section class="acerca-de">

<div class="info-container">
    <h1>Acerca de Nosotros</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, nulla minus? Exercitationem, similique dolore laborum quod maiores dolores officiis eius inventore tempora voluptas deleniti repellat iusto tenetur, dolor blanditiis alias.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam molestias qui deserunt fugiat delectus iusto, natus veniam voluptatibus expedita sint sed magnam quasi. Blanditiis iste eum aperiam optio veniam!</p>

    <div class="about-gallery">
    <img src={require('../images/our 1.jpg')} />
       <img src={require('../images/our 2.jpg')}/> 
       <img src={require('../images/our 3.jpg')}/> 
    </div>

    <div class="about-more"><button>Leer mas</button></div>

</div>
</section>


<section class= "our-project">

    <div class="deg-background"></div>

    <div class="ejeZproject">
        <div class="container-project">
            <div class="project-tittle">
             <h2>Nuestras presentaciones</h2>   
             
            </div>


            <div class="project-img">
                <img src={require('../images/dj.jpg')} alt=""/>
                <img src={require('../images/dj 2.jpg')} alt=""/>
                <img src={require('../images/dj3.jpg')} alt=""/>
                <img src={require('../images/dj4.jpg')} alt=""/>
            </div>
        </div>
    </div>
</section>



</main>


<footer class="footer" >

<div class="deg-footer"></div>

    <div class="ejeZfooter" >
        <div class="footer-content" >
<div class="footer-text">
                  <p>&copy; Dj's London | Todos los derechos reservados</p>
              </div> 

        </div>

    </div>

</footer>

        </body>
        

     )
 }