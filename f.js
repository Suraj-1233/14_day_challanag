var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host:'smpt.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user: 'surajkannujiya517@gmal.com',
        pass: '7357780688'
    }
});
var mailOptions = {
    from: 'surajkannujiya517@gmail.com',
    to: 'surajkannujiya517@gmail.com',
    subject: 'test node mail',
    text: 'hello this is suraj'
}
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    }
    else {
    console.log("email has been send", info.response);
    }
})



