"use client"
import { useState } from 'react';
import { motion } from 'framer-motion'
import { Label } from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaLinkedin } from "react-icons/fa";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import {HiOutlineMapPin, HiOutlineArrowLongRight} from 'react-icons/hi2'
import {HiOutlinePhone, HiOutlineMail} from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          service: '',
          message: ''
        });
      } else {
        setStatus({ loading: false, success: false, error: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Failed to send message.' });
    }
  };

  return <motion.section initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className='min-h-screen flex items-center py-12 xl:py-0'  
      >
        <div className='container mx-auto w-full h-full flex flex-col items-center
        xl:justify-center'>
          <div className='w-full'>
            <div className='flex flex-col xl:flex-row gap-6'>
              {/*text*/}
              <div className='flex-1 xl:w-[600px] flex flex-col gap-12'>
                <div>
                  <h2 className='h2 mb-6'>
                    Get In <span className='text-accent'>Touch</span>
                  </h2>
                  <p className='max-w-[460px]'>
                    Interested in working together or building something impactful?
                    Whether it’s web development, data-driven projects, or tech discussions,
                    my inbox is always open. Let’s create something meaningful.
                  </p>
                </div>
                {/* info */}
                <div className='flex flex-col gap-8 mb-6 xl:mb-0'>
                  { /* phone */}
                  <div className='flex items-center gap-4 text-lg'>
                    <span className='text-accent'>
                      <HiOutlineMail className="text-2xl" />
                    </span>
                    <span>bhargavlendeng@gmail.com</span>
                  </div>
                  {/* email */}
                  <div className='flex items-center gap-4 text-lg'>
                    <span className='text-accent'>
                      <FaLinkedin className="text-2xl" />
                    </span>
                    <span>Bhargav Lende</span>
                  </div>
                  {/* location */}
                  <div className='flex items-center gap-4 text-lg'>
                    <span className='text-accent'>
                      <HiOutlineMapPin className="text-2xl" />
                    </span>
                    <span>Nagpur, India</span>
                  </div>
                </div>
              </div>
              {/*form*/}
              <div className='flex-1'>
                <form className='flex flex-col gap-6 w-full' onSubmit={handleSubmit}>
                  {/* Name Row */}
                  <div className='flex flex-col xl:flex-row gap-6'>
                    <div className='flex-1 flex flex-col gap-2'>
                      <Label htmlFor="firstname">Firstname <span className='text-accent'>*</span></Label>
                      <Input 
                        id="firstname"
                        name="firstname"
                        placeholder="First name"
                        required
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                      <Label htmlFor="lastname">Lastname <span className='text-accent'>*</span></Label>
                      <Input 
                        id="lastname"
                        name="lastname"
                        placeholder="Last name"
                        required
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <Label htmlFor="email">Email <span className='text-accent'>*</span></Label>
                    <Input 
                      id="email"
                      name="email"
                      placeholder="youremail@gmail.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <Label htmlFor="service">I'm interested in <span className='text-accent'>*</span></Label>
                    <Select name='service' required onValueChange={handleSelectChange} value={formData.service}>
                      <SelectTrigger 
                        id='service'
                        className="w-full !h-[48px] bg-white/5 border-white/10 px-4 focus:border-accent focus:ring-accent focus:ring-[1px] outline-none text-base md:text-sm">
                        <SelectValue placeholder="Choose here" />
                      </SelectTrigger>
                      <SelectContent className="bg-primary border-white/20 text-white">
                        <SelectItem value="data Science">Data Science</SelectItem>
                        <SelectItem value="webdev">Web Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <Label htmlFor="message">Message <span className='text-accent'>*</span></Label>
                    <Textarea 
                      id="message"
                      name='message'
                      placeholder='Write your message...'
                      className="min-h-[160px] bg-white/5 border-white/10
                      focus-visible:border-accent focus-visible:ring-accent
                      focus-visible:ring-[1px] resize-none p-4 selection:bg-accent
                      placeholder:text-white/50 text-base md:text-sm outline-none rounded-md"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* btn */}
                  <button type="submit" className='btn btn-lg btn-accent w-full xl:w-max' disabled={status.loading}>
                    <div className='flex items-center gap-3'>
                      <span className='font-medium'>{status.loading ? 'Sending...' : 'Send message'}</span>
                      {!status.loading && <HiOutlineArrowLongRight className='text-xl'/>}
                    </div>
                  </button>
                  {status.success && <p className="text-accent">Message sent successfully!</p>}
                  {status.error && <p className="text-red-500">{status.error}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

}

export default Contact