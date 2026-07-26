# `person_duty`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_duty_id | int(11) | NO | PRI | 0 |  |  |
| person_duty_name | varchar(150) | YES | UNI | NULL |  |  |
| hcis_code | varchar(2) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hcis_code | hcis_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_duty_name | person_duty_name | yes | 1 |
| PRIMARY | person_duty_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_duty_id": 1,
    "person_duty_name": "กำนัน",
    "hcis_code": "01",
    "hos_guid": null
  },
  {
    "person_duty_id": 2,
    "person_duty_name": "ผู้ใหญ่บ้าน",
    "hcis_code": "02",
    "hos_guid": null
  },
  {
    "person_duty_id": 3,
    "person_duty_name": "แพทย์ประจำตำบล",
    "hcis_code": "03",
    "hos_guid": null
  },
  {
    "person_duty_id": 4,
    "person_duty_name": "สารวัตรกำนัน",
    "hcis_code": "04",
    "hos_guid": null
  },
  {
    "person_duty_id": 5,
    "person_duty_name": "ผู้ช่วยผู้ใหญ่บ้าน",
    "hcis_code": "05",
    "hos_guid": null
  },
  {
    "person_duty_id": 6,
    "person_duty_name": "อสม.",
    "hcis_code": "09",
    "hos_guid": null
  },
  {
    "person_duty_id": 7,
    "person_duty_name": "กสค.",
    "hcis_code": "10",
    "hos_guid": null
  },
  {
    "person_duty_id": 8,
    "person_duty_name": "หมอนวดโบราณ",
    "hcis_code": "x1",
    "hos_guid": null
  }
]
```
