var vendorPath = 'node_modules';

var require = {
    waitSeconds: 200,
    baseUrl: '.',
    paths: {
        app: './app',

        babel: vendorPath + '/requirejs-babel/browser',
        polyfill: vendorPath + '/requirejs-babel/polyfill',
        es6: vendorPath + '/requirejs-babel/es6',

        firebase: vendorPath + '/firebase/firebase',
        rebase: vendorPath + '/re-base/dist/bundle',
        react: vendorPath + '/react/dist/react',
        reactDOM: vendorPath + '/react-dom/dist/react-dom',
        reactRouter: vendorPath + '/react-router/umd/ReactRouter',
        history: vendorPath + '/history/umd/History',
        classnames: vendorPath + 'classnames/index'
    },
    shim: {
        babel: {
            deps: ['polyfill']
        },
        firebase: {
            exports: 'Firebase'
        }
    }
};
