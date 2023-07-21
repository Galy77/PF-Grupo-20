const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'div8rdrjb', 
    api_key: '875744763524232', 
    api_secret: 'GObqz15Td0ZeBX22r4xiw0r2o5M' 
});

module.exports = cloudinary;