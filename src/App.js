import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <div className='logo'>
          <span>Start Bootstrap</span>

          <ul>
            <li><a href="#" className='grayText'>Home</a></li>
            <li><a href="#" className='grayText'>About</a></li>
            <li><a href="#" className='grayText'>Contact</a></li>
            <li><a href="#" className='blackText'>Blog</a></li>
          </ul>
        </div>
      </header>

      <main>
        <section className="welcome">
          <h1>Welcome to Blog Home!</h1>
          <p>A Bootstrap 5 starter layout for your next blog homepage</p>
        </section>

        <section className="post">
          <div className="featurePost">
            <div className="postImg">
              <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="" />

              <div className="postImgbody">
                <p className='grayText'>January 1, 2023</p>
                <h1>Featured Post Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                <button className='btn'>Read more</button>
              </div>
            </div>
          </div>

          <div className="label">
            <div className='searchlabel labelCards'>
              <p className='labelHead'>Search</p>

              <div className='labelBody'>
                <input type="text" placeholder='Enter search term...'/>
                <button>Go!</button>
              </div>
            </div>

            <div className='catagoriesLabel labelCards'>
              <p className='labelHead'>Categories</p>

              <div className='labelBody'>
                <div>
                <a href="">Web Design</a>
                <a href="">HTML</a>
                <a href="">Freebies</a>
                </div>

                <div>
                  <a href="">JavaScript</a>
                  <a href="">CSS</a>
                  <a href="">Tutorials</a>
                </div>
              </div>
            </div>

            <div className='widgetLabel labelCards'>
              <p className='labelHead'>Site Widgets</p>

              <p className='labelBody'>You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</p>
            </div>
          </div>
        </section>

        <section className="cards">
          <div className="card">
            <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />

            <div className="postCardbody">
              <p className='grayText'>January 1, 2023</p>
              <h1>Featured Post Title</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla</p>
              <button className='btn'>Read more</button>
            </div>
          </div>

          <div className="card">
            <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />

            <div className="postCardbody">
                <p className='grayText'>January 1, 2023</p>
                <h1>Featured Post Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla</p>
                <button className='btn'>Read more</button>
            </div>
          </div>

          <div className="card">
            <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />

            <div className="postCardbody">
                <p className='grayText'>January 1, 2023</p>
                <h1>Featured Post Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla</p>
                <button className='btn'>Read more</button>
            </div>
          </div>

          <div className="card">
            <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />

            <div className="postCardbody">
                <p className='grayText'>January 1, 2023</p>
                <h1>Featured Post Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla</p>
                <button className='btn'>Read more</button>
            </div>
          </div>
        </section>

        <section className='btns'>
          <div>
            <button className='newerBtn'>Newer</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>15</button>
            <button className='olderBtn'>Older</button>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <p>Copyright © Your Website 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
