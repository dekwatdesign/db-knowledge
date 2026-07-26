# `moph_vaccine_target`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cid | varchar(13) | NO | PRI |  |  |  |
| person_type_name | varchar(200) | YES |  | NULL |  |  |
| person_risk_type_name | varchar(200) | YES |  | NULL |  |  |
| vaccine_no_1 | varchar(200) | YES |  | NULL |  |  |
| vaccine_no_1_date | date | YES |  | NULL |  |  |
| vaccine_no_2 | varchar(200) | YES |  | NULL |  |  |
| vaccine_no_2_date | date | YES |  | NULL |  |  |
| vaccine_certificate_code | varchar(50) | YES |  | NULL |  |  |
| vaccine_certificate_serial_no | varchar(20) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| total_dose | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | cid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cid": "1xxxxxxxxxxxx",
    "person_type_name": "ประชาชนทั่วไป",
    "person_risk_type_name": "ประชาชนทั่วไป",
    "vaccine_no_1": null,
    "vaccine_no_1_date": null,
    "vaccine_no_2": null,
    "vaccine_no_2_date": null,
    "vaccine_certificate_code": "{C0F05A2F-3D5C-4846-ACD4-B20BD55682BE}",
    "vaccine_certificate_serial_no": "",
    "update_datetime": "2022-01-21 11:29:48",
    "total_dose": 3
  },
  {
    "cid": "1xxxxxxxxxxxx",
    "person_type_name": "บุคลากรทางการแพทย์",
    "person_risk_type_name": "บุคลากรทางการแพทย์และสาธารณสุขภาครัฐ",
    "vaccine_no_1": null,
    "vaccine_no_1_date": null,
    "vaccine_no_2": null,
    "vaccine_no_2_date": null,
    "vaccine_certificate_code": "{D4833FE3-D0B4-42EA-85B0-689C15A4AFBD}",
    "vaccine_certificate_serial_no": "",
    "update_datetime": "2022-12-08 15:23:08",
    "total_dose": 6
  },
  {
    "cid": "1xxxxxxxxxxxx",
    "person_type_name": "บุคลากรทางการแพทย์",
    "person_risk_type_name": "บุคลากรทางการแพทย์และสาธารณสุขภาครัฐ",
    "vaccine_no_1": null,
    "vaccine_no_1_date": null,
    "vaccine_no_2": null,
    "vaccine_no_2_date": null,
    "vaccine_certificate_code": "{5A8BBDC5-EEFA-45DE-A501-60138BEAD1C3}",
    "vaccine_certificate_serial_no": "",
    "update_datetime": "2022-01-14 13:00:17",
    "total_dose": 4
  },
  {
    "cid": "1xxxxxxxxxxxx",
    "person_type_name": "บุคลากรทางการแพทย์",
    "person_risk_type_name": "บุคลากรทางการแพทย์และสาธารณสุขภาครัฐ",
    "vaccine_no_1": null,
    "vaccine_no_1_date": null,
    "vaccine_no_2": null,
    "vaccine_no_2_date": null,
    "vaccine_certificate_code": "{BB6661BC-7E79-4624-A5A9-F45218E30410}",
    "vaccine_certificate_serial_no": "",
    "update_datetime": "2022-12-06 13:18:06",
    "total_dose": 4
  },
  {
    "cid": "1xxxxxxxxxxxx",
    "person_type_name": "บุคลากรทางการแพทย์",
    "person_risk_type_name": "บุคลากรทางการแพทย์และสาธารณสุขภาครัฐ",
    "vaccine_no_1": null,
    "vaccine_no_1_date": null,
    "vaccine_no_2": null,
    "vaccine_no_2_date": null,
    "vaccine_certificate_code": "{E6DA7E07-F893-402D-8C97-F43064E9A4FA}",
    "vaccine_certificate_serial_no": "",
    "update_datetime": null,
    "total_dose": null
  },
  {
    "cid": "1xxxxxxxxxxxx",
    "person_type_name": "บุคลากรทางการแพทย์",
    "person_risk_type_name": "บุคลากรทางการแพทย์และสาธารณสุขภาครัฐ",
    "vaccine_no_1": null,
    "vaccine_no_1_date": null,
    "vaccine_no_2": null,
    "vaccine_no_2_date": null,
    "vaccine_certificate_code": "{FDE941A1-953F-4A78-9A23-F318C2434B0B}",
    "vaccine_certificate_serial_no": "",
    "update_datetime": "2022-01-07 12:03:13",
    "total_dose": 4
  },
  {
    "cid": "1xxxxxxxxxxxx",
    "person_type_name": "บุคลากรทางการแพทย์",
    "person_risk_type_name": "บุคลากรทางการแพทย์และสาธารณสุขภาครัฐ",
    "vaccine_no_1": null,
    "vaccine_no_1_date": null,
    "vaccine_no_2": null,
    "vaccine_no_2_date": null,
    "vaccine_certificate_code": "{0AA6E8A4-CC8B-4FDE-961D-D9C9901F55FB}",
    "vaccine_certificate_serial_no": "",
    "update_datetime": "2022-01-07 12:38:13",
    "total_dose": 4
  },
  {
    "cid": "1xxxxxxxxxxxx",
    "person_type_name": "บุคลากรทางการแพทย์",
    "person_risk_type_name": "บุคลากรทางการแพทย์และสาธารณสุขภาครัฐ",
    "vaccine_no_1": null,
    "vaccine_no_1_date": null,
    "vaccine_no_2": null,
    "vaccine_no_2_date": null,
    "vaccine_certificate_code": "{EBB6BBDF-0036-4013-9254-39C97C6CBE5C}",
    "vaccine_certificate_serial_no": "",
    "update_datetime": "2022-01-07 12:53:17",
    "total_dose": 4
  }
]
```
