import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import GamesSection from './components/games-section';
// import '../style.css';

// componentDidMount() {
//   const wow = new WOW({
//       offset: 100,
//       mobile: false,
//       live: true
//   })

//   wow.init();
// }
function App() {

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <title>Tamra Games</title>
      </head>
      <body>
        <Header />
        <GamesSection />
        <Footer />
      </body>
      <script src="script/script.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      <script src="script/wow.min.js"></script>
      {/* <script>
          wow.init();
      </script> */}
    </html>
  )
}

export default App
