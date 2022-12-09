import React from 'react'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { MainContainer } from '../Header/Header.styled'

function Conatact() {
    return (
        <MainContainer>
            <section id='contact'>
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>

                <div className='container contact__container'>
                    <div className='contact__options'>
                        <article className='contact_option'>
                            <MdOutlineMarkEmailUnread />
                            <h4>Email</h4>
                            <h5>yonathan.samuel.sija@gmail.com</h5>
                            <a href='mailto:yonathan.samuel.sija@gmail.com'>Send a message</a>
                        </article>
                        <article className='contact_option'>
                            <BsLinkedin />
                            <h4>LinkedIn</h4>
                            <h5>Yonathan Samuel</h5>
                            <a href='https://www.linkedin.com/in/yonathan-samuel-60731a21a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrNgHsxUORWmVOJbObBoaPA%3D%3D' target="_blank">Send a message</a>
                        </article>
                        <article className='contact_option'>
                            <BsGithub />
                            <h4>GitHub</h4>
                            <h5>Yonathan</h5>
                            <a href='https://github.com/Y0ni0' target="_blank">Visit Profile</a>
                        </article>
                    </div>
                    {/* End of Contact Options */}
                    <form action="">
                        <input type="text" name='name' placeholder='Your Full Name' required />
                        <input type="email" name='email' placeholder='Your Email' required />
                        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
            </section>
        </MainContainer>
    )
}

export default Conatact