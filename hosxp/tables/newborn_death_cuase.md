# `newborn_death_cuase`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| newborn_death_cause_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | newborn_death_cause_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "newborn_death_cause_id": 1,
    "name": "ตายเปื่อยยุ่ย",
    "hos_guid": null
  },
  {
    "newborn_death_cause_id": 2,
    "name": "พิการแต่กำเนิด",
    "hos_guid": null
  },
  {
    "newborn_death_cause_id": 3,
    "name": "ขาดออกซิเจนขณะคลอด",
    "hos_guid": null
  },
  {
    "newborn_death_cause_id": 4,
    "name": "คลอดก่อนกำหนด",
    "hos_guid": null
  },
  {
    "newborn_death_cause_id": 5,
    "name": "สาเหตุเฉพาะอื่นๆ",
    "hos_guid": null
  },
  {
    "newborn_death_cause_id": 6,
    "name": "ไม่ทราบสาเหตุ",
    "hos_guid": null
  }
]
```
