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
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ROOT_PAGE as root, CATALOG_PAGE as linkToCatalog, PRODUCT_PAGE as linkToProduct, ABOUT_PAGE as linkToAbout, CONTACTS_PAGE as linkToContacts, CART_PAGE as linkToCart} from './config/links';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <main className='container'>
        <div className='row'>
          <div className='col'>
            <Banner />
            <Routes>
              <Route path={root()} exact element={<MainPage/>}/>
              <Route path={linkToAbout()} exact element={<AboutPage/>}/>
              <Route path={linkToCart()} exact element={<CartPage/>}/>
              <Route path={linkToCatalog()} exact element={<CatalogPage/>}/>
              <Route path={linkToContacts()} exact element={<ContactsPage/>}/>
              <Route path={linkToProduct(':id')} element={<ProductPage/>}/>
              <Route path='*' element={<Page404/>}/>
            </Routes>
          </div>
        </div>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
