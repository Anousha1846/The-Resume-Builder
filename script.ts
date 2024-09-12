
interface Skills {
    addMoreSkills: string;
}

const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const addSkillsBtn = document.getElementById('addSkillsBtn') as HTMLButtonElement;
const skillsContainer = document.getElementById('skillsContainer') as HTMLDivElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const editBtn = document.getElementById('editBtn') as HTMLButtonElement;
let isSkillsFieldVisible = false;

let currentResumeData: any = {};

// Toggle Skills Input Field
const toggleSkillsField = () => {
    if (isSkillsFieldVisible) {
        const skillsDiv = document.querySelector('.extraSkillDiv') as HTMLDivElement;
        if (skillsDiv) skillsContainer.removeChild(skillsDiv);
    } else {
        const skillsDiv = document.createElement('div');
        skillsDiv.classList.add('extraSkillDiv');
        skillsDiv.innerHTML = `
            <label for="addMoreSkills">Add More Skills:</label>
            <input type="text" name="addMoreSkills" id="addMoreSkills">
        `;
        skillsContainer.appendChild(skillsDiv);
    }
    isSkillsFieldVisible = !isSkillsFieldVisible;
};

const generateResume = (event: Event) => {
    event.preventDefault();

    // Fetch user input
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const profilePicture = profilePictureInput.files?.[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const profilePictureURL = event.target?.result as string;
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const dateOfBirth = (document.getElementById('dateOfBirth') as HTMLInputElement).value;
        const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
        const company = (document.getElementById('Company') as HTMLInputElement).value;
        const duration = (document.getElementById('Duration') as HTMLInputElement).value;
        const degree = (document.getElementById('Degree') as HTMLInputElement).value;
        const institution = (document.getElementById('Institution') as HTMLInputElement).value;
        const year = (document.getElementById('Year') as HTMLInputElement).value;
        const professionalSkill = (document.getElementById('ProfessionalSkill') as HTMLInputElement).value;
        const softSkill = (document.getElementById('SoftSkill') as HTMLInputElement).value;
        const additionalSkill = isSkillsFieldVisible
            ? (document.getElementById('addMoreSkills') as HTMLInputElement).value
            : '';

        // Save user input
        currentResumeData = { name, email, phone, dateOfBirth, profilePicture, jobTitle, company, duration, degree, institution, year, professionalSkill, softSkill, additionalSkill };

        // Create resume HTML
        const resumeHTML = `
            <div class="main" style="border: 2px solid grey; margin: 30px; padding: 10px 35px; box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.19); background-color: rgb(218, 239, 240); border-radius: 8px; font-size: large;"> 
                <h1 style="text-decoration: underline; font-family: monospace; font-size:35px;">Resume</h1><br>
                <div class="resume-section">
                    <img src="${profilePictureURL}" alt="Profile Picture" style="width:150px;height:150px;border-radius:50%;">
                    <h2>${name}</h2>
                    <h5>Email: ${email}</h5>
                    <h5>Phone: ${phone}</h5>
                    <h5>Date of Birth: ${dateOfBirth}</h5> 
                </div>
                <div class="resume-section">
                    <h3>Education</h3>
                    <h4>Degree: ${degree}</h4>
                    <h5>Institution: ${institution}</h5>
                    <h5>Year: ${year}</h5>
                </div>
                <div class="resume-section">
                    <h3>Experience</h3>
                    <h4>Job Title: ${jobTitle}</h4>
                    <h5>Company: ${company}</h5>
                    <h5>Duration: ${duration}</h5>
                </div>
                <div class="resume-section">
                    <h3>Skills</h3>
                    <h4>Professional Skills: ${professionalSkill}</h4>
                    <h5>Soft Skills: ${softSkill}</h5>
                    ${additionalSkill ? `<h5>Additional Skill: ${additionalSkill}</h5>` : ''}
                </div>
            </div>
        `;

        resumeOutput.innerHTML = resumeHTML;

    };

    if (profilePicture) {
        reader.readAsDataURL(profilePicture);
    }
};

const editResume = () => {
    // Pre-fill the form fields with the current resume data
    (document.getElementById('name') as HTMLInputElement).value = currentResumeData.name;
    (document.getElementById('email') as HTMLInputElement).value = currentResumeData.email;
    (document.getElementById('phone') as HTMLInputElement).value = currentResumeData.phone;
    (document.getElementById('dateOfBirth') as HTMLInputElement).value = currentResumeData.dateOfBirth;
    // (document.getElementById('profilePicture') as HTMLInputElement).value = currentResumeData.profilePicture;

    (document.getElementById('jobTitle') as HTMLInputElement).value = currentResumeData.jobTitle;
    (document.getElementById('Company') as HTMLInputElement).value = currentResumeData.company;
    (document.getElementById('Duration') as HTMLInputElement).value = currentResumeData.duration;

    (document.getElementById('Degree') as HTMLInputElement).value = currentResumeData.degree;
    (document.getElementById('Institution') as HTMLInputElement).value = currentResumeData.institution;
    (document.getElementById('Year') as HTMLInputElement).value = currentResumeData.year;

    (document.getElementById('ProfessionalSkill') as HTMLInputElement).value = currentResumeData.professionalSkill;
    (document.getElementById('SoftSkill') as HTMLInputElement).value = currentResumeData.softSkill;
    (document.getElementById('addMoreSkills') as HTMLInputElement).value = currentResumeData.addMoreSkills ?? '';
};



// Event listeners
addSkillsBtn.addEventListener('click', toggleSkillsField);
resumeForm.addEventListener('submit', generateResume);
editBtn.addEventListener('click', editResume);
