-- Your SQL goes here

CREATE TABLE profiles(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    port VARCHAR NOT NULL,
    light BOOLEAN NOT NULL,
    leds INTEGER NOT NULL,
    is_ambiant_light BOOLEAN,
    colors VARCHAR NOT NULL,
    wifi_access_point INTEGER VARCHAR NOT NULL,
    wifi_password VARCHAR NOT NULL,
    ip_address VARCHAR NOT NULL,
    id_setting INTEGEREGER NOT NULL,
    FOREIGN KEY(id_setting) REFERENCES settings(id)
)