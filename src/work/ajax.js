const users = $.get('http://localhost:3000/api/users/', function(users) {
    console.log("receive users", users);

    users.sort((user1,user2)=> user1.name<user2.name ? -1:1) ;
    displayUsers(users);

});

$.get('/api/users/admins/', function (admins) {
    console.log("admins:", admins.map(admin=>admin.name))
});


function displayUsers(users) {

    const block =$('<ul>');
    users.forEach(function (user) {
        const pElement = $('<li>').text(user.name);
        block.append(pElement);



    });
    $('section.users').append(block);
}