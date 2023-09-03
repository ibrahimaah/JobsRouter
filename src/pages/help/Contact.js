import { Form, useActionData } from "react-router-dom";

export default function Contact() {
    const data = useActionData()
    return (
      <div className="contact">
        <h3>Contact Us</h3>
        <Form method="post" action="/help/contact">
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
          </label>
          {data && data.error && <p style={{color:'maroon',
                                            backgroundColor:'yellow',
                                            width:'50%',
                                            textAlign:'center'}}>{data.error}</p>}
          <button>Submit</button>
          
        </Form>
      </div>
    )
  }