function isIsomorphic(source: string, target: string): boolean {
    const sourceLastSeen: number[] = new Array(256).fill(0);
    const targetLastSeen: number[] = new Array(256).fill(0);
      for (let i = 0; i < source.length; ++i) {
        const sourceCharCode = source.charCodeAt(i);
        const targetCharCode = target.charCodeAt(i);
        if (sourceLastSeen[sourceCharCode] !== targetLastSeen[targetCharCode]) {
            return false;
        }
        sourceLastSeen[sourceCharCode] = i + 1;
        targetLastSeen[targetCharCode] = i + 1;
    }
    return true;
}