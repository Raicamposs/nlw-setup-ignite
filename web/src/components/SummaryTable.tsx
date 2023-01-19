import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import { EmptyHabitDay } from "./EmptyHabitDay";
import { HabitDay } from "./HabitDay";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export function SummaryTable() {
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
        {summaryDates.map((item, index) => {
          return <HabitDay
            key={item.toISOString()}
            amount={5}
            completed={Math.round(Math.random() * 5)}
            date={item}
          />
        })}
        {amountOfDaysToFill > 0 && Array.from({
          length: amountOfDaysToFill
        }).map((_, index) => (<EmptyHabitDay key={index} />))}
      </div>
    </div>
  )
}