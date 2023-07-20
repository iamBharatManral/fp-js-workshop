const checkUsersValid = validUsers =>
        users =>
            users.every(user => validUsers.some(usr => user.id === usr.id))

module.exports = checkUsersValid
