// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'personal project like blog, file sharing app or chat server', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: '*.zenith', // desired subdomain name
  owner: {
    repo: 'https://github.com/eli32-vlc/free-domains',
    email: 'lyu63651@gmail.com',
  },
  record: {
    NS: ['ns53.cloudns.net','ns54.cloudns.net'],
  },
  proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
