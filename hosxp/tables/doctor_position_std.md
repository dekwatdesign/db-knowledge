# `doctor_position_std`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_position_std_id | int(11) | NO | PRI | 0 |  |  |
| doctor_position_std_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| can_make_appoint | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_position_std_name | doctor_position_std_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_position_std_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_position_std_id": 0,
    "doctor_position_std_name": null,
    "hos_guid": null,
    "can_make_appoint": null
  },
  {
    "doctor_position_std_id": 1,
    "doctor_position_std_name": "แพทย์",
    "hos_guid": null,
    "can_make_appoint": null
  },
  {
    "doctor_position_std_id": 2,
    "doctor_position_std_name": "ทันตแพทย์",
    "hos_guid": null,
    "can_make_appoint": null
  },
  {
    "doctor_position_std_id": 3,
    "doctor_position_std_name": "เภสัชกร",
    "hos_guid": null,
    "can_make_appoint": null
  },
  {
    "doctor_position_std_id": 4,
    "doctor_position_std_name": "พยาบาล OPD",
    "hos_guid": null,
    "can_make_appoint": null
  },
  {
    "doctor_position_std_id": 5,
    "doctor_position_std_name": "พยาบาล ER",
    "hos_guid": null,
    "can_make_appoint": null
  },
  {
    "doctor_position_std_id": 6,
    "doctor_position_std_name": "พยาบาล LR",
    "hos_guid": null,
    "can_make_appoint": null
  },
  {
    "doctor_position_std_id": 7,
    "doctor_position_std_name": "พยาบาล ห้องผ่าตัด",
    "hos_guid": null,
    "can_make_appoint": null
  }
]
```
