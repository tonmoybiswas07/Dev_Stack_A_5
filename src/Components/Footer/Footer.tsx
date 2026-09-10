import footerImg from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="border-t border-gray-200">
      <div className="container mx-auto">
        <div className="top-footer py-20 px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-4">
            <div className="footer-image flex justify-center md:items-center md:justify-start items-start">
              <img src={footerImg} alt="footer image" />
            </div>
            <p className="text-center md:text-left">
              Curated tools, technologies, and resources for developers building{" "}
              <br />
              modern software.
            </p>
            <div className="link flex justify-center items-center md:justify-start md:items-center gap-6 list-none no-underline font-bold">
              <li>
                <a href="">GitHub</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">LinkedIn</a>
              </li>
            </div>
          </div>
          <div className="hidden md:flex">
            <ul className="space-y-2">
              <h2 className="font-bold">PRODUCT</h2>
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <ul className="space-y-2">
              <h2 className="font-bold">COMPANY</h2>
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <ul className="space-y-2">
              <h2 className="font-bold">LEGAL</h2>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="flex justify-between items-center p-4">
            <p className="text-[12px] md:text-base">© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex justify-between items-center gap-3 text-[12px] md:text-base">
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
