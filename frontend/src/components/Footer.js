import React from 'react';

class Footer extends React.Component {
  render() {
    const style = { border: "1px solid darkcyan", padding: "1rem", margin: "1rem" };
    return (
      <div className="footer navbar-fixed-bottom"r" style={style}>Hello Footer</div>
    )
  }
}

export default Footer;
