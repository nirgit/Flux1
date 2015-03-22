requirejs.config({
    baseUrl: "./scripts",
    paths: {
    	"react": "../bower_components/react/react-with-addons.min",
    	"lodash": "../bower_components/lodash/lodash.min"
    },
    shim: {
    	"react": {
    		"exports": "React"
    	},
    	"lodash": {
    		"exports": "_"
    	}
    },
    map: {
        '*': {
            'react/addons': 'react'
        }
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app']);