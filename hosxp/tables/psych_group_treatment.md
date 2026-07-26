# `psych_group_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_group_treatment_id | int(11) | NO | PRI | 0 |  |  |
| psych_group_treatment_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_group_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "psych_group_treatment_id": 1,
    "psych_group_treatment_name": "ส่งเสริมและป้องกัน",
    "active": null
  },
  {
    "psych_group_treatment_id": 2,
    "psych_group_treatment_name": "บำบัดรักษา",
    "active": null
  },
  {
    "psych_group_treatment_id": 3,
    "psych_group_treatment_name": "ฟื้นฟูสมรรถภาพ",
    "active": null
  }
]
```
