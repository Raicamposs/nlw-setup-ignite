import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import { EmptyHabitDay } from "./EmptyHabitDay";
import { HabitDay } from "./HabitDay";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

type Summary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[]

export function SummaryTable() {

  const [summary, setSummary] = useState<Summary>([])

  useEffect(() => {
    api.get('summary').then(response => {
      setSummary(response.data)
    })
  }, [])

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {
          weekDays.map((item, index) => (
            <div key={`${item}-${index}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
              {item}
            </div>
          ))
        }
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summary.length && summaryDates.map((date) => {

          const dayInSummary = summary.find(day => {
            return dayjs(date).isSame(day.date, 'day')
          })

          return (
            <HabitDay
              key={date.toString()}
              date={date}
              amount={dayInSummary?.amount}
              defaultCompleted={dayInSummary?.completed}
            />
          )
        })}
        {amountOfDaysToFill > 0 && Array.from({
          length: amountOfDaysToFill
        }).map((_, index) => (<EmptyHabitDay key={index} />))}
      </div>
    </div>
  )
}