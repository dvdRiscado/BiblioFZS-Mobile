import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

type Props = {
  change: Function;
  value: string;
};

export default function InputDatePicker({ change, value }: Props) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (value) {
      setDate(new Date(value));
    }
  }, [value]);

  // mínimo: primeiro dia do ano de 10 anos atrás
  const minDate = new Date(new Date().getFullYear() - 10, 0, 1);

  // máximo: último dia do ano de 10 anos à frente
  const maxDate = new Date(new Date().getFullYear() + 10, 11, 31);

  function onChange(event: any, selectedDate?: Date) {
    const current = selectedDate || date;
    const clamped =
      current < minDate ? minDate : current > maxDate ? maxDate : current;
    setOpen(Platform.OS === "ios");
    setDate(clamped);
    change(date);
  }

  function handleDatePicker() {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: date,
        onChange: (event, selectedDate) => {
          if (event?.type === "dismissed") return;
          if (selectedDate) {
            const chosen =
              selectedDate < minDate
                ? minDate
                : selectedDate > maxDate
                ? maxDate
                : selectedDate;
            setDate(chosen);
            change(date);
          }
        },
        mode: "date",
        display: "calendar",
        minimumDate: minDate,
        maximumDate: maxDate,
      });
    } else {
      setOpen(true);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.input} onPress={handleDatePicker}>
        <Text style={styles.text}>{date.toLocaleDateString("pt-BR")}</Text>
      </TouchableOpacity>

      {Platform.OS === "ios" && open && (
        <DateTimePicker
          value={date}
          mode="date"
          display="spinner"
          onChange={onChange}
          minimumDate={minDate}
          maximumDate={maxDate}
        />
      )}
    </View>
  );
}
