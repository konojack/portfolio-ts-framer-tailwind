import React from 'react';
import { EnvelopeIcon, LinkIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:konojack@gmail.com?subject=${formData.subject}&body=My name is ${formData.name} and my email is ${formData.email}: ${formData.message}`;
  };

  return (
    <div className="h-screen relative flex flex-col items-center justify-evenly text-center mx-auto md:text-left md:flex-row max-w-7xl px-10 ">
      <h3 className="absolute top-20 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-lg sm:text-4xl font-semibold text-center">
          I have got just what you need.{' '}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-lg sm:text-2xl">+48 513 975 037</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-lg sm:text-2xl">konojack@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <LinkIcon className="text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-lg sm:text-2xl">
              <a
                target="_blank"
                href="https://github.com/konojack"
                rel="noreferrer"
              >
                https://github.com/konojack
              </a>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex sm:space-x-2 space-y-2 sm:space-y-0 flex-col sm:flex-row">
            <input
              placeholder="Name"
              className="contactInput"
              type="text"
              {...register('name')}
            />
            <input
              placeholder="Email"
              className="contactInput"
              type="text"
              {...register('email')}
            />
          </div>
          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            {...register('subject')}
          />
          <textarea
            placeholder="Message"
            className="contactInput"
            {...register('message')}
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg opacity-50 hover:opacity-100 transition-opacity duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
