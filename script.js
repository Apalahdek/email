const txtName = document.querySelector("#txtName");
const txtEmail = document.querySelector("#txtEmail");
const txtContactNo = document.querySelector("#txtContactNo");
const txtMessage = document.querySelector("#txtMessage");
const txtFile = document.querySelector('#txtFile');
function sendEmail() {
  Email.send({
    SecureToken: "9403D551DB712C29D04A4C4674CDEE2C4C15",
    Host: "smtp.elasticemail.com",
    Username: "storevalzy@gmail.com",
    Password: "9403D551DB712C29D04A4C4674CDEE2C4C15",
    To: "storevalzy@akugu.com",
    From: "storevalzy@gmail.com",
    Subject: "Order Panel",
    Body: `
                    Req Name Panel : ${txtName.value} <br>
                    Email Mu : ${txtEmail.value}<br>
                    Nomor whatsapp : ${txtContactNo.value}<br>
                    Pesan Buat atmin : ${txtMessage.value}
                `
    // Attachments: [
    //     {
    //         name: `File Name`,
    //         path: `${txtFile.files}`
    //     }]
  }).then((message) => alert("Test Mail Is Sent Sucessfully " + message));
}