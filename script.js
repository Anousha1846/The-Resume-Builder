var resumeForm = document.getElementById('resumeForm');
var addSkillsBtn = document.getElementById('addSkillsBtn');
var skillsContainer = document.getElementById('skillsContainer');
var resumeOutput = document.getElementById('resumeOutput');
var editBtn = document.getElementById('editBtn');
var isSkillsFieldVisible = false;
var currentResumeData = {};
// Toggle Skills Input Field
var toggleSkillsField = function () {
    if (isSkillsFieldVisible) {
        var skillsDiv = document.querySelector('.extraSkillDiv');
        if (skillsDiv)
            skillsContainer.removeChild(skillsDiv);
    }
    else {
        var skillsDiv = document.createElement('div');
        skillsDiv.classList.add('extraSkillDiv');
        skillsDiv.innerHTML = "\n            <label for=\"addMoreSkills\">Add More Skills:</label>\n            <input type=\"text\" name=\"addMoreSkills\" id=\"addMoreSkills\">\n        ";
        skillsContainer.appendChild(skillsDiv);
    }
    isSkillsFieldVisible = !isSkillsFieldVisible;
};
var generateResume = function (event) {
    var _a;
    event.preventDefault();
    // Fetch user input
    var profilePictureInput = document.getElementById('profilePicture');
    var profilePicture = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var _a;
        var profilePictureURL = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var dateOfBirth = document.getElementById('dateOfBirth').value;
        var jobTitle = document.getElementById('jobTitle').value;
        var company = document.getElementById('Company').value;
        var duration = document.getElementById('Duration').value;
        var degree = document.getElementById('Degree').value;
        var institution = document.getElementById('Institution').value;
        var year = document.getElementById('Year').value;
        var professionalSkill = document.getElementById('ProfessionalSkill').value;
        var softSkill = document.getElementById('SoftSkill').value;
        var additionalSkill = isSkillsFieldVisible
            ? document.getElementById('addMoreSkills').value
            : '';
        // Save user input
        currentResumeData = { name: name, email: email, phone: phone, dateOfBirth: dateOfBirth, profilePicture: profilePicture, jobTitle: jobTitle, company: company, duration: duration, degree: degree, institution: institution, year: year, professionalSkill: professionalSkill, softSkill: softSkill, additionalSkill: additionalSkill };
        // Create resume HTML
        var resumeHTML = "\n            <div class=\"main\" style=\"border: 2px solid grey; margin: 30px; padding: 10px 35px; box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.19); background-color: rgb(218, 239, 240); border-radius: 8px; font-size: large;\"> \n                <h1 style=\"text-decoration: underline; font-family: monospace; font-size:35px;\">Resume</h1><br>\n                <div class=\"resume-section\">\n                    <img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" style=\"width:150px;height:150px;border-radius:50%;\">\n                    <h2>").concat(name, "</h2>\n                    <h5>Email: ").concat(email, "</h5>\n                    <h5>Phone: ").concat(phone, "</h5>\n                    <h5>Date of Birth: ").concat(dateOfBirth, "</h5> \n                </div>\n                <div class=\"resume-section\">\n                    <h3>Education</h3>\n                    <h4>Degree: ").concat(degree, "</h4>\n                    <h5>Institution: ").concat(institution, "</h5>\n                    <h5>Year: ").concat(year, "</h5>\n                </div>\n                <div class=\"resume-section\">\n                    <h3>Experience</h3>\n                    <h4>Job Title: ").concat(jobTitle, "</h4>\n                    <h5>Company: ").concat(company, "</h5>\n                    <h5>Duration: ").concat(duration, "</h5>\n                </div>\n                <div class=\"resume-section\">\n                    <h3>Skills</h3>\n                    <h4>Professional Skills: ").concat(professionalSkill, "</h4>\n                    <h5>Soft Skills: ").concat(softSkill, "</h5>\n                    ").concat(additionalSkill ? "<h5>Additional Skill: ".concat(additionalSkill, "</h5>") : '', "\n                </div>\n            </div>\n        ");
        resumeOutput.innerHTML = resumeHTML;
    };
    if (profilePicture) {
        reader.readAsDataURL(profilePicture);
    }
};
var editResume = function () {
    var _a;
    // Pre-fill the form fields with the current resume data
    document.getElementById('name').value = currentResumeData.name;
    document.getElementById('email').value = currentResumeData.email;
    document.getElementById('phone').value = currentResumeData.phone;
    document.getElementById('dateOfBirth').value = currentResumeData.dateOfBirth;
    // (document.getElementById('profilePicture') as HTMLInputElement).value = currentResumeData.profilePicture;
    document.getElementById('jobTitle').value = currentResumeData.jobTitle;
    document.getElementById('Company').value = currentResumeData.company;
    document.getElementById('Duration').value = currentResumeData.duration;
    document.getElementById('Degree').value = currentResumeData.degree;
    document.getElementById('Institution').value = currentResumeData.institution;
    document.getElementById('Year').value = currentResumeData.year;
    document.getElementById('ProfessionalSkill').value = currentResumeData.professionalSkill;
    document.getElementById('SoftSkill').value = currentResumeData.softSkill;
    document.getElementById('addMoreSkills').value = (_a = currentResumeData.addMoreSkills) !== null && _a !== void 0 ? _a : '';
};
// Event listeners
addSkillsBtn.addEventListener('click', toggleSkillsField);
resumeForm.addEventListener('submit', generateResume);
editBtn.addEventListener('click', editResume);
