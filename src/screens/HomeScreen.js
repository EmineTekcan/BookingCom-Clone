import { Pressable, ScrollView, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { Feather } from '@expo/vector-icons';
import DatePicker from "react-native-date-ranges";
import { BottomModal, ModalButton, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';
import { Image } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation()

  const [rooms, setRooms] = useState(1)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [destination, setDestination] = useState("")
  const [selectedDates, setSelectedDates] = useState();
  const [modalVisible, setModalVisible] = useState(false)


  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        elevation: 0

      },
      headerTitleAlign: 'center',
      headerRight: () => {
        return (
          <Ionicons name="notifications-outline" size={24} color="white" style={{ marginEnd: 12 }} />
        )
      }

    })
  }, [])

  return (
    <>
      <View>
        <Header />
        <ScrollView>
          <View style={{ margin: 20, borderColor: "#FFC72C", borderWidth: 3, borderRadius: 6 }} >

            {/* Destination */}
            <Pressable
            onPress={()=>navigation.navigate("Search")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15
              }}>
              <Feather name="search" size={24} color="black" />
              <TextInput placeholderTextColor="black" placeholder='Enter your destination' />
            </Pressable>

            {/* Date Range */}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15
              }}>
              <Feather name="calendar" size={24} color="black" />
              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Select Your Dates"}
                mode={"range"}

              />
            </Pressable>

            {/* Rooms and guests */}
            <Pressable
              onPress={() => setModalVisible(true)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15
              }}>
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput placeholderTextColor="red" placeholder={rooms + ' room + ' + adults + ' adults + ' + children + ' children'} />
            </Pressable>

            {/* Search Button */}
            <Pressable
              style={{
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#2a52be",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500"
                }}
              >Search</Text>
            </Pressable>
          </View>
          <Text style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }} >Travel More Spend Less</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 20 }} >
            <Pressable
              style={{
                width: 150,
                height: 120,
                marginTop: 10,
                backgroundColor: "#003580",
                borderRadius: 10,
                padding: 10,
                marginHorizontal: 10
              }}>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>Genius</Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }} >You are ate genius level one in our loyality program</Text>
            </Pressable>
            <Pressable
              style={{
                width: 150,
                height: 120,
                marginTop: 10,
                borderColor: "#E0E0E0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                marginHorizontal: 10
              }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                15% Discounts
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }} >
                Complete 5 stays to unlock Genius level 2
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 150,
                height: 120,
                marginTop: 10,
                borderColor: "#E0E0E0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                marginHorizontal: 10
              }}>
              <Text style={{ color: "#003580", fontSize: 15, fontWeight: "bold" }}>
                10% Discounts
              </Text>
              <Text style={{ color: "#003580", fontSize: 15, fontWeight: "500" }} >
                Enjoy Discounts at participating at properties worlwide
              </Text>
            </Pressable>
          </ScrollView>

          <Pressable style={{
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Image
              style={{
                width: "80%",
                height: 50,
                resizeMode: "cover"
              }}
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Booking.com_Logo.svg/1280px-Booking.com_Logo.svg.png" }} />
          </Pressable>
        </ScrollView>

      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text='Apply'
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#003580"
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={
          <ModalTitle title='Select rooms and guests' />
        }
        modalAnimation={new SlideAnimation({
          slideFrom: "bottom"
        })
        }

        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 200 }}>

          {/*  */}

          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 15
          }} >
            <Text style={{ fontSize: 16, fontWeight: "500" }} >Rooms</Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>

              <Pressable
                onPress={() => setRooms((state) => Math.max(1, state - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0"
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    textAlign: "center",
                    paddingHorizontal: 6,
                  }}
                >-</Text>
              </Pressable>

              <Pressable>
                <Text>{rooms}</Text>
              </Pressable>

              <Pressable
                onPress={() => setRooms((state) => state + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "500",
                    textAlign: "center",
                    paddingHorizontal: 6,
                  }}
                >+</Text>
              </Pressable>
            </Pressable>
          </View>

          {/*  */}
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 15
          }} >
            <Text style={{ fontSize: 16, fontWeight: "500" }} >Adults</Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>

              <Pressable
                onPress={() => setAdults((state) => Math.max(1, state - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0"
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    textAlign: "center",
                    paddingHorizontal: 6,
                  }}
                >-</Text>
              </Pressable>

              <Pressable>
                <Text>{adults}</Text>
              </Pressable>

              <Pressable
                onPress={() => setAdults((state) => state + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "500",
                    textAlign: "center",
                    paddingHorizontal: 6,
                  }}
                >+</Text>
              </Pressable>
            </Pressable>
          </View>

          {/*  */}
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 15
          }} >
            <Text style={{ fontSize: 16, fontWeight: "500" }} >Childen</Text>
            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>

              <Pressable
                onPress={() => setChildren((state) => Math.max(0, state - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0"
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    textAlign: "center",
                    paddingHorizontal: 6,
                  }}
                >-</Text>
              </Pressable>

              <Pressable>
                <Text>{children}</Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((state) => state + 1)}

                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "500",
                    textAlign: "center",
                    paddingHorizontal: 6,
                  }}
                >+</Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})