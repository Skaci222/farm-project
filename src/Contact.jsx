import './Contact.css'

function Contact() {
  return (
    <div style={{width: '100%',
    height: '100%',
    backgroundColor: 'beige',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    }}>
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-info">Send us a message!</p>
      <textarea className="contact-textarea" placeholder="Your message here..."></textarea>
      <button className="contact-button">Submit</button>
    </div>
  )
}
export default Contact