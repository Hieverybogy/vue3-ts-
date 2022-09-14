let rule = {
    get (target, prop) {
        return Reflect.get(target, prop)
    },
    set (target, prop, value) {
        return Reflect(target, prop, value)
    },
    deleteProprety (target, prop) {
        return Reflect.deleteProperty(target, prop)
    }
}

function aa(target) {
    if (target && typeof target === 'object') {
        return new Proxy(target, rule)
    }
    return target
}