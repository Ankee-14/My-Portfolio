import './contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>

        <div className="contact-card">
          <div className="contact-content">
            <p className="contact-description">
              I'd love to hear from you! Drop me a message and I'll get back to you as soon as possible.
            </p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
