const sequelize = require('sequelize')

const seq = require('./seq')
//创建User模型
const User = seq.define('user', {
    //id会自动创建，并设为主键，自增
    userName: {
        type: sequelize.STRING,//varchar(255)
        allowNull: false
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
    nickName: {
        type: sequelize.STRING,
        comment: '昵称'
    }
});
//创建blog模型
const Blog = seq.define('blog', {
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    content: {
        type: sequelize.TEXT,
        allowNull: false
    },
    userId: {
        type: sequelize.INTEGER,
        allowNull: false
    }
})

//外键关联
Blog.belongsTo(User,{
    //创建外键 Blog.userId->User.id
    foreignKey:'userId'
})

User.hasMany(Blog,{
    //创建外键 Blog.userId->User.id
    foreignKey:'userId'
})
module.exports = {
    User,
    Blog
} 