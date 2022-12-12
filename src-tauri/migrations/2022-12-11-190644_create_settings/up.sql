-- Your SQL goes here
CREATE TABLE settings(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brightness INTEGER NOT NULL,
    animation INTEGER NOT NULL,
    token TEXT DEFAULT NULL,
    animation_delay INTEGER NOT NULL,
    animated_from_current_song BOOLEAN NOT NULL
)