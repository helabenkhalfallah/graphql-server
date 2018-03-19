module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": { 
            "jsx": true
        },
        "sourceType": "module"
    }, 
    "rules": {
        "linebreak-style": 0, 
        "indent": [
            2,
            2,
            {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "no-param-reassign": 0,
        "semi": [
            "error",
            "never"
        ]
    }
};