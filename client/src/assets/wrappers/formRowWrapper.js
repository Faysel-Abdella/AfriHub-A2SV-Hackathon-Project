import { styled } from "styled-components";

const Wrapper = styled.section`
  .input-container {
    position: relative;
  }

  .form-label {
    color: #ffffff;
    background-color: #943838;
    padding: 0.4rem;
    width: 50%;
    border-radius: 10px;
  }

  .input {
    background: var(--input-background);
    color: var(--input-text-color);
    margin: 10px;
  }

  .eye-icon {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 0;
    /* margin-left: -2px; */
    /* margin-top: 12px; */
    font-size: 20px;
    color: var(--show-password-color);
  }

  @media (max-width: 960px) {
    .form-label {
      color: var(--input-text-color);
      background-color: transparent;
      padding: 0;
      width: 100%;
      border-radius: 10px;
    }
  }
`;

export default Wrapper;
