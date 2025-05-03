import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import '../components/Drink/drink.css';
import '../components/Banner/banner.css';
import '../components/Footer/footer.css';
import '../components/Menu/menu.css';
import '../components/Gallery/gallery.css';
import '../components/Contact/contact.css';
import '../components/Header/header.css';
import '../components/Layer/layer.css';

import { Header } from '../components/Header/header.jsx';
import { Banner } from '../components/Banner/banner.jsx';
import { Menu } from '../components/Menu/menu.jsx';
import { Gallery } from '../components/Gallery/gallery.jsx';
import { Contact } from '../components/Contact/contact.jsx';
import { Footer } from '../components/Footer/footer.jsx';

const response = await fetch('http://localhost:4000/api/drinks');
const body = await response.json();
console.log(body);
const drinks = body.data;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

document.querySelector('.nav-btn').addEventListener('click', () => {
  document.querySelector('.rollout-nav').classList.toggle('nav-closed');
});

document.querySelector('.rollout-nav').addEventListener('click', () => {
  document.querySelector('.rollout-nav').classList.add('nav-closed');
});
