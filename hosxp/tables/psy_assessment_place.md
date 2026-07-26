# `psy_assessment_place`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_place_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_place_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_place_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "psy_assessment_place_id": 1,
    "psy_assessment_place_name": "หน่วยบริการ",
    "hos_guid": null
  },
  {
    "psy_assessment_place_id": 2,
    "psy_assessment_place_name": "บ้านผู้ป้วย",
    "hos_guid": null
  }
]
```
