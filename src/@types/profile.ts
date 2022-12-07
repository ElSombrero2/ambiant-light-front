
export interface Setting{
    brightness: number
    animation: string | null
    token: string | null
    animationDelay: number
    animatedFromCurrentSong: boolean
}

export interface Profile{
    name: string
    port: string | null
    light: boolean
    leds: number
    isAmbiantLight: boolean
    start: string
    end: string
    wifiAccessPoint: string
    wifiPassword: string
    ipAddress: string
    setting: Setting
}

export const createEmptyProfile = (): Profile => {
    return {
        setting: {
            brightness: 0.5,
            animation: null,
            token: null,
            animationDelay: 500,
            animatedFromCurrentSong: false
        },
        light: false,
        leds: 10,
        isAmbiantLight: false,
        start: '#ffffff',
        end: '#ffffff',
        wifiAccessPoint: '',
        wifiPassword: '',
        ipAddress: '',
        name: '',
        port: null
    }
}