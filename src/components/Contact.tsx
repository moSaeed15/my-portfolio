// 'use client';
// import { useState, ChangeEvent, FormEvent, useRef } from 'react';
// import { Navigation } from 'lucide-react';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import SubmitButton from './ui/SubmitButton';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const form = useRef<HTMLFormElement | null>(null);

//   // State for form fields
//   const [formData, setFormData] = useState({
//     user_email: '',
//     user_name: '',
//     message: '',
//   });

//   // Handle form submission
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     console.log(form.current);
//     console.log(
//       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
//       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//     );
//     if (form.current !== undefined) {
//       await emailjs.sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         form.current as HTMLFormElement,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//       );
//     }
//   };

//   // Handle input change
//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData(prevFormData => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   return (
//     <form
//       ref={form}
//       onSubmit={handleSubmit}
//       className="bg-black-200 rounded-xl text-xl flex flex-col gap-8 justify-center p-10 md:p-24 mt-10"
//     >
//       <Label htmlFor="user_name">Your Name</Label>{' '}
//       <Input
//         id="user_name"
//         type="text"
//         placeholder="Your name"
//         name="user_name"
//         value={formData.user_name}
//         onChange={handleChange}
//       />
//       <Input
//         id="user_email"
//         type="email"
//         placeholder="Email"
//         name="user_email"
//         value={formData.user_email}
//         onChange={handleChange}
//       />
//       <Label htmlFor="message">Message</Label>
//       <Textarea
//         id="message"
//         name="message"
//         placeholder="Type your message here."
//         value={formData.message}
//         onChange={handleChange}
//       />
//       <div className="self-center mt-4">
//         <SubmitButton
//           title="Get in Touch."
//           icon={<Navigation />}
//           position="right"
//           handleSubmit={handleSubmit}
//         />
//       </div>
//     </form>
//   );
// };

// export default Contact;
