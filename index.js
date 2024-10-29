// -----------------about----------------

var skillsTab = document.getElementById("skills-tab")
var experienceTab = document.getElementById("experience-tab")
var educationTab = document.getElementById("education-tab")

var skillsContent = document.getElementById("skills-content")
var experienceContent = document.getElementById("experience-content")
var educationContent = document.getElementById("education-content")

function handleSkills(){

    skillsTab.classList.add("skill")
    experienceTab.classList.remove("experience")
    educationTab.classList.remove("education")

    skillsContent.style.display = "block"
    experienceContent.style.display = "none"
    educationContent.style.display = "none"
}

function handleExperience(){

    skillsTab.classList.remove("skill")
    experienceTab.classList.add("experience")
    educationTab.classList.remove("education")

    skillsTab.classList.remove("active-tab")

    skillsContent.style.display = "none"
    experienceContent.style.display = "block"
    educationContent.style.display = "none"

}
function handleEducation(){

    skillsTab.classList.remove("skill")
    experienceTab.classList.remove("experience")
    educationTab.classList.add("education")

    skillsTab.classList.remove("active-tab")

    skillsContent.style.display = "none"
    experienceContent.style.display = "none"
    educationContent.style.display = "block"

}

const unOrderList = document.getElementById("unorder-list")

function handleMenuOpen(){
    unOrderList.style.right = "0"
}
function handleMenuClose(){
    unOrderList.style.right = "-200px"
}

// -------------------excel sheet data ---------------------------

const sentMsg = document.getElementById("sent-msg")

const scriptURL = 'https://script.google.com/macros/s/AKfycbxAxiHC6JCLiLYD_xFZ6WJkJ1S6HNQv3Y4bGx_naoIslupzG96NUe1-XggpnK3I46HNTQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        sentMsg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            sentMsg.innerHTML = ""
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
