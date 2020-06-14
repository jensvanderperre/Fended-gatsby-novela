import React from 'react';
import svglogo from 'src/assets/fended-branding.svg'
/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return <img src={svglogo} height="30px" />;
   

}
