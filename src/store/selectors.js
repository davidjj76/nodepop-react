export const getIsLogged = state => state.auth;

export const getTags = state => state.tags;
export const getAreTagsLoaded = state => getTags(state).length > 0;

export const getUi = state => state.ui;
