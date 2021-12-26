
// Example API Request: "https://hamilton.vertoengage.com/engage/api/api/cac-open-clinic/v1/slots/availability?day=2021-12-27T00:00:00.000-05:00&location_id=SH&slot_type=AGE12YEARSPLUS1ST2NDANDELIGIBLE3RDDOSEPOPULATIONSCOVID19VACCINE&key=hamilton-booking"

export const URL = "https://hamilton.vertoengage.com/engage/api/api/cac-open-clinic/v1/slots/availability?"
export const KEY = "hamilton-booking"
export const clinics = {
    'SJHH-West 5th':"SJHW", 
    "Mobile Clinic-Harry Howell ":"HH",
    "Indigenous Clinic–Biindigen Hub(Former St.Helen’s School)":"ABC",
    "Sir Allan MacNab Secondary School":"SAMNSS",
    "Sir Winston Churchill Secondary School":"SWCSS",
    "Bernie Custis Secondary School": "BCSS",
    "Mobile Clinic-Norman Pinky Lewis": "NPL",
    "Mobile Clinic-Sackville Hill": "SH",
    "Mobile Clinic-Central Library": "CL",
    "Mobile Clinic-Bernie Morelli Rec Centre": "BMRC",
    "Mobile Clinic-East End Public Health Clinic": "MCEE",
    "Mobile Clinic-Bennetto Recreation Centre": "UH",
    "Mobile Clinic-Barton Library": "UG",
    "West End Clinic-Healthcare Workers ONLY": "UE",
    "The Centre on Barton": "TCB",
    "David Braley Health Sciences Centre": "DBSHC",
    "Mountain Clinic (Limeridge Mall-2nd floor)": "LMLC"
}
export const slotTypes = {
    '12 y/o plus': "AGE12YEARSPLUS1ST2NDANDELIGIBLE3RDDOSEPOPULATIONSCOVID19VACCINE",
    '5-11 y/o': "AGE511YEARSCOVID19VACCINE",
    "Healthcare Workers": "COVID19bv"
}

