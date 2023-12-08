import { Link } from 'react-router-dom';
import './Contact.css'

function Contact() {
  return (
    <div className='desktop'>
      <div className='div2'>
        <div class="overlap-10">
          <div class="rectangle-2">
            <Link to="/" class="link">Qui sommes nous ?</Link>
            <Link to="/" class="link">Notre solution</Link>
            <Link to="/" class="link">Nos avantages</Link>
            <Link to="/" class="link">L'application</Link>
          </div>
          <Link to="/contact">
            <div class="CTA-decouvrir">
              <div class="div-wrapper">
                <div class="text-wrapper-8">Nous contacter</div>
              </div>
            </div>
          </Link>
          <div class="rectangle-3"></div>
          <img class="logo-bleu-dys" alt="Logo" src="./Logo.png" />
        </div>
        <div className="overlap-24">
          <div className="overlap-wrapper"></div>
          <div className="CTA-decouvrir-2">
            <div className="overlap-20">
              <div className="text-wrapper-14">
                Devenir BTA
              </div>
            </div>
          </div>
          <svg width="1367" height="621" viewBox="0 0 1367 621" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-22 4L1216.57 0.43321C1299.58 0.194157 1367 67.4211 1367 150.433V502.431C1367 585.105 1300.11 652.193 1217.43 652.431L-22 656V4Z" fill="#023436"/>
          </svg> 
          <div className="text-wrapper-21">
            Deviens l'un des <span>premiers</span> à tester notre solutions:
          </div>
          <svg className="vector" width="371" height="95" viewBox="0 0 371 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.00001 27C2.34615 5.76908 240.769 4.99999 267.667 4.99999C282.864 4.99999 298.511 3.84042 313.444 6.55554C327.14 9.04557 339.568 5.0301 353 11C355.712 12.2054 371.321 15 365 15C358.185 15 351.37 15 344.556 15C317.786 15 287.957 18.2485 262.778 27.4444C246.929 33.2327 231.007 35.9966 214.778 40.1111C206.654 42.1705 200.117 45 212.778 45C230.062 45 247.312 42.7897 264.556 43C272.824 43.1008 272.514 45.4675 269.444 53.2222C267.334 58.5539 263.485 66.2821 261.889 71.8889C248.832 117.765 265.703 57.3799 263 79" stroke="#FCBD25" stroke-width="9" stroke-linecap="round"></path>
          </svg>
          <input type="text" className="inputFirstName input" placeholder="Prénom" />
          <input type="text" className="inputName input" placeholder="Nom"/>
          <input type="email" className="inputEmail input" placeholder="Email"/>
          <input type="password" className="inputPassword input" placeholder="Mot de passe"/>
          <img className="bh-x" alt="perso kid" src="./img/perso-kid.png"/>
        </div>
        <img className="logo-bleu-dys-3" alt="Logo bleu dys" src="./Logo.png" />
          <p className='address2'>
            26 rue villette 69003, LYON
          </p>
          <p className='copyright2'>
            @Copyright
          </p>
      </div>
      <div>
        <img className="chat-boot" alt="Chat boot" src="./img/chat-bot.png" />
      </div>
    </div>  
  );
}

export default Contact;
