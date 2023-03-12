import React from "react";

import config from "../config";

import RedirectIcon from "../assets/icons/redirect.svg";
import LogoIcon from "../logo.svg";

import "./LinkTree.css";

const LinkTree = () => {
  return (
    <div className="linktree-container">
      <header>
        <div className="linktree-official-logo">
          <img src={config.logoUrl} alt="app logo" />
        </div>
        <div className="linktree-desc">{config.description}</div>
      </header>
      <section className="linktree-main">
        {config.links.map((link) => {
          return (
            <a
              href={link.redirectUrl}
              target="_blank"
              rel="noreferrer"
              key={link.key}
            >
              <div className="linktree-link">
                <div className="linktree-link-info">
                  <span className="linktree-link-logo">
                    <img src={link.iconUrl} alt="link logo" />
                  </span>
                  <span className="linktree-link-label">{link.label}</span>
                </div>
                <span>
                  <img src={RedirectIcon} alt="external link" />
                </span>
              </div>
            </a>
          );
        })}
      </section>
      <footer>
        <div
          className="linktree-footer"
          onClick={(e) => window.open("https://spheron.network")}
        >
          <span className="linktree-powered-text">Powered By </span>
          <span className="sph-logo">
            <img src={LogoIcon} alt="spheron logo" height="25px" />
          </span>
        </div>
      </footer>
    </div>
  );
};

export default LinkTree;
