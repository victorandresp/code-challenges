function countHours(year:number, holidays:string[]):number {
    const extraHours = 2
    const weekend = [0,6]
   
    return holidays.reduce((acc:number, holyday:string) => {
      const date = new Date(holyday+`/${year}`)
      const dayWeek = date.getDay()
      if(!weekend.includes(dayWeek)){
        return acc + extraHours
      }
      return acc
    }, 0)
}