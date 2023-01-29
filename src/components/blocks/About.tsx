import React, { memo } from "react";
import styled from "styled-components";
// import { Controller, Scene } from "react-scrollmagic";
import { Reveal, Tween } from "react-gsap";

const SectionWrapper = styled.section`
  height: calc(100vh - 64px);
  min-height: 600px;
  background: ${(props) => props.theme.colors.sectionBg};

  @media screen and (max-width: 576px) {
    padding-top: 48px;
    height: auto;
    min-height: 100vh;
  }

  .about {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 48px;

    &__content {
      height: 100%;

      &-photo {
        img {
          width: 350px;
          height: 350px;
          border-radius: 50%;

          @media screen and (max-width: 576px) {
            width: 100%;
            height: auto;
          }
        }
      }

      &-text {
        text-align: center;
        max-width: 700px;
        color: ${(props) => props.theme.colors.mainTextColor};
        padding-top: 48px;

        @media screen and (max-width: 576px) {
          padding-top: 24px;
        }

        h1 {
          padding-bottom: 16px;
        }

        p {
          font-size: 18px;
        }
      }
    }
  }
`;

const About = () => {
  return (
    <SectionWrapper id="about">
      <Reveal repeat>
        <Tween from={{ opacity: 0 }} duration={2}>
          <div className="about">
            <div className="about__content-photo">
              <figure>
                <img src="/photo.jpg" alt="Elephant at sunset" />
              </figure>
            </div>

            <div className="about__content-text">
              <h1>Привет!</h1>

              <p>
                Меня зовут Юрий Колесников.
                <br />
                Занимаюсь frontend разработкой более пяти лет.
                <br />
                Стараюсь постоянно совершенствовать навыки и развиваться как
                специалист. Помимо своих повседневных инструментов, изучаю
                различные разделы computer science. Увлекаюсь компьютерным
                железом, звукорежиссурой и мотоциклами. Не зациклен на каких-то
                конкретных технологиях, считаю что выбирать их нужно исходя из
                задач.
              </p>
            </div>
          </div>
        </Tween>
      </Reveal>
    </SectionWrapper>
  );
};

export default memo(About);
