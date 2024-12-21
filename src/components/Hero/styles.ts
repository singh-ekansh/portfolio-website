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

  // Updated social media icons for dynamic positioning
  .social-media {
    display: flex; // Flexbox for dynamic behavior
    align-items: center;
    justify-content: center; // Center align on the page
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 1rem;
    transition: all 0.3s ease; // Smooth transition for responsiveness

    img,
    span {
      font-size: 3rem;
      width: 3.5rem;
      transition: transform 0.2s ease; // Smooth hover effect
    }

    // Hover effect to enlarge icons on hover
    img:hover,
    span:hover {
      transform: scale(1.1);
    }

    @media (max-width: 960px) {
      gap: 1.5rem; // Increase gap for larger screens
    }

    @media (max-width: 600px) {
      gap: 1rem; // Adjust gap for smaller screens
      padding-top: 3rem; // Reduce padding on smaller screens
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
