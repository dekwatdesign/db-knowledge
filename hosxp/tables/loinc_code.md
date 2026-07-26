# `loinc_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| loinc_code | varchar(20) | NO | PRI |  |  |  |
| loinc_long_common_name | varchar(250) | YES | MUL | NULL |  |  |
| loinc_short_name | varchar(250) | YES |  | NULL |  |  |
| loinc_class_name | varchar(100) | YES | MUL | NULL |  |  |
| loinc_component_name | varchar(200) | YES |  | NULL |  |  |
| loinc_property_name | varchar(50) | YES |  | NULL |  |  |
| loinc_system_name | varchar(100) | YES |  | NULL |  |  |
| loinc_example_unit_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_loinc_class_name | loinc_class_name | no | 1 |
| ix_loinc_long_common_name | loinc_long_common_name | no | 1 |
| PRIMARY | loinc_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "loinc_code": "1-8",
    "loinc_long_common_name": "Acyclovir [Susceptibility]",
    "loinc_short_name": "Acyclovir Susc Islt",
    "loinc_class_name": "ABXBACT",
    "loinc_component_name": "Acyclovir",
    "loinc_property_name": "Susc",
    "loinc_system_name": "Isolate",
    "loinc_example_unit_name": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "loinc_code": "10-9",
    "loinc_long_common_name": "Amdinocillin [Susceptibility] by Serum bactericidal titer",
    "loinc_short_name": "Amdinocillin Titr SBT",
    "loinc_class_name": "ABXBACT",
    "loinc_component_name": "Amdinocillin",
    "loinc_property_name": "Titr",
    "loinc_system_name": "Isolate+Ser",
    "loinc_example_unit_name": "titer",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "loinc_code": "100-8",
    "loinc_long_common_name": "Cefoperazone [Susceptibility] by Minimum inhibitory concentration (MIC)",
    "loinc_short_name": "Cefoperazone Islt MIC",
    "loinc_class_name": "ABXBACT",
    "loinc_component_name": "Cefoperazone",
    "loinc_property_name": "Susc",
    "loinc_system_name": "Isolate",
    "loinc_example_unit_name": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "loinc_code": "1000-9",
    "loinc_long_common_name": "DBG Ab [Presence] in Serum or Plasma from Blood product unit",
    "loinc_short_name": "DBG Ab SerPl BPU Ql",
    "loinc_class_name": "BLDBK",
    "loinc_component_name": "DBG Ab",
    "loinc_property_name": "PrThr",
    "loinc_system_name": "Ser/Plas^BPU",
    "loinc_example_unit_name": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "loinc_code": "10000-8",
    "loinc_long_common_name": "R wave duration in lead AVR",
    "loinc_short_name": "R wave dur L-AVR",
    "loinc_class_name": "EKG.MEAS",
    "loinc_component_name": "R wave duration.lead AVR",
    "loinc_property_name": "Time",
    "loinc_system_name": "Heart",
    "loinc_example_unit_name": "s",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "loinc_code": "10001-6",
    "loinc_long_common_name": "R wave duration in lead I",
    "loinc_short_name": "R wave dur L-I",
    "loinc_class_name": "EKG.MEAS",
    "loinc_component_name": "R wave duration.lead I",
    "loinc_property_name": "Time",
    "loinc_system_name": "Heart",
    "loinc_example_unit_name": "s",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "loinc_code": "10002-4",
    "loinc_long_common_name": "R wave duration in lead II",
    "loinc_short_name": "R wave dur L-II",
    "loinc_class_name": "EKG.MEAS",
    "loinc_component_name": "R wave duration.lead II",
    "loinc_property_name": "Time",
    "loinc_system_name": "Heart",
    "loinc_example_unit_name": "s",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "loinc_code": "10003-2",
    "loinc_long_common_name": "R wave duration in lead III",
    "loinc_short_name": "R wave dur L-III",
    "loinc_class_name": "EKG.MEAS",
    "loinc_component_name": "R wave duration.lead III",
    "loinc_property_name": "Time",
    "loinc_system_name": "Heart",
    "loinc_example_unit_name": "s",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
