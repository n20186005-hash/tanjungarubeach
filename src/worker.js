export default {
  /** @param {Request} request @param {{ASSETS: {fetch: (request: Request) => Promise<Response>}}} env */
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.tanjungarubeach.com') {
      url.hostname = 'tanjungarubeach.com';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
