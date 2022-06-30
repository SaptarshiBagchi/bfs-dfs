const tree : Record<string, string[]> = {
    a : ['b', 'c'],
    b : ['d'],
    c: ['e', 'f']
}

function bfs(callQueye: string[]) : void | null  {
    // console.log
    console.log(callQueye[0])
    // console.log('new callQueye', callQueye)

    if(!tree[callQueye[0]] && callQueye.length) {
        callQueye = callQueye.reverse()
        callQueye.pop()
        callQueye.reverse()
        if(callQueye.length)    bfs(callQueye)
    }
    if(tree[callQueye[0]]){
       callQueye = callQueye.reverse()
       const node = callQueye.pop() as string
       callQueye = callQueye.reverse()
    //    console.log('Poped node', node)
       callQueye = [ ...callQueye, ...tree[node]]
    //    console.log('new callQueye', callQueye)
       bfs(callQueye)
    }
}

function dfs(node: string) : void {
    console.log('calling with', node)
    if(!tree[node]) return
    // console.log(node)
    for (const child of tree[node])
        dfs(child)
}

bfs(['a'])
