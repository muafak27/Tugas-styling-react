import logo from './logo.svg';
import './App.css';
import Navbar from './komponen/Navigation';
import Image from './komponen/Image';
import BlogPribadi from './komponen/BlogPribadi';
import Footer from './komponen/Footer';

function App() {
  return (
    <body className='body'>
      {/* Navbar */}
      <div className='Navbar'>
        <Navbar />
      </div>
      {/* Image */}
      <div >
        <Image />
        <BlogPribadi />
        <Footer />
      </div>


    </body>
  );
}

export default App;
