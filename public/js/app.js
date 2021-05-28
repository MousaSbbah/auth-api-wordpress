const authorizeUrl =
  'https://public-api.wordpress.com/oauth2/authorize';
const options = {
  client_id: 76057,
  redirect_uri: 'https://worddpress-oauth.herokuapp.com/oauth',
  response_type: 'code',
};
//https://public-api.wordpress.com/oauth2/authorize?client_id=76048&redirect_uri=http%3A%2F%2Flocalhost%3A3030%2Foauth&response_type=code
const queryString = Object.keys(options)
  .map((key) => {
    return `${key}=${encodeURIComponent(options[key])}`;
    // client_id=f99cc8c339968475c82d&scope=readEncodeColon&state=some_randome_string
  })
  .join('&');

console.log('query string: ', queryString);

const authUrl = `${authorizeUrl}?${queryString}`;
console.log(typeof(authUrl));
const a = document.getElementById('oauth');
a.setAttribute('href', authUrl);
