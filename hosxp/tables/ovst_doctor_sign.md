# `ovst_doctor_sign`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_doctor_sign_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| doctor | varchar(10) | YES | MUL | NULL |  |  |
| sign_datetime | datetime | YES |  | NULL |  |  |
| computer_name | varchar(50) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| ovstost | varchar(2) | YES |  | NULL |  |  |
| sign_date | date | YES | MUL | NULL |  |  |
| sign_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_sign_date | sign_date | no | 1 |
| ix_sign_date | doctor | no | 2 |
| ix_sign_date_index | doctor | no | 1 |
| ix_sign_date_index | sign_date | no | 2 |
| ix_vn | vn | no | 1 |
| ix_vn_doctor | vn | no | 1 |
| ix_vn_doctor | doctor | no | 2 |
| ix_vn_doctor_index | doctor | no | 1 |
| ix_vn_doctor_index | vn | no | 2 |
| PRIMARY | ovst_doctor_sign_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_doctor_sign_id": 1,
    "vn": "651227083016",
    "doctor": "187",
    "sign_datetime": "2022-12-27 13:07:36",
    "computer_name": "A56-0114",
    "depcode": null,
    "hos_guid": null,
    "ovstost": null,
    "sign_date": null,
    "sign_note": null
  },
  {
    "ovst_doctor_sign_id": 2,
    "vn": "671003083026",
    "doctor": "353",
    "sign_datetime": "2024-10-03 09:03:17",
    "computer_name": "S08000201-00052",
    "depcode": "",
    "hos_guid": null,
    "ovstost": "00",
    "sign_date": "2024-10-03",
    "sign_note": null
  },
  {
    "ovst_doctor_sign_id": 3,
    "vn": "671003083010",
    "doctor": "353",
    "sign_datetime": "2024-10-03 09:16:02",
    "computer_name": "S08000201-00052",
    "depcode": "",
    "hos_guid": null,
    "ovstost": "00",
    "sign_date": "2024-10-03",
    "sign_note": null
  },
  {
    "ovst_doctor_sign_id": 4,
    "vn": "671003083008",
    "doctor": "353",
    "sign_datetime": "2024-10-03 09:37:04",
    "computer_name": "S08000201-00052",
    "depcode": "",
    "hos_guid": null,
    "ovstost": "00",
    "sign_date": "2024-10-03",
    "sign_note": null
  },
  {
    "ovst_doctor_sign_id": 5,
    "vn": "671003083042",
    "doctor": "353",
    "sign_datetime": "2024-10-03 09:53:09",
    "computer_name": "S08000201-00052",
    "depcode": "",
    "hos_guid": null,
    "ovstost": "00",
    "sign_date": "2024-10-03",
    "sign_note": null
  },
  {
    "ovst_doctor_sign_id": 6,
    "vn": "671003103052",
    "doctor": "068",
    "sign_datetime": "2024-10-03 11:01:39",
    "computer_name": "S08000201-00052",
    "depcode": "",
    "hos_guid": null,
    "ovstost": "00",
    "sign_date": "2024-10-03",
    "sign_note": null
  },
  {
    "ovst_doctor_sign_id": 7,
    "vn": "671003103050",
    "doctor": "068",
    "sign_datetime": "2024-10-03 11:09:53",
    "computer_name": "S08000201-00052",
    "depcode": "",
    "hos_guid": null,
    "ovstost": "00",
    "sign_date": "2024-10-03",
    "sign_note": null
  },
  {
    "ovst_doctor_sign_id": 8,
    "vn": "671003103116",
    "doctor": "068",
    "sign_datetime": "2024-10-03 11:38:01",
    "computer_name": "S08000201-00052",
    "depcode": "",
    "hos_guid": null,
    "ovstost": "99",
    "sign_date": "2024-10-03",
    "sign_note": null
  }
]
```
