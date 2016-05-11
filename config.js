

module.exports =  {
    environment: process.env.NODE_ENV || 'development',    
    port: process.env.PORT || 1234,
    mongodb: process.env.MONGO || 'mongodb://localhost/pandera'
};