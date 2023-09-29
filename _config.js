var config = {}
// 'mongodb+srv://njmwas:Lk6DF5OeyJQowmwa@devops-ip-01.sazurxy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://njmwas:Lk6DF5OeyJQowmwa@devops-ip-01.sazurxy.mongodb.net/devops-ip01-gallery?retryWrites=true&w=majority&appName=AtlasApp',
    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
