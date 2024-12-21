import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);

  .hero-text {
    & > p {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 7rem;
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  // Updated: Removed transition and ensured static positioning of social media icons
  .social-media {
    display: inline-flex; // Keeping the inline-flex for static alignment
    align-items: center;
    justify-content: flex-start; // Align to the start (left side) of the container
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 1rem;

    img,
    span {
      font-size: 3rem;
      width: 3.5rem;
    }

    // Removed hover effect to ensure no movement
    @media (max-width: 960px) {
      gap: 1.5rem;
    }

    @media (max-width: 600px) {
      gap: 1rem;
      padding-top: 3rem;
    }
  }

  .button {
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image {
    img {
      max-width: 500px;
    }
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;
    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 35%;
  }

  @media (max-width: 480px) {
    margin-top: 45%;
  }
`;
