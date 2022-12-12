// @generated automatically by Diesel CLI.

diesel::table! {
    profiles (id) {
        id -> Nullable<Integer>,
        name -> Text,
        port -> Text,
        light -> Bool,
        leds -> Integer,
        is_ambiant_light -> Nullable<Bool>,
        colors -> Text,
        wifi_access_point -> Integer,
        wifi_password -> Text,
        ip_address -> Text,
        id_setting -> Integer,
    }
}

diesel::table! {
    settings (id) {
        id -> Nullable<Integer>,
        brightness -> Integer,
        animation -> Integer,
        token -> Nullable<Text>,
        animation_delay -> Integer,
        animated_from_current_song -> Bool,
    }
}

diesel::joinable!(profiles -> settings (id_setting));

diesel::allow_tables_to_appear_in_same_query!(
    profiles,
    settings,
);
