import './css/Home.css';
import Tree from '../components/Tree';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
      <section className="columns">
        <Tree 
          name="Live Oak"
          description="Doesn't lose it's leaves"
          image="images/liveoak.jpg"/>
        <Tree 
          name="Dogwood"
          description="Flowers in spring"
          image="images/dogwood.jpg"/>
      </section>
    </>
  );
};

export default Home;
