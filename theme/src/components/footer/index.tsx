import React, {FunctionComponent} from "react";
import {MenuItem} from "../../utils/models";
import {Copyright, DesignBy, FooterContainer, FooterMenuItem, FooterMenuLink, StyledFooter, StyledNav} from "./style";

interface FooterProps {
  menu: MenuItem[];
  owner: string;
}

const Footer: FunctionComponent<FooterProps> = ({menu, owner}) => (
  <StyledFooter>
    <FooterContainer>
      <StyledNav>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              {/* Links to RSS and Sitemap are handled
                  differently (for now) since they're technically external links */}
              {['/rss.xml', '/sitemap.xml'].indexOf(item.path) >= 0
                ? <FooterMenuItem href={item.path} rel={`noopener noreferrer`}>{item.name}</FooterMenuItem>
                : <FooterMenuLink to={item.path}>{item.name}</FooterMenuLink>
              }
            </li>
          ))}
        </ul>
      </StyledNav>
      <div>
        <Copyright>
          <strong>FUES&nbsp;LABS&trade; {owner.toUpperCase()}</strong>&nbsp;&copy; {new Date().getFullYear()}
        </Copyright>
        <DesignBy>
          <a href={`https://labs.fues.us/`} target="_blank"><span>fues&nbsp;</span>labs&trade;</a>
        </DesignBy>
      </div>
    </FooterContainer>
  </StyledFooter>
);

export default Footer;
