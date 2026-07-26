# `house_survey_garbage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_survey_garbage_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| export_code | varchar(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | house_survey_garbage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "house_survey_garbage_id": 1,
    "name": "หลุมขยะ",
    "hos_guid": null,
    "export_code": null
  },
  {
    "house_survey_garbage_id": 2,
    "name": "หมักทำปุ๋ย",
    "hos_guid": null,
    "export_code": null
  },
  {
    "house_survey_garbage_id": 3,
    "name": "เผา",
    "hos_guid": null,
    "export_code": null
  },
  {
    "house_survey_garbage_id": 4,
    "name": "ส่งต่อระบบกำจัดอื่น",
    "hos_guid": null,
    "export_code": null
  }
]
```
