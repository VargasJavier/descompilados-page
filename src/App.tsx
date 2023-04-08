import logoNew from './assets/logoNew.png'
import canalYoutube from './assets/canalYoutube.jpg'
import futbol from './assets/futbol.jpg'
import cine from './assets/cine.jpg'
import music from './assets/music.jpg'
import './index.css'

function App() {

  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 hover:text-white cursor-pointer" href='#aboutMe'>Nosotros</a>
            <a className="mr-5 hover:text-white cursor-pointer" href='#planes'>Planes</a>
            <a className="mr-5 hover:text-white cursor-pointer" href='#testimonials'>Testimonios</a>
            <a className="hover:text-white cursor-pointer" href='#projects'>Proyectos</a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0" href='/'>
            <div className='bg-gradient-to-r from-[#ef4444] from-0% to-[#111827] to-50% rounded-full'>
              <img className='w-10 h-10' src={logoNew} alt="Logo de Descompilados"/>
            </div>
            <span className="ml-3 text-xl xl:block lg:hidden">Descompilados</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <a href="https://www.youtube.com/@Descompilados">
              <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                Visitar canal
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </header>

      <section className="text-gray-400 h-[90vh] flex items-center bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img className="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/2361600/pexels-photo-2361600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">La simplicidad es la clave
              <br className="hidden lg:inline-block"/> de la brillantez.
            </h1>
            <p className="mb-8 leading-relaxed">Contáctame, charlemos con una asesoría gratuita y escojamos lo mejor para tu proyecto. Te recomiendo escuchar propuestas alternas y escoger la que mejor te parezca. <span className='font-bold'>Aquí lo importante es tu negocio.</span></p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"><a href="https://wa.me/51923200599">Contactar</a></button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"><a href="#aboutMe">Acerca de nosotros</a></button>
            </div>
          </div>
        </div>
      </section>
      <section id='aboutMe' className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-2xl mb-2 text-white">Los números no mienten</h1>
              <div className="leading-relaxed">Contamos con un canal en donde compartimos todo tipo de conocimiento. Además de tener diversos clientes a los largo del camino.</div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-white">+39K</h2>
              <p className="leading-relaxed">Vistas</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-white">+500</h2>
              <p className="leading-relaxed">Suscriptores</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-white">+10</h2>
              <p className="leading-relaxed">Proyectos</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-white">2 años</h2>
              <p className="leading-relaxed">Experiencia</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img className="object-cover object-center w-full h-full" src={canalYoutube} alt="stats"/>
          </div>
        </div>
      </section>
      <section id='projects' className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Algunos de nuestros proyectos</h1>
              <div className="h-1 w-20 bg-red-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Los proyectos mostrados son de código abierto. Quiere decir que podrás reutilizar su código totalmente gratis. No es necesario darme los créditos por eso, solo te pido usarlo sabiamente.</p>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={futbol} alt="content"/>
                <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">Ecommerce</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Venta de camisetas</h2>
                <p className="leading-relaxed text-base">Creación de un ecommerce para la venta de camisetas relacionados a la fiebre del mundial Rusia 2018.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={cine} alt="content"/>
                <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">Catálogo</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Lista de películas</h2>
                <p className="leading-relaxed text-base">Con la ayuda de una llamado a una API, disfruta de ver las últimas novedades de películas que se han estrenado.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={music} alt="content"/>
                <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">Reproductor</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Foxbel Music</h2>
                <p className="leading-relaxed text-base">Disfruta de tu música en un solo lugar, con el reproductor de música FOXBEL. Tu música a tu alcance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-red-400 tracking-widest font-medium title-font mb-1">CONOCIENDO LO QUE QUIERO</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">¿Qué hacer si no tengo claro lo que quiero?</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Descuida, a todos nos ha pasado. Es algo muy común y no hay que avergonzarse por ello. Te recomiendo tomar una asesoría totalmente gratuita pero de todas formas de dejo opciones como guía de qué podrías necesitar. ¡Suerte!</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Necesito una página web</h2>
              <p className="leading-relaxed text-base mb-4">Si quieres una página para tu negocio. Debes tener claro para qué lo quieres, saber si ya cuentas con un diseño, una marca de empresa, y con qué frecuencia requerirás una actualización</p>
              <a className="text-red-400 inline-flex items-center">Quiero una
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Necesito actualizar mi página</h2>
              <p className="leading-relaxed text-base mb-4">Si ya cuentas con una página, quizá lo que necesites es que mejoren los tiempo de carga, el SEO (esto sirve para que encuentren tu página más rápido), una actualización de los datos, rediseño, entre otras cosas.</p>
              <a className="text-red-400 inline-flex items-center">Lo quiero
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Necesito un sistema de ventas</h2>
              <p className="leading-relaxed text-base mb-4">Tengo un negocio y necesito crear o actualizar una aplicación que me ayude a automatizar mi inventario, ventas o algún proceso que me toma tiempo hacerlo de forma manual. Debo tener claro en qué dispositivo lo usaré, cuántas personas lo tendrán, etc...</p>
              <a className="text-red-400 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id='planes' className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Planes</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Escoge el plan que mejor se acomode a lo que necesites. Podemos agendar una <br /><span className='bg-red-500 text-white font-bold px-2 py-1 rounded-lg'>reunión sin costo</span> para evaluarlo.</p>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">INICIO</h2>
                <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">Gratis</h1>
                <p className="flex items-center text-gray-400 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Asesoría especializada
                </p>
                <p className="flex items-center text-gray-400 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Solución de pequeños BUGS
                </p>
                <p className="flex items-center text-gray-400 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Alcance de requerimientos
                </p>
                <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Obtener gratis
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-400 mt-3">* Sin letras pequeñas. Es gratis :)</p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-red-500 flex flex-col relative overflow-hidden">
                <span className="bg-red-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">PRO</h2>
                <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                  <span>$150</span>
                  <span className="text-lg ml-1 font-normal text-gray-400">/usd</span>
                </h1>
                <p className="flex items-center text-gray-400 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Diseño responsive
                </p>
                <p className="flex items-center text-gray-400 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Creación de la página
                </p>
                <p className="flex items-center text-gray-400 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Máximo 6 requerimientos
                </p>
                <p className="flex items-center text-gray-400 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Entrega de código final
                </p>
                <button className="flex items-center mt-auto text-white bg-red-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-red-600 rounded">LO QUIERO
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-400 mt-3">* En caso de exceder la cantidad de requerimientos, el precio puede variar. Previa conversación con el cliente.</p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">DESDE</h2>
                <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                  <span>$30</span>
                  <span className="text-lg ml-1 font-normal text-gray-400">/usd</span>
                </h1>
                <p className="flex items-center text-gray-400 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mantenimiento de página
                </p>
                <p className="flex items-center text-gray-400 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Actualización de información
                </p>
                <p className="flex items-center text-gray-400 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mejora de SEO
                </p>
                <p className="flex items-center text-gray-400 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mejora en tiempo de carga
                </p>
                <p className="flex items-center text-gray-400 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Automatización de funciones
                </p>
                <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Adquirir oferta
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-400 mt-3">* Este plan aplica para páginas ya existentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='testimonials' className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">Y recuerda que...<br />Lo único imposible es lo que no intentas.</p>
            <span className="inline-block h-1 w-10 rounded bg-red-500 mt-8 mb-6"></span>
            <h2 className="text-white font-medium title-font tracking-wider text-sm">JAVIER VARGAS</h2>
            <p className="text-gray-500">Fundador de Descompilados</p>
          </div>
        </div>
      </section>
      {/* <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/302x302"/>
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/300x300"/>
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/305x305"/>
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img className='w-12' src={logoNew}/>
            <span className="ml-3 text-xl">Descompilados</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2019 Descompilados —
            <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@descompilados</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-400">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default App
