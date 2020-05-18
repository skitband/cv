import React, { useState } from "react";

const ContactForm = () => {

    const [ loading, setLoading ] = useState(false);
    const [ status, setStatus ] = useState('');
    const [ sending, setSending ] = useState('Send');

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        setLoading(true);
        setSending('Sending...');
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setStatus('SUCCESS')
          } else {
            setStatus('ERROR')
          }
          setLoading(false); 
          setSending('Send');
        };
        xhr.send(data);
    }

    return (
        <div>
            <form onSubmit={submitForm} method="POST" className="form" action="https://formspree.io/mnqgnkko">
                <div className="form-group">
                    <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                </div>
                <div className="form-group">
                    <input className="form-control" id="subject" type="text" name="_subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                    <textarea className="form-control" id="message" name="message" placeholder="Message" rows="3" required></textarea>
                </div>
                <div className="form-group">
                    
                    <button type="submit" className="btn btn-default form-send">
                        { loading ? 
                        <div class="spinner-border spinner-border-sm" role="status">
                            <span class="sr-only">Loading...</span>
                        </div> : '' } {sending}
                    </button>
                </div>  
            </form>
            <div>
                {status === "SUCCESS" ? <p>Thank you for getting in touch!, will get back in touch with you soon!</p> : ''}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </div>
        </div>
    );

}

export default ContactForm;