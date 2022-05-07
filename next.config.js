module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['next-wp-local', 'cdn.pixabay.com'],
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
