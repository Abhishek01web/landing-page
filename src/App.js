import './App.scss';

function App() {
  return (
    <>
     <div className="container">
        <div className="content">
         <h2>Hello !</h2>
          <p> I'm Abhishek chauhan . A creative developer and designer. I like to create unique and more creative website and graphics that live on internet. If you have SomeThink for me , please contact.<br /> "Let's Make"</p>
          <a href="tel:6378933312">Call</a>
        </div>
        <div className="contact">
          <form name="contact" method="POST" data-netlify="true" >
            <h1 id='heading'>Contact Me</h1>
            <input type="text" name="name" id="name" placeholder='Your Name ?' required />
            <input type="number" name="number" id="number" placeholder='your Number ?' required />
            <input type="email" name='email' id='email' placeholder='email' required />
            <textarea name="msg" id="msg" cols="30" rows="3" placeholder="what's your Questions ?"></textarea>
            <button type='submit' >send</button>
          </form>
        </div>
     </div>
    </>
  );
}

export default App;

// echo "# landing-page" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Abhishek01web/landing-page.git
// git push -u origin main
