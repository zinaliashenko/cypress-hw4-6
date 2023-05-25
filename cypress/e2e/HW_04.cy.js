describe("Trello API 1", () => {
  const request = {
    method: "GET",
    url: "https://api.trello.com/1/members/me/boards",
    failOnStatusCode: false,
    qs: {
      key: "1fcf0ca8724ac8d0939f3a40308a7324",
      token:
        "ATTA8940a2b1af887bfb4e18f8ab080c60e78c630217af8125e9d66fb5a194b3f8e591917183",
      id: "63da800dbade4c8d87b208bb",
    },
  };
  it("GET all boards", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });
});

describe("Trello API 2", () => {
  const bodyData = {
    desc: "This is my new board",
  };
  const request = {
    method: "POST",
    url: "https://api.trello.com/1/boards",
    failOnStatusCode: false,
    qs: {
      key: "1fcf0ca8724ac8d0939f3a40308a7324",
      token:
        "ATTA8940a2b1af887bfb4e18f8ab080c60e78c630217af8125e9d66fb5a194b3f8e591917183",
      name: "The Newest Board",
    },
    body: bodyData,
  };
  it("Create a new board", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("This is my new board", response.body["desc"]);
      assert.isTrue(response.duration <= 2000);
    });
  });
});

describe("Trello API 3", () => {
  const id = "6388b98855b3760046f8da4d";
  const request = {
    method: "DELETE",
    url: `https://api.trello.com/1/boards/${id}`,
    failOnStatusCode: false,
    qs: {
      key: "1fcf0ca8724ac8d0939f3a40308a7324",
      token:
        "ATTA8940a2b1af887bfb4e18f8ab080c60e78c630217af8125e9d66fb5a194b3f8e591917183",
    },
  };
  it("Delete board with id", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.isTrue(response.duration <= 2000);
    });
  });
});

describe("Trello API 4", () => {
  const id = "63fcf9ab1e13c0c591dc31bf";
  const request = {
    method: "GET",
    url: `https://api.trello.com/1/boards/${id}/lists`,
    failOnStatusCode: false,
    qs: {
      key: "1fcf0ca8724ac8d0939f3a40308a7324",
      token:
        "ATTA8940a2b1af887bfb4e18f8ab080c60e78c630217af8125e9d66fb5a194b3f8e591917183",
    },
    headers: {
      customHeader: "application/json",
    },
  };
  it("Get list on the board", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("application/json", response.requestHeaders.customHeader);
    });
  });
});

describe("Trello API 5", () => {
  const id = "63fcf9ab1e13c0c591dc31bf";
  const bodyData = {
    name: "New name for my board",
    desc: "New description for my board",
  };
  const request = {
    method: "PUT",
    failOnStatusCode: false,
    url: `https://api.trello.com/1/boards/${id}`,
    qs: {
      key: "1fcf0ca8724ac8d0939f3a40308a7324",
      token:
        "ATTA8940a2b1af887bfb4e18f8ab080c60e78c630217af8125e9d66fb5a194b3f8e591917183",
    },
    body: bodyData,
  };
  it("Update an existing board by id", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal(bodyData.name, response.body["name"]);
      assert.equal(bodyData.desc, response.body["desc"]);
    });
  });
});

describe("Trello API 6", () => {
  const id = "63fcf9ab1e13c0c591dc31bf";
  const request = {
    method: "GET",
    url: `https://api.trello.com/1/boards/${id}/lists`,
    headers: {
      "user-agent":
        "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion",
    },
    qs: {
      key: "1fcf0ca8724ac8d0939f3a40308a7324",
      token:
        "ATTA8940a2b1af887bfb4e18f8ab080c60e78c630217af8125e9d66fb5a194b3f8e591917183",
    },
    failOnStatusCode: false,
  };
  it("GET a list", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal(
        "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion",
        response.requestHeaders["user-agent"]
      );
    });
  });
});

describe("Trello API 7", () => {
  const id = "63fcf9ab1e13c0c591dc31bf";
  const request = {
    method: "GET",
    url: `/1/lists/${id}/cards`,
    qs: {
      key: "1fcf0ca8724ac8d0939f3a40308a7324",
      token:
        "ATTA8940a2b1af887bfb4e18f8ab080c60e78c630217af8125e9d66fb5a194b3f8e591917183",
    },
    headers: {
      Cookie: "cookieName=cookieValue",
    },
    failOnStatusCode: false,
  };
  it("Get Cards in a List and send cookie", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("cookieName=cookieValue", response.requestHeaders["Cookie"]);
    });
  });
});

describe("Trello API 8", () => {
  const id = "63fcf9ab1e13c0c591dc31bf";
  const request = {
    method: "POST",
    url: `https://api.trello.com/1/boards/${id}/lists`,
    qs: {
      key: "1fcf0ca8724ac8d0939f3a40308a7324",
      token:
        "ATTA8940a2b1af887bfb4e18f8ab080c60e78c630217af8125e9d66fb5a194b3f8e591917183",
      name: "Name of the List on the Board",
    },
    failOnStatusCode: false,
  };
  it("Create a List on a Board - check response duration", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.isTrue(response.duration <= 2000);
    });
  });
});

describe("Trello API 9", () => {
  it("Create new lists with name of random color", () => {
    for (let i = 0; i <= 3; i++) {
      const randomColor = getRandomHexColor();
      const request = {
        method: "POST",
        url: `https://api.trello.com/1/lists`,
        qs: {
          key: "1fcf0ca8724ac8d0939f3a40308a7324",
          token:
            "ATTA8940a2b1af887bfb4e18f8ab080c60e78c630217af8125e9d66fb5a194b3f8e591917183",
          idBoard: "64653ab1b86e085e9da86f61",
          name: `${randomColor}`,
        },
        failOnStatusCode: false,
      };
      cy.request(request).then((response) => {
        assert.isTrue(response.status == 200);
      });
    }
  });
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

describe("Trello API 10", () => {
  const boardId = "63fcf9ab1e13c0c591dc31bf";
  const request = {
    method: "POST",
    url: `https://api.trello.com/1/boards/${boardId}/boardStars`,
    qs: {
      key: "1fcf0ca8724ac8d0939f3a40308a7324",
      token:
        "ATTA8940a2b1af887bfb4e18f8ab080c60e78c630217af8125e9d66fb5a194b3f8e591917183",
    },
    failOnStatusCode: false,
  };
  it("Get boardStars on a Board - wrong request method", () => {
    cy.request(request).then((response) => {
      assert.equal(404, response.status);
    });
  });
});
