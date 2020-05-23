const searchUser = document.getElementById('searchUser');
const github = new Github();


searchUser.addEventListener('keyup', (e)=>{
    const userText = e.target.value;

    if(userText !== ''){
        // Make http call
        github.getUser(userText)
        .then(data=>{
            if(data === 'Not Found'){
                //user not found
            }
            else{
                //show profile
                console.log(data);
            }
        })
    }
    else{
        //clear the profile
    }

});
