import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { ScrollView, Text, View } from "react-native";

import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { ProgressBar } from "../components/ProgressBar";

interface Params {
  date: string;
}

export function Habit() {
  const route = useRoute()
  const { date } = route.params as Params;

  const habits = [
    {
      id: 1,
      title: 'Beber 2L de água',
      checked: false
    },
    {
      id: 2,
      title: 'Caminhar',
      checked: true
    }, {
      id: 3,
      title: 'Ler 30min',
      checked: false
    }
  ]

  const completed = habits.filter(habit => habit.checked).length;
  const percent = habits.length > 0 ? (completed / habits.length) * 100 : 0;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format('dddd');
  const dayAndMonth = parsedDate.format('DD/MM');

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className="text-white font-extrabold text-3xl">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={percent} />

        <View className="mt-6">
          {
            habits.map(habit => (
              <Checkbox
                key={habit.id}
                title={habit.title}
                checked={habit.checked}
              />
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}