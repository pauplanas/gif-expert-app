import {useFetchGifs} from "./useFetchGifs";
import {renderHook, act} from "@testing-library/react";

//TODO there are some issues with react 18 --> https://github.com/testing-library/react-hooks-testing-library
/*
A Note about React 18 Support
As part of the changes for React 18, it has been decided that the renderHook API provided by this library will instead be included as official additions to both react-testing-library (PR) and react-native-testing-library (PR) with the intention being to provide a more cohesive and consistent implementation for our users.

Please be patient as we finalise these changes in the respective testing libraries. In the mean time you can install @testing-library/react@^13.1


 */

describe('useFetchGifs hook tests', () => {

    test('must return initial state', () => {

        const category = 'borat';
        const { result } = renderHook(() => useFetchGifs(category));
        const {data, loading} = result.current;

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();

    });

    // test('must retrun an images array and loading must be false', async () => {
    //
    //     const category = 'borat';
    //     const { result } = renderHook(() => useFetchGifs(category));
    //
    //     act(() => {
    //         result.current.increment()
    //     })
    //
    //     const {data, loading} = result.current;
    //
    //     expect(data.length).toBe(6);
    //     expect(loading).toBeFalsy();
    //
    // });

});