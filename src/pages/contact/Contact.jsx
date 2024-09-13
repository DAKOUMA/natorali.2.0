import React, { useState } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom';
import { IoAtSharp, IoMailOutline, IoChatboxEllipsesOutline, IoPersonOutline, IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const [userName, setUserName] = useState(['', false]);
  const [userMail, setUserMail] = useState(['', false]);
  const [userText, setUserText] = useState(['', false]);
  const [isTouched, setIsTouched] = useState([false, false, false])

  let UserEmail = userMail[0]
  let UserName = userName[0]
  let UserText = userText[0]

  const isValidName = (name) => {
    if (name.length <= 3) {
      return false
    } else {
      return true
    }
  }

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const isValidText = (text) => {
    if (text.length <= 20) {
      return false
    } else {
      return true
    }
  }

  const handleFocus = (e) => {
    switch (e) {
      case 1:
        setUserName([userName[0], true])
        break;

      case 2:
        setUserMail([userMail[0], true])
        break;

      case 3:
        setUserText([userText[0], true])
        break;

      default:
        break;
    }
  }

  const handleBlur = (e) => {
    switch (e) {
      case 1:
        setUserName([userName[0], false])
        setIsTouched([true, isTouched[1], isTouched[2]])
        break;

      case 2:
        setUserMail([userMail[0], false])
        setIsTouched([isTouched[0], true, isTouched[2]])
        break;

      case 3:
        setUserText([userText[0], false])
        setIsTouched([isTouched[0], isTouched[0], true])
        break;

      default:
        break;
    }
  }

  const resetForm = () => {
    setIsTouched([false, false, false])
    setUserMail(['', false])
    setUserName(['', false])
    setUserText(['', false])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidName(UserName) && isValidEmail(UserEmail) && isValidText(UserText) ) {
      alert('Le message a ete transmis')
      resetForm()
    } else {
      alert('certains champ ne sont pas rempli comme il le faut')
    }
  }

  return (
    <div className='all-contact'>
      <NavBar />
      <main className='container contact-container'>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className={`contact-name ${userName[1] ? 'active-input' : 'inactive-input'}`}>
              <label htmlFor="name"><IoPersonOutline /></label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder='Votre nom'
                value={userName[0]}
                onFocus={() => handleFocus(1)}
                onBlur={() => handleBlur(1)}
                onChange={e => setUserName([e.target.value, userName[1]])}
              />
              {
                isTouched[0] ?
                  (
                    isValidName(UserName) ?
                      <span><IoCheckmarkCircleOutline color={'green'} /></span>
                      :
                      <span><IoCheckmarkCircleOutline color={'red'} /></span>
                  )
                  :
                  ''
              }
            </div>
            <div className={`contact-mail ${userMail[1] ? 'active-input' : 'inactive-input'}`}>
              <label htmlFor="mail"><IoAtSharp /></label>
              <input
                type="text"
                name='mail'
                id='mail'
                placeholder='votre.mail@mail.com'
                value={userMail[0]}
                onFocus={() => handleFocus(2)}
                onBlur={() => handleBlur(2)}
                onChange={e => setUserMail([e.target.value, userMail[1]])}
              />
              {
                isTouched[1] ?
                  (
                    isValidEmail(UserEmail) ?
                      <span><IoCheckmarkCircleOutline color={'green'} /></span>
                      :
                      <span><IoCheckmarkCircleOutline color={'red'} /></span>
                  )
                  :
                  ''
              }
            </div>
            <div className={`contact-text ${userText[1] ? 'active-input' : 'inactive-input'}`}>
              <label htmlFor="message"><IoChatboxEllipsesOutline /></label>
              <textarea
                name="message"
                id="message"
                placeholder='Ecrivez votre texte ici'
                value={userText[0]}
                onFocus={() => handleFocus(3)}
                onBlur={() => handleBlur(3)}
                onChange={e => setUserText([e.target.value, userText[1]])}
              ></textarea>
              {
                isTouched[2] ?
                  (
                    isValidText(UserText) ?
                      <span><IoCheckmarkCircleOutline color={'green'} /></span>
                      :
                      <span><IoCheckmarkCircleOutline color={'red'} /></span>
                  )
                  :
                  ''
              }
            </div>
            <button>Envoyer</button>
          </fieldset>
        </form>
        <div className='social-media'>
              <h1>Vous pouvez nous contacter aussi via</h1>
              <div className='social-media-container'>
                <div>
                  
                  <Link to={'https://web.facebook.com/natorali'}><FaFacebookSquare size={'3rem'}/></Link>
                  <h2>Facebook</h2>
                </div>
                <div>
                  
                  <Link to={'mailto:contact@natorali.com'}><IoIosMail size={'3rem'}/></Link>
                  <h2>E-mail</h2>
                </div>
              </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact