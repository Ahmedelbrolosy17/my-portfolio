import {useState, useRef, useCallback} from 'react';
import { motion }  from 'framer-motion';
import emailJs from '@emailjs/browser';
import {styles} from '../styles';
import {EarthCanvas} from './canvas';
import {slideIn} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e)=>{
    const {name, value} = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    emailJs.send('service_n0t1jtc', "template_uom46vj", {
      from_name: form.name,
      to_name: 'Ahmed',
      from_email: form.email,
      to_email: 'ahmedelbrolosy17@gmail.com',
      message: form.message,
    }, "Dx8ZAy_BfZV5OkLIL").then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible');
      setForm({ name: '', email: '', message: '' }); 
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong');
    });
  }, [form]);
  
  return (
    <div
    className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-5 overflow-hidden'
    >
      <motion.div
        variants={slideIn("left", 'tween', 0.2, 1)}
        className='flex-[0.7] bg-black-100 p-4 rounded-2xl'
      >
        <p 
          className={styles.sectionSubText}
        >
          Get in touch
        </p>
        <h3
          className={styles.sectionHeadText}
        >Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span
             className='text-white font-medium mb-2'
             >your name</span>
          <input 
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='whats your name'
            className='bg-tertiary py-4 px-6
            placeholder:color-secodary text-white 
            rounded-lg outlined-none border-none font-medium'
            ></input>
            </label>
          <label className='flex flex-col'>
            <span
             className='text-white font-medium mb-2'
             >your email</span>
          <input 
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='whats your email'
            className='bg-tertiary py-3 px-3
            placeholder:color-secodary text-white 
            rounded-lg outlined-none border-none font-medium'
            ></input>
            </label>
          <label className='flex flex-col'>
            <span
             className='text-white font-medium mb-2'
             >your message</span>
          <textarea 
            rows="7"
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='what do you want to say'
            className='bg-tertiary py-3 px-3
            placeholder:color-secodary text-white 
            rounded-lg outlined-none border-none font-medium'
            ></textarea>
            </label>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none
               w-fit text-whtie font-bold shadow-md
                shadow-primary rounded-xl'
            >
              {loading ? 'sending...': 'send'}
            </button>

        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'

      >
        <EarthCanvas/>
      </motion.div>
    </div>

  )
}

export default SectionWrapper(Contact, "contact");