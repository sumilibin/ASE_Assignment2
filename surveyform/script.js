
        function submitForm() {
           const form = document.getElementById('surveyForm');
           const resultContent = document.getElementById('resultContent');

           
            const firstName = document.getElementById('firstName').value;
            if(!firstName){
                alert('Please fill up First Name.');
                return;
            }
            const lastName = document.getElementById('lastName').value;
            if(!lastName){
                alert('Please fill up Last Name.');
                return;
            }
           const dob = document.getElementById('dob').value;
           if(!dob){
            alert('Please fill up Date of Birth.');
            return;
        }
            const country = document.getElementById('country').value;
            if(!firstName){
                alert('Please select country name.');
                return;
            }
            const genderElements = document.querySelectorAll('input[name="gender"]:checked');
            const profession = document.getElementById('profession').value;
            if(!profession){
                alert('Please fill up profession.');
                return;
            }
            const email = document.getElementById('email').value;
            if(!email){
                alert('Please fill up email.');
                return;
            }
            const mobile = document.getElementById('mobile').value;
            if(!mobile){
                alert('Please fill up mobile.');
                return;
            } 

             
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
            
            alert('Form submitted successfully!');
            form.reset();               
            
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