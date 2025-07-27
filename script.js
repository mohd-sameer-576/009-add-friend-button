let statusMessage = document.querySelector(".statusMessage");
let addFriendButton = document.querySelector(".addFriendButton");
count = 0;
addFriendButton.addEventListener("click", function() {
    if (count === 0) {
        statusMessage.innerText = "Friends";
        statusMessage.style.color = "green";
        addFriendButton.style.backgroundColor = "red";
        addFriendButton.style.color = "white";
        addFriendButton.innerText = "UnFollow";
        count++;
    }else {
        statusMessage.innerText = "Stranger";
        statusMessage.style.color = "red";
        addFriendButton.style.backgroundColor = "#007bff";
        addFriendButton.style.color = "white";
        addFriendButton.innerText = "Add Friend";
        count--;
    }
});