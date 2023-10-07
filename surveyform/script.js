
        function submitForm() {
            const form = document.getElementById('surveyForm');
            const resultContent = document.getElementById('resultContent');

           
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const dob = document.getElementById('dob').value;
            const country = document.getElementById('country').value;
            const genderElements = document.querySelectorAll('input[name="gender"]:checked');
            const profession = document.getElementById('profession').value;
            const email = document.getElementById('email').value;
            const mobile = document.getElementById('mobile').value;

            
            let gender = '';
            if (genderElements.length > 0) {
                genderElements.forEach(element => {
                    gender += element.value + ', ';
                });
                gender = gender.slice(0, -2); 
            } else {
                alert('Please select at least one gender.');
                return;
            }

            
            const result = `

                First Name: ${firstName}<br>
                Last Name: ${lastName}<br>
                Date of Birth: ${dob}<br>
                Country: ${country}<br>
                Gender: ${gender}<br>
                Profession: ${profession}<br>
                Email: ${email}<br>
                Mobile Number: ${mobile}
            `;

            resultContent.innerHTML = result;

           
            const popup = document.getElementById('resultPopup');
            popup.style.display = 'block';
        }

        function closePopup() {
            const popup = document.getElementById('resultPopup');
            popup.style.display = 'none';

           
            document.getElementById('surveyForm').reset();
        }