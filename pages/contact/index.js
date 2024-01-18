import { useState } from 'react';
import {Circles} from "/components/Circles";


import {BsArrowRight} from 'react-icons/bs';

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const cros = require('cors');
  const app = express();
    app.use(
      cros({
        origin: "https://youssafouhba.github.io/youssef-portfolio/components/email",
        methods: ["POST"],
    })
  );
const https = require('https');

const handleSubmit = async (e) => {
  e.preventDefault();

  setStatus('Sending...');

  // Envoyer le message côté serveur
  try {
    const data = JSON.stringify({ name, email, message });

    const options = {
      hostname: 'youssafouhba.github.io', // Remplacez par l'URL du serveur
      path: '/youssef-portfolio/components/email',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
      },
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          // Message envoyé avec succès
          setStatus('Message sent successfully');
          // Réinitialiser les champs du formulaire
          setName('');
          setEmail('');
          setMessage('');
        } else {
          // Erreur lors de l'envoi du message
          setStatus('Message sending failed');
        }
      });
    });

    req.on('error', (error) => {
      setStatus('Message sending failed');
    });

    req.write(data);
    req.end();
  } catch (error) {
    setStatus('Message sending failed');
  }
};

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/** text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/** text */}
          <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate= 'show'
              exit='hidden'
              className='h2 text-center mb-12'>
            Let's <span className='text-accent'>connect</span>
          </motion.h2>
          {/** form */}
          <motion.form
              onSubmit={handleSubmit}
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate= 'show'
              exit='hidden'
              className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            {/** input group */}
            <div className='flex gap-x-6 w-full'>
              <input 
              type="text" 
              placeholder="name" 
              value={name}
              onChange={(e) => setName(e.target.value)} 
              className='input'/>
              <input 
              type="email"
              placeholder="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='input'/>
            </div>
            <textarea 
            placeholder="message" 
            className='textarea'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
            <button
            type='submit'
            className='btn rounded-full border border-x-white/50 max-w-[170px] 
            px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
            hover:border-accent group'>
              <span className='group-hover:-translate-y-[120px] group-hover:opacity-0
              transition-all duration-500'>Let's talk</span>
              <BsArrowRight 
              className='translate-y-[120px] opacity-0 group-hover:flex 
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all 
              duration-300 absolute text-[22px]'/>
            </button>
            {status && <p>{status}</p>}
          </motion.form>
        </div>
      </div>

    </div>
    );
};

export default Contact;
