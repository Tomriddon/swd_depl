export function registerHelpers(hbs) {
    hbs.registerHelper('if_eq', function f(a, b, opts) {
        if (a === b)
            return opts.fn(this);
        return opts.inverse(this);
    });
    hbs.registerHelper('times', function f0(n, block) {
        let accum = '';
        for(let i = 0; i < n; i+=1)
            accum += block.fn(i);
        return accum;
    });
}

