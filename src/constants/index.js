
// Example API Request: "https://hamilton.vertoengage.com/engage/api/api/cac-open-clinic/v1/slots/availability?day=2021-12-27T00:00:00.000-05:00&location_id=SH&slot_type=AGE12YEARSPLUS1ST2NDANDELIGIBLE3RDDOSEPOPULATIONSCOVID19VACCINE&key=hamilton-booking"
// This contains all our constants
export const URL = "https://hamilton.vertoengage.com/engage/api/api/cac-open-clinic/v1/slots/availability?" //base url for the avaialbility API
export const KEY = "hamilton-booking" // last parameter for the API which is consistent accross all websites.
/**
 * These are the codes used in the API query which tracks the locations.
 */
export const clinicCodes = {
    'SJHH-West 5th':"SJHW", 
    'Mobile Clinic-Harry Howell':"HH",
    'Indigenous Clinic-Biindigen Hub(Former St.Helen’s School)':"ABC",
    'Sir Allan MacNab Secondary School':"SAMNSS",
    'Sir Winston Churchill Secondary School':"SWCSS",
    'Bernie Custis Secondary School': "BCSS",
    'Mobile Clinic-Norman Pinky Lewis': "NPL",
    'Mobile Clinic-Waterdown Library': "WL",
    'Mobile Clinic-Huntington Park Rec Centre': "MCHPRC",
    'Mobile Clinic-Stoney Creek Rec Centre': "SCRC",
    'Mobile Clinic-Public Health Mountain Clinic': "PHMC",
    'Mobile Clinic-Sackville Hill': "SH",
    'Mobile Clinic-RedHill Library': "RHL",
    'Mobile Clinic-Central Library': "CL",
    'Mobile Clinic-Bernie Morelli Rec Centre': "BMRC",
    'Mobile Clinic-East End Public Health Clinic': "MCEE",
    'Mobile Clinic-Bennetto Recreation Centre': "UH",
    'Mobile Clinic-Barton Library': "UG",
    'West End Clinic-Healthcare Workers ONLY': "UE",
    'The Centre on Barton': "TCB",
    'David Braley Health Sciences Centre': "DBSHC",
    'Mountain Clinic (Limeridge Mall-2nd floor)': "LMLC"
}
/**
 * Full names of the clinics for the city, also used as Keys for the clinic codes.
 */
export const clinics = [
    'SJHH-West 5th', 
    'Mobile Clinic-Harry Howell',
    'Indigenous Clinic-Biindigen Hub(Former St.Helen’s School)',
    'Sir Allan MacNab Secondary School',
    'Sir Winston Churchill Secondary School',
    'Bernie Custis Secondary School',
    'Mobile Clinic-Norman Pinky Lewis',
    'Mobile Clinic-Waterdown Library',
    'Mobile Clinic-Huntington Park Rec Centre',
    'Mobile Clinic-Stoney Creek Rec Centre',
    'Mobile Clinic-Public Health Mountain Clinic',
    'Mobile Clinic-Sackville Hill',
    'Mobile Clinic-RedHill Library',
    'Mobile Clinic-Central Library',
    'Mobile Clinic-Bernie Morelli Rec Centre',
    'Mobile Clinic-East End Public Health Clinic',
    'Mobile Clinic-Bennetto Recreation Centre',
    'Mobile Clinic-Barton Library',
    'West End Clinic-Healthcare Workers ONLY',
    'The Centre on Barton',
    'David Braley Health Sciences Centre',
    'Mountain Clinic (Limeridge Mall-2nd floor)'
]
/**
 * There are 3 slot types used in the query, the key's describe the slot type.
 */
export const slotTypes = {
    '12 y/o plus': ["AGE12YEARSPLUS1ST2NDANDELIGIBLE3RDDOSEPOPULATIONSCOVID19VACCINE",['SJHW','HH', 'NPL', 'WL', 'MCHPRC', 'SCRC', 'PHMC', 'SH', 'RHL', 'CL', 'BMRC', 'MCEE', 'UH', 'UG', 'TCB', 'LMLC' ] ],
    '5-11 y/o': ["AGE511YEARSCOVID19VACCINE",['HH', 'SAMNSS', 'SWCSS', 'BCSS', 'NPL', 'WL', 'MCHPRC', 'SCRC', 'PHMC', 'SH', 'BMRC', 'UH', 'TCB', 'LMLC' ]],
    "Healthcare Workers": ["COVID19", ['UH', 'UE']],
}

export const dropdownClinics = [
    { value: 'SJHH-West 5th', label: 'St. Josephs Healthcare-west 5th'},
    {value: 'Mobile Clinic-Harry Howell', label: 'Mobile Clinic-Harry Howell'},
    {value: 'Indigenous Clinic-Biindigen Hub(Former St.Helen’s School)', label: 'Indigenous Clinic-Biindigen Hub(Former St.Helen’s School)'},
    {value: 'Sir Allan MacNab Secondary School', label: 'Sir Allan MacNab Secondary School'},
    {value: 'Sir Winston Churchill Secondary School', label: 'Sir Winston Churchill Secondary School'},
    {value: 'Bernie Custis Secondary School', label: 'Bernie Custis Secondary School'},
    {value: 'Mobile Clinic-Norman Pinky Lewis', label: 'Mobile Clinic-Norman Pinky Lewis'},
    {value: 'Mobile Clinic-Waterdown Library', label: 'Mobile Clinic-Waterdown Library'},
    {value: 'Mobile Clinic-Huntington Park Rec Centre', label: 'Mobile Clinic-Huntington Park Rec Centre'},
    {value: 'Mobile Clinic-Stoney Creek Rec Centre', label: 'Mobile Clinic-Stoney Creek Rec Centre'},
    {value: 'Mobile Clinic-Public Health Mountain Clinic', label: 'Mobile Clinic-Public Health Mountain Clinic'},
    {value: 'Mobile Clinic-Sackville Hill', label: 'Mobile Clinic-Sackville Hill'},
    {value: 'Mobile Clinic-RedHill Library', label: 'Mobile Clinic-RedHill Library'},
    {value: 'Mobile Clinic-Central Library', label: 'Mobile Clinic-Central Library'},
    {value: 'Mobile Clinic-Bernie Morelli Rec Centre', label: 'Mobile Clinic-Bernie Morelli Rec Centre'},
    {value: 'Mobile Clinic-East End Public Health Clinic', label: 'Mobile Clinic-East End Public Health Clinic'},
    {value: 'Mobile Clinic-Bennetto Recreation Centre', label: 'Mobile Clinic-Bennetto Recreation Centre'},
    {value: 'Mobile Clinic-Barton Library', label: 'Mobile Clinic-Barton Library'},
    {value: 'West End Clinic-Healthcare Workers ONLY', label: 'West End Clinic-Healthcare Workers ONLY'},
    {value: 'The Centre on Barton', label: 'The Centre on Barton'},
    {value: 'David Braley Health Sciences Centre', label: 'David Braley Health Sciences Centre'},
    {value: 'Mountain Clinic (Limeridge Mall-2nd floor)', label: 'Mountain Clinic (Limeridge Mall-2nd floor)'},
]

