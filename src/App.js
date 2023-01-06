import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import MainPage from './components/MainPage/MainPage';
import AboutPage from './components/AboutPage/AboutPage';
import CartPage from './components/CartPage/CartPage';
import CatalogPage from './components/CatalogPage/CatalogPage';
import ContactsPage from './components/ContactsPage/ContactsPage';
import ProductPage from './components/ProductPage/ProductPage';
import Page404 from './components/Page404/Page404';
import Footer from './components/Footer/Footer';

// import { ROOT_PAGE as root, CATALOG_PAGE as linkToCatalog, PRODUCT_PAGE as linkToProduct, ABOUT_PAGE as linkToAbout, CONTACTS_PAGE as linkToContacts, CART_PAGE as linkToCart } from './config/links';

function App() {

  return (
    <>
      <Header/>
      <main className='container'>
        <div className='row'>
          <div className='col'>
            <Banner />
            <MainPage/>
            <AboutPage/>
            <CartPage/>
            <CatalogPage/>
            <ContactsPage/>
            <ProductPage/>
            <Page404/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
