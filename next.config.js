module.exports = {
  reactStrictMode: true,
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ['my-wordpress.sportslink.info'],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'file-loader'],
    });

    return config;
  },
};
