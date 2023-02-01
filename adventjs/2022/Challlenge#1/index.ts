function wrapping(gifts: string[]): string[] {
    const generatePaper = (gift:string) => {
        let paper = '**'
        for (const index of gift) {
            paper += '*'
        }
        return paper
    }

    const wrappedGifts = gifts.map((gift:string) => {
        const paper = generatePaper(gift)
        return `${paper}\n*${gift}*\n${paper}`
    }) 
    return wrappedGifts
}
  
  
  