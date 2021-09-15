import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer class='footer-distributed'>
        <div class='footer-left'>
          <img src='' alt='' />

          <p class='footer-links'>
            <Link to='#'>Home</Link> ·<Link to='#'>About</Link> ·
            <Link to='#'>Pricing</Link> ·<Link to='#'>About</Link> ·
            <Link to='#'>Faq</Link> ·<Link to='#'>Contact</Link>
          </p>

          <p class='footer-company-name'>Bangin &copy; 2018</p>
        </div>

        <div class='footer-center'>
          <div>
            <i class='fa fa-map-marker'></i>
            <p>
              <span>21 Revolution Street</span> Rutland, VT
            </p>
          </div>

          <div>
            <i class='fa fa-phone'></i>
            <p>911</p>
          </div>

          <div>
            <i class='fa fa-envelope'></i>
            <p>
              <a href='mailto:support@company.com'>support@company.com</a>
            </p>
          </div>
        </div>

        <div class='footer-right'>
          <p class='footer-company-about'>
            <span>About this guy</span> Blah Blah..Blah blah bl;ah blah
          </p>

          <div class='footer-icons'>
            <Link href='#'>
              <i class='fa fa-facebook'></i>
            </Link>
            <Link href='#'>
              <i class='fa fa-twitter'></i>
            </Link>
            <Link href='#'>
              <i class='fa fa-linkedin'></i>
            </Link>
            <Link href='#'>
              <i class='fa fa-github'></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
