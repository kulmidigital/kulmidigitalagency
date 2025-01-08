"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import SlideReveal from "@/components/ui/slidereveal";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { plusJakartaSans, clashDisplay, clashDisplay2 } from "@/app/fonts";

// Contact Option Component
interface ContactOptionProps {
  iconPath: string;
  text: string;
  buttonText: string;
  onClick: () => void;
}

const ContactOption: React.FC<ContactOptionProps> = ({
  iconPath,
  text,
  buttonText,
  onClick,
}) => (
  <div className='flex items-center border-l-2 w-full md:w-[80%] border-orange-500 pl-4 py-6 rounded-[15px]'>
    <div className='bg-orange-500 p-2 rounded-full mr-4'>
      <Image src={iconPath} alt={text} width={24} height={24} />
    </div>
    <span className='text-[18px] sm:text-[22px] flex-grow font-semibold text-black dark:text-white'>
      {text}
    </span>
    <Button
      variant='secondary'
      className={`${plusJakartaSans.className} bg-[#272727] dark:bg-[#111111] text-white text-[14px] py-[20px] md:py-[25px] px-[16px] md:px-[20px] hover:bg-[#F56E0F] dark:hover:bg-[#FF7A1F] rounded-[50px]`}
      onClick={onClick}>
      {buttonText}
    </Button>
  </div>
);

// Contact Component
const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.EMAILJS_PUBLIC_KEY || "");
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          process.env.EMAILJS_SERVICE_ID || "",
          process.env.EMAILJS_TEMPLATE_ID || "",
          form.current
        );
        toast({
          title: "Email Sent",
          description: "Your message has been sent successfully!",
          className: `${clashDisplay.className} bg-orange-500 text-white`,
          action: (
            <ToastAction
              altText='Close'
              className='text-white hover:text-orange-100'>
              Close
            </ToastAction>
          ),
        });
        if (form.current) {
          form.current.reset();
        }
      } catch (error) {
        console.error("Error sending message:", error);
        toast({
          title: "Error",
          description:
            "There was an error sending your message. Please try again.",
          className: `${clashDisplay.className} bg-red-500 text-white`,
          action: (
            <ToastAction
              altText='Try again'
              className='text-white hover:text-red-100'>
              Try again
            </ToastAction>
          ),
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section
      className={`flex flex-col md:flex-row gap-8 px-6 sm:px-12 mt-10 sm:mt-16 bg-white dark:bg-gray-900 ${clashDisplay2.className}`}>
      {/* Left Side: Contact Options */}
      <div className='w-full md:w-[40%]'>
        <SlideReveal direction='left' duration={0.7}>
          <h1 className='text-[28px] sm:text-[36px] md:text-[42px] font-bold mb-4 text-black dark:text-white'>
            Get in touch with our{" "}
            <span className='text-orange-500 dark:text-[#FF7A1F]'>Experts</span>
          </h1>
        </SlideReveal>
        <p
          className={`mb-6 sm:mb-8 text-base sm:text-lg ${clashDisplay2.className} text-gray-600 dark:text-gray-300`}>
          We&apos;re glad you&apos;ve got this far! We&apos;re excited to meet
          you and hear about your potential project.
        </p>
        <div className='space-y-4 sm:space-y-6'>
          <SlideReveal direction='left' duration={0.7}>
            <ContactOption
              iconPath='/icons/callus.svg'
              text='Call Us'
              buttonText='Request Call Back'
              onClick={() => (window.location.href = "tel:+254735101001")}
            />
          </SlideReveal>
          <SlideReveal direction='left' duration={0.7}>
            <ContactOption
              iconPath='/icons/emailus.svg'
              text='Email Us'
              buttonText='Send Email'
              onClick={() =>
                (window.location.href = "mailto:sales@kulmi.digital")
              }
            />
          </SlideReveal>
          <SlideReveal direction='left' duration={0.7}>
            <ContactOption
              iconPath='/icons/visitus.svg'
              text='Visit Us'
              buttonText='Open Map'
              onClick={() =>
                (window.location.href =
                  "https://www.google.com/maps/place/TRV+Centre/")
              }
            />
          </SlideReveal>
        </div>
      </div>

      {/* Right Side: Form */}
      <Card className='w-full md:w-[55%] shadow-lg rounded-[20px] sm:rounded-[25px] p-[20px] sm:p-[30px] md:p-[40px] bg-[#f9f9f9] dark:bg-gray-800 border border-[#dddddd] dark:border-gray-700'>
        <SlideReveal direction='up' duration={0.7}>
          <h2
            className={`${clashDisplay.className} text-[22px] sm:text-[26px] mb-4 sm:mb-6 text-black dark:text-white`}>
            Drop us a{" "}
            <span className='text-orange-500 dark:text-[#FF7A1F]'>message</span>
          </h2>
        </SlideReveal>
        <SlideReveal direction='up' duration={0.7}>
          <form
            ref={form}
            onSubmit={handleFormSubmit}
            className='space-y-4 sm:space-y-6'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Input
                type='text'
                name='from_name'
                placeholder='Name'
                className='bg-white dark:bg-gray-700 border-transparent dark:border-gray-600 h-12 text-sm sm:text-base text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-[10px]'
                required
              />
              <Input
                type='email'
                name='user_email'
                placeholder='Email'
                className='bg-white dark:bg-gray-700 border-transparent dark:border-gray-600 h-12 text-sm sm:text-base text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-[10px]'
                required
              />
            </div>
            <Textarea
              name='message'
              placeholder='Message'
              className='h-[180px] sm:h-[240px] bg-white dark:bg-gray-700 border-transparent dark:border-gray-600 text-sm sm:text-base text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none rounded-[10px]'
              required
            />
            <Button
              type='submit'
              className='w-full bg-orange-500 hover:bg-orange-600 dark:bg-[#FF7A1F] dark:hover:bg-[#FF8F3F] text-white py-[15px] sm:py-[20px] text-sm sm:text-base rounded-[7px]'
              disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit Your Detail"}
            </Button>
          </form>
        </SlideReveal>
      </Card>
    </section>
  );
};

export default Contact;
