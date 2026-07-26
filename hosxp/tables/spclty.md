# `spclty`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| spclty | char(2) | NO | PRI |  |  |  |
| name | varchar(150) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| ovstostlink | char(2) | YES |  | NULL |  |  |
| spname | varchar(150) | YES | MUL | NULL |  |  |
| shortname | varchar(10) | YES |  | NULL |  |  |
| ill_visit | char(1) | YES |  | NULL |  |  |
| spclty_guid | varchar(38) | YES | MUL | NULL |  |  |
| no_service_charge | char(1) | YES |  | NULL |  |  |
| no_service_charge_doctor | char(1) | YES |  | NULL |  |  |
| oldcode | varchar(20) | YES | MUL | NULL |  |  |
| nhso_code | varchar(5) | YES |  | NULL |  |  |
| operation | char(1) | YES |  | NULL |  |  |
| provis_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| no_export_43 | char(1) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |
| allow_online_appointment | char(1) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_oldcode | oldcode | no | 1 |
| ix_spclty_guid | spclty_guid | no | 1 |
| ix_spname | spname | no | 1 |
| name | name | no | 1 |
| PRIMARY | spclty | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "spclty": "01",
    "name": "อายุรกรรม",
    "depcode": "001",
    "ovstostlink": "01",
    "spname": "OPD",
    "shortname": "MED",
    "ill_visit": null,
    "spclty_guid": null,
    "no_service_charge": "",
    "no_service_charge_doctor": null,
    "oldcode": null,
    "nhso_code": "01",
    "operation": null,
    "provis_code": "00101",
    "hos_guid": null,
    "no_export_43": null,
    "display_order": null,
    "allow_online_appointment": null,
    "active_status": "Y"
  },
  {
    "spclty": "02",
    "name": "ศัลยกรรม",
    "depcode": "001",
    "ovstostlink": "02",
    "spname": "OPD",
    "shortname": "SUR",
    "ill_visit": null,
    "spclty_guid": null,
    "no_service_charge": "",
    "no_service_charge_doctor": null,
    "oldcode": null,
    "nhso_code": "02",
    "operation": null,
    "provis_code": "00201",
    "hos_guid": null,
    "no_export_43": null,
    "display_order": null,
    "allow_online_appointment": null,
    "active_status": "N"
  },
  {
    "spclty": "03",
    "name": "สูติกรรม",
    "depcode": "001",
    "ovstostlink": "03",
    "spname": "OPD",
    "shortname": "OBS",
    "ill_visit": null,
    "spclty_guid": null,
    "no_service_charge": "",
    "no_service_charge_doctor": null,
    "oldcode": null,
    "nhso_code": "03",
    "operation": null,
    "provis_code": "00301",
    "hos_guid": null,
    "no_export_43": null,
    "display_order": null,
    "allow_online_appointment": null,
    "active_status": "N"
  },
  {
    "spclty": "04",
    "name": "นรีเวชกรรม",
    "depcode": "001",
    "ovstostlink": "04",
    "spname": "OPD",
    "shortname": "GYN",
    "ill_visit": null,
    "spclty_guid": null,
    "no_service_charge": "",
    "no_service_charge_doctor": null,
    "oldcode": null,
    "nhso_code": "04",
    "operation": null,
    "provis_code": "00401",
    "hos_guid": null,
    "no_export_43": null,
    "display_order": null,
    "allow_online_appointment": null,
    "active_status": "N"
  },
  {
    "spclty": "05",
    "name": "กุมารเวชกรรม",
    "depcode": "001",
    "ovstostlink": "05",
    "spname": "OPD",
    "shortname": "PED",
    "ill_visit": null,
    "spclty_guid": null,
    "no_service_charge": "",
    "no_service_charge_doctor": null,
    "oldcode": null,
    "nhso_code": "05",
    "operation": null,
    "provis_code": "00501",
    "hos_guid": null,
    "no_export_43": null,
    "display_order": null,
    "allow_online_appointment": null,
    "active_status": "N"
  },
  {
    "spclty": "06",
    "name": "โสต ศอ นาสิก",
    "depcode": "001",
    "ovstostlink": "06",
    "spname": "OPD",
    "shortname": "ENT",
    "ill_visit": null,
    "spclty_guid": null,
    "no_service_charge": "",
    "no_service_charge_doctor": null,
    "oldcode": null,
    "nhso_code": "06",
    "operation": null,
    "provis_code": "00601",
    "hos_guid": null,
    "no_export_43": null,
    "display_order": null,
    "allow_online_appointment": null,
    "active_status": "Y"
  },
  {
    "spclty": "07",
    "name": "จักษุ",
    "depcode": "001",
    "ovstostlink": "07",
    "spname": "OPD",
    "shortname": "EYE",
    "ill_visit": null,
    "spclty_guid": null,
    "no_service_charge": "",
    "no_service_charge_doctor": null,
    "oldcode": null,
    "nhso_code": "07",
    "operation": null,
    "provis_code": "00701",
    "hos_guid": null,
    "no_export_43": null,
    "display_order": null,
    "allow_online_appointment": null,
    "active_status": "N"
  },
  {
    "spclty": "08",
    "name": "ศัลยกรรมกระดูก",
    "depcode": "001",
    "ovstostlink": "08",
    "spname": "OPD",
    "shortname": "ORT",
    "ill_visit": null,
    "spclty_guid": null,
    "no_service_charge": "",
    "no_service_charge_doctor": null,
    "oldcode": null,
    "nhso_code": "08",
    "operation": null,
    "provis_code": "00801",
    "hos_guid": null,
    "no_export_43": null,
    "display_order": null,
    "allow_online_appointment": null,
    "active_status": "N"
  }
]
```
