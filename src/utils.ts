export const hexToRgb = (hex: string) => {
    hex = hex.replace('#', '')
    const red = hex.substring(0, 2)
    const green = hex.substring(2, 4)
    const blue = hex.substring(4, 6)
    return {
      red: parseInt(red, 16),
      green: parseInt(green, 16),
      blue: parseInt(blue, 16)
    }
  }
  