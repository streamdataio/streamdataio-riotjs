'use strict';

var userService = new UserAsyncService();

routes.users = function (id, item) {
    if (id) {
        if (item == 'profile') {
            // don't pass id as key: it's already reserved by the id of <div id="content">
            userService.fetchUserNameAndProfile(id)
                .then(userProfile => {
                    mount('user-profile', {user: userProfile});
                });

        } else if (item == 'hobbies') {
            userService.fetchUserNameAndHobbies(id)
                .then(userHobbies => {
                    mount('user-hobbies', {user: userHobbies});
                });
        }

    } else {
        userService.fetchUsers()
            .then(users => {
                mount('users-page', {users: users});
            });
    }
};