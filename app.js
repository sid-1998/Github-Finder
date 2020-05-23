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
                console.log("Not found");
            }
            else{
                //show profile
                
                // console.log(data);
                ui.showProfile(data.profile);
                
            }
        })
    }
    else{
        //clear the profile
    }

});
