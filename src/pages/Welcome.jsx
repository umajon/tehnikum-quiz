import React from "react";

import { Button, Input } from '../components/index';

export const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form className="welcome__form">
            <Input label="Введите имя"
              placeholder="Иван Иванов"
              errorMessage="Поле имени не может быть пустым" />

            <Input label="Номер телефона"
              id="phone"
              placeholder="+998 -- --- --- --"
              errorMessage="Поле имени не может быть пустым"
              pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
            />
            <Button text="Поехали" />
          </form>
        </div>
      </div>
    </div>
  );
};