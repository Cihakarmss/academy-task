import './App.css'
import Card from './Card'

const data=[
    {id: 1,
    title: "Crescent Mall",
    description:
      "100-dən çox dünya markaları, ailələr üçün yeni konseptli restoranlar, oyun zonaları və alış-veriş imkanları...",
    image: "public/cersent.webp", 
   
  },
  {
    id: 2,
    title: "PizzaHut",
    description:
      "Super Supreme Pizza, Firkadel Pizza və daha çox dadlı seçimlər...",
    image: "public/pizzahut.png",
    
  },
  {
    id: 3,
    title: "Baku Prod",
    description:
      '"Bakuprod" MMC 2015-ci ildən bəri Azərbaycanın qida sektorunda lider şirkət kimi fəaliyyət göstərir...',
    image: "public/bakuprod.png",
    
  },
  {
    id: 4,
    title: "FOMO BAKU",
    description:
      "Bakının mərkəzində yerləşən FOMO digital gece klublarının manzarasını dəyişdirmək hədəfi ilə yaradılıb...",
    image: "public/fomo.png",
    
  },
  {
    id: 5,
    title: "Evrascon",
    description:
      "The leading project development and construction company from Azerbaijan, 56 years in the making.",
    image: "public/evcarson.png",
    
  },
  {
    id: 6,
    title: "Azərbaycan Respublikasının Ali Məhkəməsi",
    description:
      "Azərbaycan Ali Məhkəməsi rəsmi websaytı.",
    image: "public/ali mehkeme.png",
    
  },
];




function App() {
  return(
    
    <>
  
        <nav>
        <div className="container">
            <div className="nav_content">
                <div className="nav_logo">
                <img src="public/logo.svg"  />
                </div>
                <div class="nav_links">
                    <a href="">Biz kimik?</a>
                    <a href="">Layiheler</a>
                    <a href="">Bloq</a>
                    <div className="leanguage">
                        <a href="">AZ</a>
                        <div class="icon-chevron-down"></div>
                        <div className="leanguage_menu">
                            
                            <div>EN</div>
                            
                        </div>
                    </div>
                    <button>Layihem var</button>
                    
                </div>
            </div>
        </div>
        </nav>
        <header>
            <div className="section_home">
                <div className="main_content">
                    <h2><span>MilliÖn, AsanPay, Hökumət Ödəniş Portalını</span>  biz
                            hazırladıq. Yaratdığımız həllər bu gün ölkəmizin
                            rəqəmsal infrastruktunun ayrılmaz bir hissəsinə çevrilib.
                            Vebsayt, mobil tətbiqlərin hazırlanması, rəqəmsal
                            marketinq sahəsində qabaqcıl təcrübəyə sahibik.
                            <p>Biz yaradırıq, milyonlar yararlanır.</p>
                            <time datetime="2004-cü ildən">2004-cü ildən</time>
                            </h2>
                            
                </div>
            </div>
            
        </header>
        <section>
            <div className="container2">
                <div className="flex">
                    <div className="col-6">
                      {data.map((data) => ( 
                        <Card 
                        image={data.image} 
                        title={data.title} 
                        descraption={data.description}/>))}
                       
                    </div>    
                </div>
            </div>
        </section>
        <section className="services-section">
        <div className="container">
            <h2 className="section-title">Xidmətlərimiz</h2>
            
            <div className="services-grid">
                
                <div className="service-card">
                    <div className="service-icon box-icon">
                        <div className="box-top"></div>
                        <div className="box-bottom"></div>
                    </div>
                    <h3 className="service-title">Məhsul yanaşması</h3>
                    <p className="service-description">
                        Hər şey istehləkçıların tələblərinin öyrənilməsi ilə başlayır. 
                        Yaratdığımız məhsullar analiz zamanı əldə etdiyimiz məlumatlar və 
                        böyük bazar təcrübəsindən əldə etdiyimiz biliklər əsasında hazırlanır.
                    </p>
                </div>
                
                
                <div className="service-card">
                    <div className="service-icon document-icon">
                        <div className="doc"></div>
                        <div className="doc"></div>
                        <div className="doc"></div>
                    </div>
                    <h3 className="service-title">Dövlət sektoru və böyük biznes</h3>
                    <p className="service-description">
                        Sektora xas olan yüksək təhlükəsizlik tələbləri, dövlət standartları ilə 
                        sənədləşmələr, mürəkkəb təsdiq sistemləri ilə böyük iş təcrübəmiz 
                        var, büdcə və iş vaxtını effektiv idarə edirik.
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    
  
  

    </>
  )

  
    
}

export default App
