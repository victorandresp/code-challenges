function distributeGifts(packOfGifts:string[], reindeers:string[]):number {
    const totalWeightGifts = packOfGifts.join("").length as number
    const maxCapacityReindeers = reindeers.join("").length * 2 as number
    return Math.floor(maxCapacityReindeers/totalWeightGifts)
}