const searchUser = document.getElementById('searchUser');
const github = new Github();
const ui = new UI();

searchUser.addEventListener('keyup', (e)=>{
    const userText = e.target.value;

    if(userText !== ''){
        // Make http call
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message === 'Not Found'){
                //user not found
                ui.showAlert('User not Found', 'alert alert-danger');
            }
            else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                
            }
        })
    }
    else{
        //clear the profile
        ui.clearProfile();
    }

});
