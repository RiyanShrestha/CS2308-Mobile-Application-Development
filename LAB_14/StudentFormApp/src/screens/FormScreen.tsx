import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type FormScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Form'>;

type Props = {
  navigation: FormScreenNavigationProp;
};

const states = ['Select State', 'California', 'Texas', 'New York', 'Florida', 'Illinois', 'Washington'];

const FormScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('Male');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedState, setSelectedState] = useState('Select State');
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    let valid = true;
    let newErrors: any = {};

    if (!name.trim()) { newErrors.name = 'Name is required'; valid = false; }
    if (!password || password.length < 6) { newErrors.password = 'Password must be at least 6 characters'; valid = false; }
    if (!address.trim()) { newErrors.address = 'Address is required'; valid = false; }
    if (!age || isNaN(Number(age))) { newErrors.age = 'Age must be a valid number'; valid = false; }
    if (selectedState === 'Select State') { newErrors.state = 'Please select a state'; valid = false; }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      Alert.alert('Success', 'Form submitted successfully!', [
        {
          text: 'OK', 
          onPress: () => {
            navigation.navigate('Display', {
              name,
              password,
              address,
              gender,
              age,
              dob: dob.toDateString(),
              state: selectedState,
            });
          }
        }
      ]);
    } else {
      Alert.alert('Error', 'Please fix the errors in the form.');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>User Registration</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput 
            style={[styles.input, errors.name && styles.inputError]} 
            value={name} 
            onChangeText={setName} 
            placeholder="Enter your full name" 
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput 
            style={[styles.input, errors.password && styles.inputError]} 
            value={password} 
            onChangeText={setPassword} 
            placeholder="Minimum 6 characters" 
            secureTextEntry 
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput 
            style={[styles.input, styles.multilineInput, errors.address && styles.inputError]} 
            value={address} 
            onChangeText={setAddress} 
            placeholder="Enter your detailed address" 
            multiline 
            numberOfLines={4}
          />
          {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity 
              style={[styles.radioButton, gender === 'Male' && styles.radioSelected]} 
              onPress={() => setGender('Male')}
              activeOpacity={0.7}
            >
              <Text style={gender === 'Male' ? styles.radioTextSelected : styles.radioText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.radioButton, gender === 'Female' && styles.radioSelected]} 
              onPress={() => setGender('Female')}
              activeOpacity={0.7}
            >
              <Text style={gender === 'Female' ? styles.radioTextSelected : styles.radioText}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Age</Text>
          <TextInput 
            style={[styles.input, errors.age && styles.inputError]} 
            value={age} 
            onChangeText={setAge} 
            placeholder="Enter age" 
            keyboardType="numeric" 
            maxLength={3}
          />
          {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity 
            style={styles.input} 
            onPress={() => setShowDatePicker(true)}
            activeOpacity={0.7}
          >
            <Text style={styles.dateText}>{dob.toDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={dob}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) setDob(selectedDate);
              }}
            />
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>State</Text>
          <View style={[styles.pickerContainer, errors.state && styles.pickerError]}>
            <Picker
              selectedValue={selectedState}
              onValueChange={(itemValue) => setSelectedState(itemValue)}
              style={styles.picker}
            >
              {states.map((state, index) => (
                <Picker.Item key={index} label={state} value={state} />
              ))}
            </Picker>
          </View>
          {errors.state && <Text style={styles.errorText}>{errors.state}</Text>}
        </View>

        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit} activeOpacity={0.8}>
          <Text style={styles.submitBtnText}>Submit Details</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    padding: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#1E293B',
  },
  inputError: {
    borderColor: '#EF4444',
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  dateText: {
    fontSize: 16,
    color: '#1E293B',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  radioButton: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  radioSelected: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  radioText: {
    fontSize: 16,
    color: '#475569',
    fontWeight: '500',
  },
  radioTextSelected: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  pickerContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  pickerError: {
    borderColor: '#EF4444',
  },
  picker: {
    height: 50,
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  submitBtn: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FormScreen;
