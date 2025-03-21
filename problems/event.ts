const eventListener: Map<string, Array<Function>> = new Map()

function registerEvent(event:string, callback: Function) {
    if(!eventListener.has(event)) eventListener.set(event, []);
    const listeners = eventListener.get(event)
    if(listeners) listeners.push(callback)
}

function emitEvent(event:string, data?:any) {
    const listeners = eventListener.get(event);
    if(listeners) listeners.forEach((cb:Function)=>cb(data));
}

export {
    registerEvent,
    emitEvent
}