import css from 'styled-jsx/css';

export const feedbackStyle = css`
  .reply-feedback {
    float: right;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: gray;
  }

  .vote-num {
    font-weight: bold;
    margin-left: 0.5em;
  }

  .down-vote-switch {
    color: rgb(0, 0, 238);
    text-decoration: underline;
    cursor: pointer;
  }

  .btn-vote {
    font-size: 1rem;
    line-height: 100%;
    cursor: pointer;
  }
  .btn-vote:disabled {
    cursor: not-allowed;
  }

  .icon {
    fill: gray;
    padding: 0.3em;
    transition: 0.1s linear;
  }
  .btn-vote:not(:disabled).icon:hover {
    fill: orange;
    transform: scale(1.3);
  }
  .icon-circle {
    width: 28px;
  }
  .icon-cross {
    width: 28px;
  }
  .icon-circle.active {
    fill: #6dc00c;
  }
  .icon-cross.active {
    fill: red;
  }

  button {
    background: none;
    border: 0;
    border-color: transparent;
    padding: 0;
  }
  button:active,
  button:focus {
    outline: none;
  }
`;
