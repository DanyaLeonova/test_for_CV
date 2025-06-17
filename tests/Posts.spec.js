const { test, expect } = require('@playwright/test');
const Ajv = require('ajv').default;
const ajv = new Ajv({
    allErrors: true
});
const addFormats = require('ajv-formats').default;
addFormats(ajv);

test(`Verify env availability`, async ({ request }) => {
    const baseCheck = await request.get(`/`);
    expect(baseCheck.status()).toBe(200);
})

test(`Posts: GET request - Verify status and data`, async ({ request }) => {
    const response = await request.get('/posts/1');
    await expect(response).toBeOK();

    const schema = {
        type: 'object',
        properties: {
            userId: { type: 'number' },
            id: { type: 'number' },
            title: { type: `string` },
            body: { type: `string` }
    },
    required: ['userId', 'id', `title`, `body`]
    }

    const getResponse = await response.json();
    expect(getResponse.userId).toBe(1);
    expect(getResponse.id).toBe(1);
    expect(getResponse.title).toBeDefined();
    expect(getResponse.body).toBeDefined();

    const validate = ajv.compile(schema);
    const isValid = validate(getResponse);

    if (!isValid) {
    console.error('Schema validation errors:', validate.errors);
    }
    expect(isValid).toBeTruthy()
});

test(`Comments: GET request - Verify status and data`, async ({ request }) => {
    const response = await request.get('/comments/1');
    await expect(response).toBeOK();

    const schema = {
        type: 'object',
        properties: {
            postId: { type: 'number' },
            id: { type: 'number' },
            name: { type: `string` },
            email: { type: `string`, format: `email` },
            body: { type: `string` }
    },
    required: ['postId', 'id', `name`, `email`, `body`]
    }

    const getResponse = await response.json();
    expect(getResponse.postId).toBe(1);
    expect(getResponse.id).toBe(1);
    expect(getResponse.name).toBeDefined();
    expect(getResponse.email).toBeDefined();
    expect(getResponse.body).toBeDefined();

    const validate = ajv.compile(schema);
    const isValid = validate(getResponse);

    if (!isValid) {
    console.error('Schema validation errors:', validate.errors);
    }
    expect(isValid).toBeTruthy()
});

test(`Albums: GET request - Verify status and data`, async ({ request }) => {
    const response = await request.get('/albums/1');
    await expect(response).toBeOK();

    const schema = {
        type: 'object',
        properties: {
            userId: { type: 'number' },
            id: { type: 'number' },
            title: { type: `string` }
    },
    required: ['userId', 'id', `title`]
    }

    const getResponse = await response.json();
    expect(getResponse.userId).toBe(1);
    expect(getResponse.id).toBe(1);
    expect(getResponse.title).toBeDefined();

    const validate = ajv.compile(schema);
    const isValid = validate(getResponse);

    if (!isValid) {
    console.error('Schema validation errors:', validate.errors);
    }
    expect(isValid).toBeTruthy()
});

test(`Photos: GET request - Verify status and data`, async ({ request }) => {
    const response = await request.get('/photos/1');
    await expect(response).toBeOK();

    const schema = {
        type: 'object',
        properties: {
            albumId: { type: 'number' },
            id: { type: 'number' },
            title: { type: `string` },
            url: { type: `string`, format: `uri` },
            thumbnailUrl: { type: `string`, format: `uri` }
    },
    required: ['albumId', 'id', `title`, `url`, `thumbnailUrl`]
    }

    const getResponse = await response.json();
    expect(getResponse.albumId).toBe(1);
    expect(getResponse.id).toBe(1);
    expect(getResponse.title).toBeDefined();
    expect(getResponse.url).toBeDefined();
    expect(getResponse.thumbnailUrl).toBeDefined();

    const validate = ajv.compile(schema);
    const isValid = validate(getResponse);

    if (!isValid) {
    console.error('Schema validation errors:', validate.errors);
    }
    expect(isValid).toBeTruthy()
});

test(`Todos: GET request - Verify status and data`, async ({ request }) => {
    const response = await request.get('/todos/1');
    await expect(response).toBeOK();

    const schema = {
        type: 'object',
        properties: {
            userId: { type: 'number' },
            id: { type: 'number' },
            title: { type: `string` },
            completed: { type: `boolean` }
    },
    required: ['userId', 'id', `title`, `completed`]
    }

    const getResponse = await response.json();
    expect(getResponse.userId).toBe(1);
    expect(getResponse.id).toBe(1);
    expect(getResponse.title).toBeDefined();
    expect(getResponse.completed).toBe(false);

    const validate = ajv.compile(schema);
    const isValid = validate(getResponse);

    if (!isValid) {
    console.error('Schema validation errors:', validate.errors);
    }
    expect(isValid).toBeTruthy()
});

test(`Users: GET request - Verify status and data`, async ({ request }) => {
    const response = await request.get('/users/1');
    await expect(response).toBeOK();

    const schema = {
        type: 'object',
        properties: {
            id: { type: 'number' },
            name: { type: 'string' },
            email: { type: `string`, format: `email` },
            address: { 
                type: `object`,
                properties: {
                    street: { type: `string` },
                    suite: { type: `string` },
                    city: { type: `string` },
                    zipcode: { type: `string`},
                    geo: { 
                        type: `object`,
                        properties: {
                            lat: { type: `string` },
                            lng: { type: `string` }
                        }
                    }
                }
            },
            phone: { type: `string` },
            website: { type: `string`, format: `hostname` },
            company: {
                type: `object`,
                properties: {
                    name: { type: `string` },
                    catchPhrase: { type: `string` },
                    bs: { type: `string` }
                }
            }

    },
    required: ['id', 'name', `email`, `address`, `phone`, `website`, `company`]
    }

    const getResponse = await response.json();
    expect(getResponse.id).toBe(1);
    expect(getResponse.name).toBeDefined();
    expect(getResponse.email).toBeDefined();
    expect(getResponse.address).toBeDefined();
    expect(getResponse.phone).toBeDefined();
    expect(getResponse.website).toBeDefined();
    expect(getResponse.company).toBeDefined();

    const validate = ajv.compile(schema);
    const isValid = validate(getResponse);

    if (!isValid) {
    console.error('Schema validation errors:', validate.errors);
    }
    expect(isValid).toBeTruthy()
});