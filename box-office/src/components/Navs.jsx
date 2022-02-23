import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './Navs.styled';

const Links = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

function Navs() {
  const location = useLocation();

  return (
    <div>
      <NavList>
        {Links.map(item => (
          <li key={item.to}>
            <LinkStyled className={item.to === location.pathname} to={item.to}>
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
}

export default memo(Navs);
