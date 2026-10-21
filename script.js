// DOM Element References
const tabReg = document.getElementById('tab-reg');
const tabLogin = document.getElementById('tab-login');
const cardTitle = document.getElementById('card-title');
const cardSubtitle = document.getElementById('card-subtitle');
const roleBlock = document.getElementById('role-selector-block');
const roleButtons = document.querySelectorAll('.role-btn');

// Form Field References
const fieldFullName = document.getElementById('field-fullname');
const fieldId = document.getElementById('field-id');
const idLabel = document.getElementById('id-label');
const idHint = document.getElementById('id-hint');
const idInput = document.getElementById('institutional-id');

const emailLabel = document.getElementById('email-label');
const emailHint = document.getElementById('email-hint');
const emailInput = document.getElementById('email');

const groupTerms = document.getElementById('group-terms');
const groupRemember = document.getElementById('group-remember');
const linkForgot = document.getElementById('link-forgot');
const submitBtn = document.getElementById('submit-btn');

const togglePwBtn = document.getElementById('toggle-pw');
const pwInput = document.getElementById('password');

// Role Configuration Data
const roleConfig = {
    student: {
        label: 'STUDENT ID',
        hint: 'Format: YYYY-XXXXXX',
        placeholder: 'e.g., 2020123456',
        emailPlaceholder: 'student@ms.bulsu.edu.ph',
        btnText: 'Complete Student Registration →'
    },
    teacher: {
        label: 'FACULTY ID NUMBER',
        hint: 'Format: FAC-YYYY-XXX',
        placeholder: 'e.g., FAC-2020-123',
        emailPlaceholder: 'faculty@ms.bulsu.edu.ph',
        btnText: 'Complete Teacher Registration →'
    },
    admin: {
        label: 'AUTHORIZATION KEY',
        hint: 'Format: System Security Clearance',
        placeholder: 'e.g., ADM-123-456',
        emailPlaceholder: 'admin@ms.bulsu.edu.ph',
        btnText: 'Complete Admin Registration →'
    }
};

let currentRole = 'student';

// --- Role Selection Handler ---
roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        roleButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentRole = btn.getAttribute('data-role');
        const config = roleConfig[currentRole];

        idLabel.textContent = config.label;
        idHint.textContent = config.hint;
        idInput.placeholder = config.placeholder;
        emailInput.placeholder = config.emailPlaceholder;
        submitBtn.textContent = config.btnText;
    });
});

// --- Tab Switcher: Registration vs Login ---
tabReg.addEventListener('click', () => {
    tabReg.classList.add('active');
    tabLogin.classList.remove('active');

    cardTitle.innerHTML = 'Create Your <span>Identity</span>';
    cardSubtitle.textContent = 'Join thousands of members managing academic operations in real time.';

    roleBlock.classList.remove('hidden');
    fieldFullName.classList.remove('hidden');
    fieldId.classList.remove('hidden');
    groupTerms.classList.remove('hidden');

    groupRemember.classList.add('hidden');
    linkForgot.classList.add('hidden');

    emailLabel.textContent = 'EMAIL ADDRESS';
    emailHint.textContent = '@ms.bulsu.edu.ph';
    emailInput.placeholder = roleConfig[currentRole].emailPlaceholder;

    submitBtn.textContent = roleConfig[currentRole].btnText;
});

tabLogin.addEventListener('click', () => {
    tabLogin.classList.add('active');
    tabReg.classList.remove('active');

    cardTitle.innerHTML = 'Login to <span>Classora</span>';
    cardSubtitle.textContent = 'An Intelligent Classroom Scheduling and Room Allocation System with Automated Conflict-Free Timetable Generation';

    roleBlock.classList.add('hidden');
    fieldFullName.classList.add('hidden');
    fieldId.classList.add('hidden');
    groupTerms.classList.add('hidden');

    groupRemember.classList.remove('hidden');
    linkForgot.classList.remove('hidden');

    emailLabel.textContent = 'EMAIL, ID, OR PASSKEY';
    emailHint.textContent = '';
    emailInput.placeholder = 'e.g. 2024-10293 or admin.code';

    submitBtn.textContent = 'Login to Classora';
});

// --- Password Visibility Toggle ---
togglePwBtn.addEventListener('click', () => {
    const isPassword = pwInput.getAttribute('type') === 'password';
    pwInput.setAttribute('type', isPassword ? 'text' : 'password');
    togglePwBtn.textContent = isPassword ? '🙈' : '👁️';
});