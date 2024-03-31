import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaXTwitter,
} from "react-icons/fa6";
import {
  GiClawSlashes,
  GiMailbox,
  GiMayanPyramid,
  GiPhone,
} from "react-icons/gi";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/images/myImage.jpg" alt="" width="120px" />
        </figure>

        <div className="info-content">
          <h1 className="name">Kutbuddin Khan</h1>
          <p className="title">Full Stack Developer</p>
        </div>

        <button className="info_more-btn">
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>

      {/* contact info */}
      <div className="sidebar-info_more">
        <hr className="separator2" />

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:kutbuddinkhan82@gmail.com"
                className="contact-link"
              >
                kutbuddinkhan82@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>

            <div className="contact-info">
              <p className="contact-title">PHONE</p>
              <a href="tel:+919284038562" className="contact-link">
                +91 9284038562
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Mumbai, Maharashtra, India</address>
            </div>
          </li>
        </ul>

        <hr className="separator2" />

        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/khan-kutbuddin-839a741bb/" target="_blank" className="social-link">
              <FaLinkedin />
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/KutbuddinKhan" target="_blank" className="social-link">
              <FaGithub />
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.instagram.com/k_khan2001" target="_blank" className="social-link">
              <FaInstagram />
            </a>
          </li>

          <li className="social-item">
            <a href="https://twitter.com/Kutbudd32979485" target="_blank" className="social-link">
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
