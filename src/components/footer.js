const Footer = ({ copyright, icp }) => {
  return (
    <div className="app-footer">
      <div className="footer-content">
        <span className="fn-pr-20">{copyright}</span>
        <span>{icp}</span>
      </div>
    </div>
  );
};

export default Footer;
