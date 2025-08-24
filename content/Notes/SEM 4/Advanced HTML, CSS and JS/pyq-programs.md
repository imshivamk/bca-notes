---
dg-publish: true
---
# 1 Random number generator

```html
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Random generator</title>

    <style>

        *{

            box-sizing: border-box;

            margin: 0;

            padding: 0;

        }

        body{

            font-family: Arial, sans-serif;

            display: flex;

            justify-content: center;

            align-items: center;

            height: 100vh;

            padding: 1rem;

            background-color: aliceblue;

        }

        h1{

            text-align: center;

        }

  

        .container{

            display: flex;

            align-items: center;

            justify-content: center;

            flex-direction: column;

            gap: 10px;

            padding: 20px;

            border-radius: 10px;

            background-color: white;

            box-shadow: 0 0 10px rgba(0,0,0,0.2);

            width: 100%;

            max-width: 300px;

        }  

        #randombtn{

            background-color: #007BFF;

            color: white;

            border: none;

            cursor: pointer;

            padding: 10px 20px;

            border-radius: 5px;

            font-size: 16px;

            transition: 0.3s ease background-color;

        }

        #randombtn:hover{

            background-color: #026cde;

        }

        #randombtn:active{

            transform: translateY(2px);

        }

  

    </style>

</head>

<body>

    <!-- Write HTML and JavaScript code to

     create a button that, when click,

     generates (20) the random number

     between I and 100 and displays it

     in alert dialog -->

     <div class="container">

        <h1>Random Number Generator</h1>

        <p>Click the button below to generate a random number between 1 and 100.</p>

        <button id="randombtn">Generate Random Number</button>

        <h2 id="result"></h2>

     </div>

    <script>

        let randombtn = document.getElementById("randombtn");

        let result = document.getElementById("result");

        // let randomNum = Math.floor(Math.random() * 100)+1;

        randombtn.addEventListener("click", ()=>{

            let randomNum = Math.floor(Math.random() * 100)+1;

            alert(randomNum);

            result.innerHTML = `Random Number: ${randomNum}`;

        })

    </script>

</body>

</html>
```


# 2 Form validation

```html
<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <title>My form</title>

  <style>

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: aliceblue;
    }

    form {

      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      max-width: 300px;
    }

  

    input {

      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      outline: none;

    }

  

    input:focus {
      border: 2px solid #007bff;
    }

  

    #submitbtn {
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
    }

  

    #submitbtn:hover {
      background-color: #026cde;
    }

  

    #submitbtn:active {
      transform: translateY(2px);
    }

  

    #submitbtn:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

  

    #submitbtn:disabled:hover {
      background-color: #ccc;
    }

  

    .error-message {

      color: red;
      font-size: 14px;
      font-weight: bold;
      margin-top: 5px;
      padding: 5px;
      border-radius: 5px;

    }

  

    .hidden {
      display: none;
    }
    
  </style>
</head>

<body>
  <form action="" id="userform">
    <h2>User form</h2>

    <input type="text" id="username" name="username" placeholder="Username" />
    <div id="usernameError" class="error-message hidden"></div>

  

    <input type="email" id="email" name="email" placeholder="Email" />
    <div id="emailError" class="error-message hidden"></div>
    
    <input type="submit" value="Submit" id="submitbtn" />
  </form>

  

  <script>

    const form = document.getElementById("userform");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const nameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

  

      // Reset error messages

      nameError.classList.add("hidden");
      emailError.classList.add("hidden");
      nameError.innerHTML = "";
      emailError.innerHTML = "";

  

      let error = false;

  

      // Validate username

      if (username.value.trim() === "") {
        nameError.classList.remove("hidden");
        nameError.innerHTML = "Username is required.";
        error = true;
      }

  

      // Validate email
      if (email.value.trim() === "") {
        emailError.classList.remove("hidden");
        emailError.innerHTML = "Email is required.";
        error = true;
      }

      // If no errors, submit the form (or show success)
      if (!error) {
        alert("Form submitted successfully!");
        form.submit(); // Uncomment this to submit to backend
      }
    });
  </script>

</body>
</html>
```