
export interface Setting{
    brightness: number
    animation: number
    token: string | null
    animation_delay: number
    animated_from_current_song: boolean
}

export interface Profile{
    name: string
    port: string | null
    light: boolean
    leds: number
    is_ambiant_light: boolean
    colors: string[]
    wifi_access_point: string
    wifi_password: string
    ip_address: string
    setting: Setting
}

export const createEmptyProfile = (): Profile => {
    return {
        setting: {
            brightness: 5,
            animation: 0,
            token: '',
            animation_delay: 10,
            animated_from_current_song: false
        },
        light: false,
        leds: 10,
        is_ambiant_light: false,
        colors: ["#00ff00", "#ff0000", "#0000ff"],
        wifi_access_point: '',
        wifi_password: '',
        ip_address: '',
        name: 'My Profile',
        port: ''
    }
}