/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    plugins: ['@snowpack/plugin-typescript'],
    mount: {
        src: '/dist',
        public: '/'
    }
};
