import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className='footer-distributed'>
        <div className='footer-left'>
          <img src='' alt='' />

          <p className='footer-links'>
            <Link to='#'>Home</Link> ·<Link to='#'>About</Link> ·
            <Link to='#'>Pricing</Link> ·<Link to='#'>About</Link> ·
            <Link to='#'>Faq</Link> ·<Link to='#'>Contact</Link>
          </p>

          <p className='footer-company-name'>Bangin &copy; 2018</p>
        </div>

        <div className='footer-center'>
          <div>
            <i className='fa fa-map-marker'></i>
            <p>
              <span>21 Revolution Street</span> Rutland, VT
            </p>
          </div>

          <div>
            <i className='fa fa-phone'></i>
            <p>911</p>
          </div>

          <div>
            <i className='fa fa-envelope'></i>
            <p>
              <Link to='mailto:support@company.com'>support@company.com</Link>
            </p>
          </div>
        </div>

        <div className='footer-right'>
          <p className='footer-company-about'>
            <span>About this guy</span> Blah Blah..Blah blah bl;ah blah
          </p>

          <div className='footer-icons'>
            <Link to='#'>
              <i className='fa fa-facebook'></i>
            </Link>
            <Link to='#'>
              <i className='fa fa-twitter'></i>
            </Link>
            <Link to='#'>
              <i className='fa fa-linkedin'></i>
            </Link>
            <Link to='#'>
              <i className='fa fa-github'></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
