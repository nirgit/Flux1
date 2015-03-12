requirejs.config({
    baseUrl: "./scripts",
    paths: {
    	"react": "../node_modules/react/dist/react-with-addons.min"
    },
    shim: {
    	"react": {
    		"exports": "React"
    	}
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['react','app']);