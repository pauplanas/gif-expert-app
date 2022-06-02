import {getGifs} from "./getGifs";

describe('getGifs tests', () => {

    test('must return 6 elements', async () => {

        const result = await getGifs('pau');

        expect(result.length).toBe(6);

    });

    test('must return an empty array when no category is set', async () => {

        const result = await getGifs('');

         expect(result.length).toBe(0);

    });

});