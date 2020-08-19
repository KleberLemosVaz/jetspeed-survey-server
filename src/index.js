const express = require('express')
const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('./config/smtp');
const QUESTIONS = require('./questions')

require('dotenv').config()

const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res) => res.send('Hello World'))

app.post('/send',(req,res) =>{

    const {
        answers1,
        answers2,
        answers3,
        answers4,
        answers5,
        answers6,
        answers7,
        answers8,
        answers9,
        answers10,
        answers11,
        answers12,
        answers13,
        answers14,
        answers15
    } = req.body

    const transporter = nodemailer.createTransport({
        host: SMTP_CONFIG.host,
        port: SMTP_CONFIG.port,
        secure:false,
        auth: {
            user: SMTP_CONFIG.user,
            pass: SMTP_CONFIG.pass
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    
    transporter.sendMail({
                    
            from:'Pesquisa Online Jet Speed <jetspeedbrasil@gmail.com>',
            to:[`${process.env.EMAIL_RECIPIENT_1}`],
            subject:'Pesquisa Online Jet Speed',
            html:`
            <html>
            <head>
            <style type="text/css">
                body{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background:lightgray;
                }
        
                .email{
                    border:1px solid grey;
                    border-radius: 0.8rem;
                    background:white;
                    padding:1.6rem;
                }
            </style>
        </head>
        <body>
        
            <div class="email">
            <p>Olá Srs Eduardo e Sheila,</p>
            <p>Vocês receberam uma nova resposta via PesquisaOline:</p>
        
           
                <strong>1.${QUESTIONS[0].question}</strong><br/>
               Resposta: ${answers1}
               <br/><br/>
          
                <strong>2.${QUESTIONS[1].question}</strong><br/>
               Resposta: ${answers2}
               <br/><br/>
        
                <strong>3.${QUESTIONS[2].question}</strong><br/>
               Resposta: ${answers3}
               <br/><br/>
        
                <strong>4.${QUESTIONS[3].question}</strong><br/>
               Resposta: ${answers4}
               <br/><br/>
        
                <strong>5.${QUESTIONS[4].question}</strong><br/>
               Resposta: ${answers5}
               <br/><br/>
        
                <strong>6.${QUESTIONS[5].question}</strong><br/>
               Resposta: ${answers6}
               <br/><br/>
        
                <strong>7.${QUESTIONS[6].question}</strong><br/>
               Resposta: ${answers7}
               <br/><br/>
        
                <strong>8.${QUESTIONS[7].question}</strong><br/>
               Resposta: ${answers8}
               <br/><br/>
        
                <strong>9.${QUESTIONS[8].question}</strong><br/>
               Resposta: ${answers9}
               <br/><br/>
        
                <strong>10.${QUESTIONS[9].question}</strong><br/>
               Resposta: ${answers10}
               <br/><br/>
         
                <strong>11.${QUESTIONS[10].question}</strong><br/>
               Resposta: ${answers11}
               <br/><br/>
        
                <strong>12.${QUESTIONS[11].question}</strong><br/>
               Resposta: ${answers12}
               <br/><br/>
          
                <strong>13.${QUESTIONS[12].question}</strong><br/>
               Resposta: ${answers13}
               <br/><br/>
        
                <strong>14.${QUESTIONS[13].question}</strong><br/>
               Resposta: ${answers14}
               <br/><br/>
            
                <strong>15.${QUESTIONS[14].question}</strong><br/>
               Resposta: ${answers15}
            </div>
        </body>
        </html>
            
            `
    
        }).then(info => {
            res.send(info)
        }).catch(error => {
            res.send(error)
        })

        

})

app.listen(`${process.env.APP_URL}`,() => console.log(`Running`))




