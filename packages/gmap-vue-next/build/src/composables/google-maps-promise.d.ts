/// <reference types="google.maps" />
export declare function useGoogleMapsPromise(): Promise<{
    map: google.maps.Map | undefined;
}>;
declare const _default: {
    useMapElement: typeof useGoogleMapsPromise;
};
export default _default;
