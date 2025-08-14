export interface Stat {
  label: string
  value: string
  countUp?: number
}

export const stats: Stat[] = [
  {
    label: "raised last year",
    value: "$50,000+",
    countUp: 50000,
  },
  {
    label: "views",
    value: "100K+",
    countUp: 100000,
  },
  {
    label: "Supporting students in Waterloo since",
    value: "2014",
    countUp: 2014,
  },
]
