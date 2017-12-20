let nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: '',
    port: 25,
    auth: {
        user: '',
        pass: ''
    }
});

let mailOptions = {
    from: '',
    to: '',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    }else {
        console.log('Email sent: ' + info.response);
    }
});