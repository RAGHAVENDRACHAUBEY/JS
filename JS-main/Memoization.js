// Memoization is a performance optimization technique used to speed up expensive function calls by caching their results.
// When a memoized function is called with a particular set of arguments, it stores the result. If the function is called
// again with the same arguments, it returns the cached result instead of recalculating it. This can significantly improve performance,
// especially for functions that perform complex calculations or fetch data from external sources.

// How Memoization Works
// Cache Storage: A cache (usually an object or a Map) is used to store the results of function calls along with their input arguments.
// Function Execution: When the function is called, it first checks if the result for the given arguments is already in the cache.
// Cache Hit: If the result is found in the cache, it returns the cached result, skipping the execution of the function.
// Cache Miss: If the result is not found in the cache, the function is executed, and the result is stored in the cache for future use.

function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = fn.apply(this, args);
            cache.set(key, result);
            return result;
        }
    };
}