var reducers = {}, finalReducer;

module.exports = function(combineReducers){
    return function(reducer, isOverWrite) {
        Object.keys(reducer).forEach(function(key) {
            if(reducers[key] && !isOverWrite) {
                throw new Error('asyncCombineReducers: reducer\'s key already exist and no flag !!!');
            }
            reducers[key] = reducer[key];
        });
        finalReducer = combineReducers(reducers);

        return function(state, action) {
            return finalReducer(state, action);
        };
    };
};
