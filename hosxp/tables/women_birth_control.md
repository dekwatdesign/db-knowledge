# `women_birth_control`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| women_birth_control_id | int(11) | NO | PRI | 0 |  |  |
| women_birth_control_name | varchar(150) | YES | UNI | NULL |  |  |
| export_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| did | varchar(24) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_women_birth_control_name | women_birth_control_name | yes | 1 |
| PRIMARY | women_birth_control_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "women_birth_control_id": 1,
    "women_birth_control_name": "ยาเม็ด",
    "export_code": "1",
    "hos_guid": null,
    "did": null
  },
  {
    "women_birth_control_id": 2,
    "women_birth_control_name": "ยาฉีด",
    "export_code": "2",
    "hos_guid": null,
    "did": null
  },
  {
    "women_birth_control_id": 3,
    "women_birth_control_name": "ถุงยางอนามัย",
    "export_code": "5",
    "hos_guid": null,
    "did": null
  },
  {
    "women_birth_control_id": 4,
    "women_birth_control_name": "ห่วงอนามัย",
    "export_code": "3",
    "hos_guid": null,
    "did": null
  },
  {
    "women_birth_control_id": 5,
    "women_birth_control_name": "ยาฝัง",
    "export_code": "4",
    "hos_guid": null,
    "did": null
  },
  {
    "women_birth_control_id": 6,
    "women_birth_control_name": "หมันชาย",
    "export_code": "6",
    "hos_guid": null,
    "did": null
  },
  {
    "women_birth_control_id": 7,
    "women_birth_control_name": "หมันหญิง",
    "export_code": "7",
    "hos_guid": null,
    "did": null
  },
  {
    "women_birth_control_id": 8,
    "women_birth_control_name": "ไม่ได้คุมกำเนิด",
    "export_code": "0",
    "hos_guid": null,
    "did": null
  }
]
```
