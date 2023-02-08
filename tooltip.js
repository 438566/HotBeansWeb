const courseMsg = document.getElementById('courses-message');
const companyMsg = document.getElementById('company-message');
const traineeMsg = document.getElementById('trainees-message');

const coursesImg = document.querySelector('#navImgC');
const companyImg = document.querySelector('#navImgCc');
const traineeImg = document.querySelector('#navImgT');

coursesImg.addEventListener('mouseover', function() {
    courseMsg.classList.add('active');
    courseMsg.classList.remove('inactive');
    coursesImg.addEventListener('mouseout', function() {
        courseMsg.classList.remove('active');
        courseMsg.classList.add('inactive')
    })
})

companyImg.addEventListener('mouseover', function() {
    companyMsg.classList.add('active');
    companyMsg.classList.remove('inactive')
    companyImg.addEventListener('mouseout', function() {
        companyMsg.classList.remove('active');
        companyMsg.classList.add('inactive')
    })
})

traineeImg.addEventListener('mouseover', function() {
    traineeMsg.classList.add('active');
    traineeMsg.classList.remove('inactive')
    traineeImg.addEventListener('mouseout', function() {
        traineeMsg.classList.remove('active');
        traineeMsg.classList.add('inactive')
    })
})