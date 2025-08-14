export interface HistoryItem {
  id: string
  year: string
  title: string
  description: string
  milestone: boolean
}

export const history: HistoryItem[] = [
  {
    id: "1",
    year: "2004",
    title: "SOS Founded",
    description: "Students Offering Support was established to help Laurier students succeed academically.",
    milestone: true,
  },
  {
    id: "2",
    year: "2016",
    title: "First 1000 Students Served",
    description: "Reached our first major milestone of helping over 1000 students through review sessions.",
    milestone: true,
  },
  {
    id: "3",
    year: "2018",
    title: "Online Platform Launch",
    description: "Launched our first online review sessions to reach more students.",
    milestone: false,
  },
  {
    id: "4",
    year: "2020",
    title: "Pandemic Pivot",
    description:
      "Successfully transitioned to fully online operations during COVID-19, maintaining support for students.",
    milestone: true,
  },
  {
    id: "5",
    year: "2022",
    title: "Hybrid Model",
    description: "Introduced hybrid sessions combining the best of online and in-person learning.",
    milestone: false,
  },
  {
    id: "6",
    year: "2024",
    title: "$50K+ Raised",
    description: "Achieved record fundraising to expand our programs and support more students than ever.",
    milestone: true,
  },
]
