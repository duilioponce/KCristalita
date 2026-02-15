function kelly()
{
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;

    if ((email==="hernandezkelly@gmail.com" && password=="1702") || (email==="duilioponce2@gmail.com" && password=="1702"))
    {
        window.location.href="extra46(2).html";
    }
    else
    {
        if ((email!=="hernandezkelly@gmail.com" && password=="1702") || (email!=="duilioponce2@gmail.com" && password=="1702"))
        {
            alert("Usuario no encontrado");
        }
        else
        {
            if ((email==="hernandezkelly@gmail.com" && password!=="1702") || (email==="duilioponce2@gmail.com" && password!=="1702"))
            {
                alert("Contraseña incorrecta");
            }
            else
            {
                if ((email!=="hernandezkelly@gmail.com" && password!=="1702") || (email!=="duilioponce2@gmail.com" && password!=="1702"));
                {
                    alert("Usuario no encontrado");
                }
            }
        }
    }
}

function kellyall()
{
    alert("¡Felices 17, Kellyyy 🎂! Dios contigooo 🤍, te quiero muchooo 💕... Atte: Un enano ⭐");
}