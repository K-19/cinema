let renderFunc = () => {
}

export let subscribe = (observer) => {
    renderFunc = observer;
}

export let rerender = () => {
    renderFunc();
}