import { GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/public/images/myImage.jpg" alt="" width="120px" />
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
                        <a href="mailto:kutbuddinkhan82@gmail.com" className="contact-link">kutbuddinkhan82@gmail.com</a>
                    </div>
                </li>
                <li className="contact-item">
                    <div className="icon-box">
                        <GiPhone />
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">PHONE</p>
                        <a href="tel:+919284038562" className="contact-link">+91 9284038562</a>
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

            
      </div>
    </aside>
  );
};

export default Sidebar;
