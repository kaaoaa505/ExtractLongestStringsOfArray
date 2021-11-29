function solve(a: string[]): string[] {
    let r: string[] = [];
    let targetLength = 0;

    a.forEach(v => {
        if(v.length > targetLength) 
            targetLength = v.length;
    });

    a.forEach(v => {
        if(v.length == targetLength)
            r.push(v);
    });

    return r;
}

const a = ["aba", "aa", "ad", "vcd", "aba"];
console.log(solve(a));