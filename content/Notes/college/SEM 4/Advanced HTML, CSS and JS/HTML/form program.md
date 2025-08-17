---
dg-publish: true
---

# form program


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Full Form Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      padding: 40px;
    }

    form {
      background-color: #fff;
      padding: 20px;
      max-width: 600px;
      margin: auto;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    label {
      display: block;
      margin: 15px 0 5px;
    }

    input, select, textarea {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    .error {
      color: red;
      font-size: 14px;
      margin-bottom: 10px;
    }

    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>

  <form id="registrationForm" method="POST">
    <h2>Registration Form</h2>

    <label for="name">Full Name *</label>
    <input type="text" id="name" name="name" required />
    <div id="nameError" class="error"></div>

    <label for="email">Email Address *</label>
    <input type="email" id="email" name="email" required />
    <div id="emailError" class="error"></div>

    <label for="password">Password *</label>
    <input type="password" id="password" name="password" required />
    <div id="passwordError" class="error"></div>

    <label>Gender *</label>
    <input type="radio" name="gender" value="Male" /> Male
    <input type="radio" name="gender" value="Female" /> Female
    <div id="genderError" class="error"></div>

    <label>Hobbies</label>
    <input type="checkbox" name="hobbies" value="Reading" /> Reading
    <input type="checkbox" name="hobbies" value="Traveling" /> Traveling
    <input type="checkbox" name="hobbies" value="Gaming" /> Gaming

    <label for="country">Country *</label>
    <select name="country" id="country" required>
      <option value="">-- Select Country --</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="UK">UK</option>
    </select>
    <div id="countryError" class="error"></div>

    <label for="bio">Bio</label>
    <textarea id="bio" name="bio" rows="4" placeholder="Write something about yourself..."></textarea>

    <label for="resume">Upload Resume *</label>
    <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" />
    <div id="resumeError" class="error"></div>

    <button type="submit">Submit</button>
  </form>

  <script>
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual submission

      // Clear previous errors
      document.querySelectorAll('.error').forEach(el => el.innerText = "");

      // Get values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const gender = form.querySelector('input[name="gender"]:checked');
      const country = document.getElementById('country').value;
      const resume = document.getElementById('resume').files[0];

      let isValid = true;

      // Validation rules
      if (name === "") {
        document.getElementById('nameError').innerText = "Name is required.";
        isValid = false;
      }

      if (email === "" || !email.includes('@')) {
        document.getElementById('emailError').innerText = "Valid email is required.";
        isValid = false;
      }

      if (password.length < 6) {
        document.getElementById('passwordError').innerText = "Password must be at least 6 characters.";
        isValid = false;
      }

      if (!gender) {
        document.getElementById('genderError').innerText = "Please select your gender.";
        isValid = false;
      }

      if (country === "") {
        document.getElementById('countryError').innerText = "Select your country.";
        isValid = false;
      }

      if (!resume) {
        document.getElementById('resumeError').innerText = "Please upload your resume.";
        isValid = false;
      }

      // If valid, show alert or proceed
      if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
      }
    });
  </script>

</body>
</html>

```

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Full Form Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      padding: 40px;
    }

    form {
      background-color: #fff;
      padding: 20px;
      max-width: 600px;
      margin: auto;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    label {
      display: block;
      margin: 15px 0 5px;
    }

    input, select, textarea {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    .error {
      color: red;
      font-size: 14px;
      margin-bottom: 10px;
    }

    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>

  <form id="registrationForm" method="POST">
    <h2>Registration Form</h2>

    <label for="name">Full Name *</label>
    <input type="text" id="name" name="name" required />
    <div id="nameError" class="error"></div>

    <label for="email">Email Address *</label>
    <input type="email" id="email" name="email" required />
    <div id="emailError" class="error"></div>

    <label for="password">Password *</label>
    <input type="password" id="password" name="password" required />
    <div id="passwordError" class="error"></div>

    <label>Gender *</label>
    <input type="radio" name="gender" value="Male" /> Male
    <input type="radio" name="gender" value="Female" /> Female
    <div id="genderError" class="error"></div>

    <label>Hobbies</label>
    <input type="checkbox" name="hobbies" value="Reading" /> Reading
    <input type="checkbox" name="hobbies" value="Traveling" /> Traveling
    <input type="checkbox" name="hobbies" value="Gaming" /> Gaming

    <label for="country">Country *</label>
    <select name="country" id="country" required>
      <option value="">-- Select Country --</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="UK">UK</option>
    </select>
    <div id="countryError" class="error"></div>

    <label for="bio">Bio</label>
    <textarea id="bio" name="bio" rows="4" placeholder="Write something about yourself..."></textarea>

    <label for="resume">Upload Resume *</label>
    <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" />
    <div id="resumeError" class="error"></div>

    <button type="submit">Submit</button>
  </form>

  <script>
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual submission

      // Clear previous errors
      document.querySelectorAll('.error').forEach(el => el.innerText = "");

      // Get values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const gender = form.querySelector('input[name="gender"]:checked');
      const country = document.getElementById('country').value;
      const resume = document.getElementById('resume').files[0];

      let isValid = true;

      // Validation rules
      if (name === "") {
        document.getElementById('nameError').innerText = "Name is required.";
        isValid = false;
      }

      if (email === "" || !email.includes('@')) {
        document.getElementById('emailError').innerText = "Valid email is required.";
        isValid = false;
      }

      if (password.length < 6) {
        document.getElementById('passwordError').innerText = "Password must be at least 6 characters.";
        isValid = false;
      }

      if (!gender) {
        document.getElementById('genderError').innerText = "Please select your gender.";
        isValid = false;
      }

      if (country === "") {
        document.getElementById('countryError').innerText = "Select your country.";
        isValid = false;
      }

      if (!resume) {
        document.getElementById('resumeError').innerText = "Please upload your resume.";
        isValid = false;
      }

      // If valid, show alert or proceed
      if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
      }
    });
  </script>

</body>
</html>
