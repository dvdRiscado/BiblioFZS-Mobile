import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function InputDatePicker() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  // mínimo: primeiro dia do ano de 10 anos atrás
  const minDate = new Date(new Date().getFullYear() - 10, 0, 1);

  function onChange(event: any, selectedDate?: Date) {
    const current = selectedDate || date;
    const clamped = current < minDate ? minDate : current;
    setOpen(Platform.OS === "ios");
    setDate(clamped);
  }

  function handleDatePicker() {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: date,
        onChange: (event, selectedDate) => {
          if (event?.type === "dismissed") return;
          if (selectedDate) {
            const chosen = selectedDate < minDate ? minDate : selectedDate;
            setDate(chosen);
          }
        },
        mode: "date",
        display: "calendar",
        minimumDate: minDate,
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
        />
      )}
    </View>
  );
}
