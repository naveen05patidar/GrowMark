// const nodemailer = require("nodemailer");

// const SendMail = async (req,res,next)=>{

//     const name = req.body.name;
//     const senderId = 'growmark@info.com'
//     const email = req.body.email;
//     const sub = req.body.subject;
//     const msg = req.body.msg;


//     const transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         auth: {
//             user: 'delores.mcdermott17@ethereal.email',
//             pass: '4fpwEctRh37rq5y8bY'
//         }
//     });
    
//     const info = await transporter.sendMail({
//         from: `${name} <${senderId}>`,                  //'"Naveen Patidar" <naveen05patidar@gmail.com>', // sender address
//         to: email, // list of receivers
//         subject: sub, // Subject line
//         text:msg, // plain text body
//         html: `<b>${msg}</b>`, // html body
//     });
//     console.log("Message sent: %s", info);

//     res.json(info);

//     console.log('all function working');

//     next();
// }

// module.exports = SendMail;


const nodemailer = require("nodemailer");

const SendMail = async (req, res, next) => {
    const name = req.body.name;
    const senderId = 'growmark@info.com';
    const email = req.body.email;
    const sub = req.body.subject;
    const msg = req.body.msg;

    // Validate the recipient's email address
    if (!email) {
        return res.status(400).json({ error: "Recipient's email address is missing." });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'delores.mcdermott17@ethereal.email',
            pass: '4fpwEctRh37rq5y8bY'
        }
    });

    const mailOptions = {
        from: `${name} <${senderId}>`,
        to: email,
        subject: sub,
        text: msg,
        html: `<b>${msg}</b>`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);
        user = info
        console.log('all function working');
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "An error occurred while sending the email." });
    }

    next();
};

module.exports = SendMail;
