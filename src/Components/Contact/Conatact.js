import React from 'react'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { MainContainer } from '../Header/Header.styled'
import { StyledContactContainer, StyledContactOptions, StyledForm, StyledOption } from './Contact.styled'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Conatact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u0no2u9', 'template_o4ktapf', form.current, 'dv1hpfE7ujKABcCPZ')
        e.target.reset()
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <MainContainer>
            <section id='contact'>
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>

                <StyledContactContainer>
                    <StyledContactOptions>
                        <StyledOption>
                            <MdOutlineMarkEmailUnread className='contact-icon' />
                            <h4>Email</h4>
                            <h5>yonathan.samuel.sija@gmail.com</h5>
                            <a href='mailto:yonathan.samuel.sija@gmail.com'>Send a message</a>
                        </StyledOption>
                        <StyledOption>
                            <BsLinkedin className='contact-icon' />
                            <h4>LinkedIn</h4>
                            <h5>Yonathan Samuel</h5>
                            <a href='https://www.linkedin.com/in/yonathan-samuel-60731a21a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrNgHsxUORWmVOJbObBoaPA%3D%3D' target="_blank">Send a message</a>
                        </StyledOption>
                        <StyledOption>
                            <BsGithub className='contact-icon' />
                            <h4>GitHub</h4>
                            <h5>Yonathan</h5>
                            <a href='https://github.com/Y0ni0' target="_blank">Visit Profile</a>
                        </StyledOption>
                    </StyledContactOptions>
                    {/* End of Contact Options */}
                    <StyledForm ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required />
                        <input type="email" name='email' placeholder='Your Email' required />
                        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </StyledForm>
                </StyledContactContainer>
            </section>
        </MainContainer>
    )
}

export default Conatact