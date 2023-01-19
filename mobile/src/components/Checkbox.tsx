import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}


const Unchecked = () => (
  <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
)

const Checked = () => (
  <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
    <Feather
      name="check"
      size={20}
      color={colors.white}
    />
  </View>
)


export function Checkbox({ title, checked = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      {checked && <Checked />}
      {!checked && <Unchecked />}

      <Text className="text-white text-base ml-3 font-semibold">
        {title}
      </Text>
    </TouchableOpacity>
  )
}