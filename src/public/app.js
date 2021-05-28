const authorizeUrl =
  'https:­//p­ubl­ic-­api.wo­rdp­res­s.c­om/­oau­th2­/au­thorize';
const options = {
  client_id: '76048',
  redirect_uri: 'http://localhost:3030/oauth',
  response_type: 'code',
};

const queryString = Object.keys(options)
  .map((key) => {
    return `${key}=${encodeURIComponent(options[key])}`;
    // client_id=f99cc8c339968475c82d&scope=readEncodeColon&state=some_randome_string
  })
  .join('&');

console.log('query string: ', queryString);

const authUrl = `${authorizeUrl}?${queryString}`;
console.log(authUrl);
const a = document.getElementById('oauth');
a.setAttribute('href', authUrl);
