export const getLocalTimeZone = () => {
  const timezones = [
    'Africa/Cairo',
    'Africa/Johannesburg',
    'Africa/Lagos',
    'America/Argentina/Buenos_Aires',
    'America/Bogota',
    'America/Caracas',
    'America/Chicago',
    'America/El_Salvador',
    'America/Juneau',
    'America/Lima',
    'America/Los_Angeles',
    'America/Mexico_City',
    'America/New_York',
    'America/Phoenix',
    'America/Santiago',
    'America/Sao_Paulo',
    'America/Toronto',
    'America/Vancouver',
    'Asia/Almaty',
    'Asia/Ashkhabad',
    'Asia/Bahrain',
    'Asia/Bangkok',
    'Asia/Chongqing',
    'Asia/Dubai',
    'Asia/Ho_Chi_Minh',
    'Asia/Hong_Kong',
    'Asia/Jakarta',
    'Asia/Jerusalem',
    'Asia/Karachi',
    'Asia/Kathmandu',
    'Asia/Kolkata',
    'Asia/Kuwait',
    'Asia/Manila',
    'Asia/Muscat',
    'Asia/Qatar',
    'Asia/Riyadh',
    'Asia/Seoul',
    'Asia/Shanghai',
    'Asia/Singapore',
    'Asia/Taipei',
    'Asia/Tehran',
    'Asia/Tokyo',
    'Atlantic/Reykjavik',
    'Australia/ACT',
    'Australia/Adelaide',
    'Australia/Brisbane',
    'Australia/Perth',
    'Australia/Sydney',
    'Europe/Amsterdam',
    'Europe/Athens',
    'Europe/Belgrade',
    'Europe/Berlin',
    'Europe/Bratislava',
    'Europe/Brussels',
    'Europe/Bucharest',
    'Europe/Copenhagen',
    'Europe/Dublin',
    'Europe/Helsinki',
    'Europe/Istanbul',
    'Europe/Lisbon',
    'Europe/London',
    'Europe/Luxembourg',
    'Europe/Madrid',
    'Europe/Malta',
    'Europe/Moscow',
    'Europe/Oslo',
    'Europe/Paris',
    'Europe/Riga',
    'Europe/Rome',
    'Europe/Stockholm',
    'Europe/Tallinn',
    'Europe/Vilnius',
    'Europe/Warsaw',
    'Europe/Zurich',
    'Pacific/Auckland',
    'Pacific/Chatham',
    'Pacific/Fakaofo',
    'Pacific/Honolulu',
    'Pacific/Norfolk',
    'US/Mountain',
  ]
  const localTimezone =
    Intl.DateTimeFormat().resolvedOptions().timeZone || 'exchange'

  if (localTimezone === 'Asia/Saigon') {
    return 'Asia/Ho_Chi_Minh'
  }

  return localTimezone
}