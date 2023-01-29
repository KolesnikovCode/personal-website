import React, { memo } from "react";
import styled from "styled-components";
import { Reveal, Tween } from "react-gsap";

import { ReactComponent as GithubLogo } from "../../static/icons/github.svg";
import { ReactComponent as TelegramLogo } from "../../static/icons/telegram.svg";
import { ReactComponent as MailLogo } from "../../static/icons/mail.svg";

const SectionWrapper = styled.section`
  height: calc(100vh - 64px);
  min-height: 500px;
  background: ${(props) => props.theme.colors.sectionBg};

  @media screen and (max-width: 576px) {
    min-height: 100vh;
  }

  .contacts {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 48px;

    &__content {
      height: 100%;

      &-text {
        text-align: center;
        max-width: 700px;
        color: ${(props) => props.theme.colors.mainTextColor};
        padding-top: 24px;

        h1 {
          padding-bottom: 16px;
        }
      }
    }

    &__elements {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: -4px 0;

      &-item {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.colors.mainTextColor};
        text-decoration: none;
        margin: 4px 0;
        opacity: 0;

        svg {
          margin-right: 8px;
          width: 24px;
          height: 24px;

          fill: ${(props) => props.theme.colors.mainTextColor};
        }
      }
    }
  }
`;

const CONTACTS = [
  {
    text: "Github",
    link: "https://github.com/KolesnikovCode",
    Icon: <GithubLogo />,
  },
  {
    text: "Telegram",
    link: "https://t.me/kolesnikov_dev",
    Icon: <TelegramLogo />,
  },
  {
    text: "Email",
    link: "mailto: yuri.kolesnikov.dev@gmail.com",
    Icon: <MailLogo />,
  },
];

const Contacts = () => {
  return (
    <SectionWrapper id="contacts">
      <Reveal repeat>
        <Tween from={{ opacity: 0 }} duration={1}>
          <div className="contacts">
            <div className="contacts__content-text">
              <h1>Контакты</h1>
            </div>

            <div className="contacts__elements">
              <Tween
                from={{ x: -40, opacity: 0 }}
                to={{ x: 0, opacity: 1 }}
                stagger={0.2}
                ease="elastic.out(0.2, 0.1)"
              >
                {CONTACTS.map((contact) => (
                  <a
                    href={contact.link}
                    key={contact.text}
                    target="_blank"
                    rel="noreferrer"
                    className="contacts__elements-item"
                  >
                    {contact.Icon}

                    <span>{contact.text}</span>
                  </a>
                ))}
              </Tween>
            </div>
          </div>
        </Tween>
      </Reveal>
    </SectionWrapper>
  );
};

export default memo(Contacts);
