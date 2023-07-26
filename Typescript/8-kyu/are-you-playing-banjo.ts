export function areYouPlayingBanjo(name: string): string {
  return `${name} ${name.toLowerCase().split('').shift() === 'r' ? 'plays' : 'does not play'} banjo`;
}