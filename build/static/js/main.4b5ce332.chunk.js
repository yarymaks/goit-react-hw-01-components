(this.webpackJsonpcomponents = this.webpackJsonpcomponents || []).push([
  [0],
  [
    ,
    ,
    ,
    function (e) {
      e.exports = JSON.parse(
        '[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".png","percentage":10}]',
      );
    },
    ,
    function (e) {
      e.exports = JSON.parse(
        '{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg","stats":{"followers":5603,"views":4827,"likes":1308}}',
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]',
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]',
      );
    },
    ,
    ,
    ,
    ,
    function (e, t, a) {},
    ,
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    ,
    function (e, t, a) {},
    function (e, t, a) {
      'use strict';
      a.r(t);
      var c = a(1),
        n = a.n(c),
        s = a(4),
        i = a.n(s),
        r = (a(12), a(0)),
        d = function (e) {
          var t = e.name,
            a = e.tag,
            c = e.location,
            n = e.avatar,
            s = e.stats;
          return Object(r.jsxs)('div', {
            className: 'profile',
            children: [
              Object(r.jsxs)('div', {
                className: 'description',
                children: [
                  Object(r.jsx)('img', {
                    src: n,
                    alt: t,
                    className: 'avatar',
                    width: '250',
                  }),
                  Object(r.jsx)('p', { className: 'name', children: t }),
                  Object(r.jsxs)('p', { className: 'tag', children: ['@', a] }),
                  Object(r.jsx)('p', { className: 'location', children: c }),
                ],
              }),
              Object(r.jsx)('ul', {
                className: 'stats',
                children: Object.keys(s).map(function (e) {
                  return Object(r.jsxs)(
                    'li',
                    {
                      children: [
                        Object(r.jsx)('span', {
                          className: 'label',
                          children: e,
                        }),
                        Object(r.jsx)('span', {
                          className: 'quantity',
                          children: s[e],
                        }),
                      ],
                    },
                    e,
                  );
                }),
              }),
            ],
          });
        };
      d.defaultProps = {
        avatar:
          'https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg',
      };
      var l = d,
        o = function (e) {
          var t = e.socialProfile;
          return Object(r.jsx)('div', {
            className: 'profileList',
            children: Object(r.jsx)(l, {
              name: t.name,
              tag: t.tag,
              location: t.location,
              avatar: t.avatar,
              stats: t.stats,
            }),
          });
        },
        b = a(5),
        j = function (e) {
          var t = e.percentage,
            a = e.label;
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)('span', { className: 'label', children: a }),
              Object(r.jsxs)('span', {
                className: 'percentage',
                children: [t, '%'],
              }),
            ],
          });
        },
        u =
          (a(14),
          function (e) {
            var t = e.statics,
              a = e.title;
            return Object(r.jsxs)('section', {
              className: 'statistics',
              children: [
                a
                  ? Object(r.jsx)('h2', { className: 'title', children: a })
                  : '',
                Object(r.jsx)('ul', {
                  className: 'stat-list',
                  children: t.map(function (e, t) {
                    return Object(r.jsx)(
                      'li',
                      {
                        className: 'item',
                        style: {
                          backgroundColor: ''.concat(
                            '#' + Math.random().toString(16).substr(2, 6),
                          ),
                        },
                        children: Object(r.jsx)(j, {
                          label: e.label,
                          percentage: e.percentage,
                        }),
                      },
                      e.id,
                    );
                  }),
                }),
              ],
            });
          }),
        m = a(3),
        p =
          (a(15),
          function (e) {
            var t = e.isOnline,
              a = e.avatar,
              n = e.name;
            return Object(r.jsxs)(c.Fragment, {
              children: [
                Object(r.jsx)('span', { className: 'status '.concat(t) }),
                Object(r.jsx)('img', {
                  className: 'avatar',
                  src: a,
                  alt: n,
                  width: '64',
                }),
                Object(r.jsx)('p', { className: 'name', children: n }),
              ],
            });
          });
      p.defaultProps = {
        avatar:
          'https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg',
      };
      var f = p,
        h = function (e) {
          var t = e.friends;
          return Object(r.jsx)('ul', {
            className: 'friend-list',
            children: t.map(function (e) {
              return Object(r.jsx)(
                'li',
                {
                  className: 'item',
                  children: Object(r.jsx)(f, {
                    isOnline: e.isOnline,
                    avatar: e.avatar,
                    name: e.name,
                  }),
                },
                e.id,
              );
            }),
          });
        },
        O = a(6),
        x = function (e) {
          var t = e.currency,
            a = e.amount,
            n = e.type;
          return Object(r.jsxs)(c.Fragment, {
            children: [
              Object(r.jsx)('td', { children: n }),
              Object(r.jsx)('td', { children: a }),
              Object(r.jsx)('td', { children: t }),
            ],
          });
        },
        y =
          (a(16),
          function (e) {
            var t = e.transHistory;
            return Object(r.jsxs)('table', {
              className: 'transaction-history',
              children: [
                Object(r.jsx)('thead', {
                  children: Object(r.jsxs)('tr', {
                    children: [
                      Object(r.jsx)('th', { children: 'Type' }),
                      Object(r.jsx)('th', { children: 'Amount' }),
                      Object(r.jsx)('th', { children: 'Currency' }),
                    ],
                  }),
                }),
                Object(r.jsx)('tbody', {
                  children: t.map(function (e) {
                    return Object(r.jsx)(
                      'tr',
                      {
                        children: Object(r.jsx)(x, {
                          type: e.type,
                          amount: e.amount,
                          currency: e.currency,
                        }),
                      },
                      e.id,
                    );
                  }),
                }),
              ],
            });
          }),
        v = a(7),
        g =
          (a(17),
          function (e) {
            var t = e.children;
            return Object(r.jsx)('div', {
              className: 'Container',
              children: t,
            });
          }),
        w = function (e) {
          var t = e.children;
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsx)(g, { children: t }),
          });
        };
      var N = function () {
        return Object(r.jsxs)(w, {
          children: [
            Object(r.jsx)('h1', { children: 'Social Profile' }),
            Object(r.jsx)(o, { socialProfile: b }),
            Object(r.jsx)('h1', { children: 'Statistics' }),
            Object(r.jsx)(u, { title: 'Upload Files', statics: m }),
            Object(r.jsx)('h1', { children: 'Friend List' }),
            Object(r.jsx)(h, { friends: O }),
            Object(r.jsx)('h1', { children: 'Statistics 2' }),
            Object(r.jsx)(u, { statics: m }),
            Object(r.jsx)('h1', { children: 'Transaction History' }),
            Object(r.jsx)(y, { transHistory: v }),
          ],
        });
      };
      a(18), a(19);
      i.a.render(
        Object(r.jsx)(n.a.StrictMode, { children: Object(r.jsx)(N, {}) }),
        document.getElementById('root'),
      );
    },
  ],
  [[20, 1, 2]],
]);
//# sourceMappingURL=main.4b5ce332.chunk.js.map