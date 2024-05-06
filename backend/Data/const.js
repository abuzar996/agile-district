const data = [
  {
    links: {
      self: "https://www.infostacktech.com/",
      "about-us": "https://www.infostacktech.com/about-us",
      "our-team":
        "https://www.infostacktech.com/services/custom-software-development#team",
    },
  },
  {
    data: [
      {
        type: "articles",
        id: "1",
        attributes: {
          title: "JSON:API!",
        },
        relationships: {
          author:
            '{"links":{"self":"http://example.com/articles/1/relationships/author","related":"http://example.com/articles/1/author"},"data":{"type":"people","id":"9"}}',
          comments: JSON.stringify({
            links: JSON.stringify({
              self: "http://example.com/articles/1/relationships/comments",
              related: "http://example.com/articles/1/comments",
            }),
            data: [
              { type: "comments", id: "5" },
              { type: "comments", id: "12" },
            ],
          }),
        },
        links: {
          self: "http://example.com/articles/1",
        },
      },
    ],
    included: [
      {
        type: "people",
        id: "9",
        attributes: {
          firstName: "Lorem",
          lastName: "Ipsem",
          twitter: "twitter",
        },
        links: {
          self: "http://example.com/people/*",
        },
      },
    ],
  },
  {
    type: "comments",
    id: "5",
    attributes: {
      body: "First!",
    },
    relationships: {
      author: {
        data: { type: "people", id: "2" },
      },
    },
    links: {
      self: "http://example.com/comments/2",
    },
  },
  {
    type: "comments",
    id: "12",
    attributes: {
      body: "This is a test comment.",
    },
    relationships: {
      author: {
        data: { type: "people", id: "9" },
      },
    },
    links: {
      self: "http://example.com/comments/12",
    },
  },
];

module.exports = data;
