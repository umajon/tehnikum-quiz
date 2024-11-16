import React from "react";

export const StepTwo = () => {
  const answers = [
    {
      id: 1,
      answers: 'Ваш ответ'
    },
    {
      id: 2,
      answer: 'Ваш ответ'
    },
    {
      id: 3,
      answer: 'Ваш ответ'
    },
    {
      id: 4,
      answer: 'Ваш ответ'
    }
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <ul className="variants">
              {answers.map(({ id, answer }) => (
                <li className="variant-wrapper" key={id}>
                  <input required type="radio" name= {`variant-${id}`} id={`variant-${id}`} />
                  <label htmlFor={`variant-${id}`}>{answer}</label>
                </li>
              ))}
            </ul>
            <button type="button" disabled id="next-btn">
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};