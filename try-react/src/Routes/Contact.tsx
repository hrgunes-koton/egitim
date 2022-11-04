import { FC, Reducer, useEffect, useReducer, useState } from "react";
import "./Contact.css";

type ContactFormData = {
  fullName: string;
  email: string;
  message: string;
};

export const Contact: FC = () => {
  useEffect(() => {
    document.querySelector(".container")?.classList.remove("change");
  });

  const initialState: Partial<ContactFormData> = {};

  const reducer = (state: any, partial: Partial<ContactFormData>) => {
    if (partial.fullName) {
      return { ...state, fullName: partial.fullName };
    }
    if (partial.email) {
      return { ...state, email: partial.email };
    }
    if (partial.message) {
      return { ...state, message: partial.message };
    }
  };

  const [contactFormData, dispatch] = useReducer(reducer, initialState);

  const onFullNameChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ fullName: e.target.value });
  };

  const onEmailChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ email: e.target.value });
  };

  const onMessageChanged: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    dispatch({ message: e.target.value });
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    alert("Success!");
    e.preventDefault();
    e.currentTarget.reset();
    return false;
  };

  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="contact-left"></div>
        <div className="contact-right">
          <h1 className="contact-heading">Contact</h1>
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="field"
                onChange={onFullNameChanged}
              />
              <label className="input-label">Full Name</label>
            </div>
            <div className="input-group">
              <input type="email" className="field" onChange={onEmailChanged} />
              <label className="input-label">Email</label>
            </div>
            <div className="input-group">
              <textarea
                className="field"
                onChange={onMessageChanged}
              ></textarea>
              <label className="message">Message</label>
            </div>
            <input type="submit" className="submit-btn" value="Submit" />
          </form>
          <div>
            <p>Your Form Data is :</p>
            <p>Full Name : {contactFormData.fullName}</p>
            <p>E-Mail : {contactFormData.email}</p>
            <p>Message : {contactFormData.message}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
