import { Text, View } from "react-native";

interface iProfile {
    name: string;
    age: number;
}

const Profile = ({ name, age }: iProfile) => {
        return (
            <View style={{ marginTop: 20 }}>
                <Text>Hallo nama ku, {name || "Anonymous"}!</Text>
                <Text>Umur ku {age} tahun</Text>
            </View>
        );
};

export default Profile;