/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        src: "/src",
        public: "/",
    },
    plugins: ["@snowpack/plugin-typescript"],
    devOptions: {
        hmr: false,
    },
};
