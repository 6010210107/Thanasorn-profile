import axios from 'axios'

export const formSent = async ({name, subject, email, message }) => {
    const res = await axios({
        method: 'POST',
        url: 'http://localhost:5000/api/v1/mail',
        data: {
          name:name,
          subject: subject,
          email: email,
          message: message,
        }
      });
      
      return res
};
