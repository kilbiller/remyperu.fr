import React from 'react';

interface Props {
  color?: string;
  children: React.ReactNode;
}

const HighlightedText: React.FC<Props> = ({ color = '#FFD700', children }) => {
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <svg
        width="100%"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      >
        <path
          stroke={color}
          strokeWidth={30}
          d="M0 20
		  C102.18064698650947 29.6847688352349,
		188.0139267345225 20.506686429785603
		352.8373161459804 33.14176782575763"
        ></path>
      </svg>
      {children}
    </span>
  );
};

export default HighlightedText;
