/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        src: "/src",
        public: "/",
    },
    plugins: ["@snowpack/plugin-optimize", "@snowpack/plugin-typescript"],
    devOptions: {
        hmr: false,
    },
    buildOptions: {
        metaUrlPath: "dist",
    },
    optimize: {
        bundle: true,
        target: "es2017",
    },
};
