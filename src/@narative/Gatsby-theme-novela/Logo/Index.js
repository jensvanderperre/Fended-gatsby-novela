import React from 'react';
import logo from 'src/assets/fended-branding.svg'
/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
   
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="991" height="605" viewBox="0 0 991 605"><defs><radialGradient id="a" cx="0.5" cy="0.5" r="0.604" gradientTransform="matrix(-0.929, -0.369, -0.435, 1.094, 1.182, 0.138)" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#ff2600"/><stop offset="1" stop-color="#fd7900"/></radialGradient><filter id="b" x="283" y="0" width="462" height="462" filterUnits="userSpaceOnUse"><feOffset input="SourceAlpha"/><feGaussianBlur stdDeviation="29" result="c"/><feFlood flood-color="#fd6100"/><feComposite operator="in" in2="c"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-63 98)"><text transform="translate(63 417)" font-size="300" font-family="Caslon335-Bold, Caslon335" font-weight="700" letter-spacing="-0.041em"><tspan x="0" y="0">Fended</tspan></text><g transform="matrix(1, 0, 0, 1, 63, -98)" filter="url(#b)"><circle cx="144" cy="144" r="144" transform="translate(370 87)" fill="url(#a)"/></g><g transform="translate(142 241)" fill="#fff" stroke="#fff" stroke-width="1"><rect width="66" height="127" stroke="none"/><rect x="0.5" y="0.5" width="65" height="126" fill="none"/></g><path d="M-1704,2938.637s20.227.9,30.186-6.991,9.65-24.57,9.65-24.57h7.3l23.365,85.462h-8.954s-3.241-17.79-20.684-32.623S-1704,2948.122-1704,2948.122Z" transform="translate(1844 -2637.124)" stroke="#000" stroke-width="1"/><text transform="translate(1017 178)" font-size="45" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="41">®</tspan></text></g></svg>
  );

}
