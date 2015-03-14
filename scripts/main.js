requirejs.config({
    baseUrl: "./scripts",
    paths: {
    	"react": "../node_modules/react/dist/react-with-addons.min",
    	"lodash": "../lib/lodash.min"
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