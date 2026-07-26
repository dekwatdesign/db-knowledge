# `psychia_counseling`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychia_couseling_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychia_couseling_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "psychia_couseling_id": 1,
    "name": "รายบุคคล",
    "hos_guid": null
  },
  {
    "psychia_couseling_id": 2,
    "name": "รายกลุ่ม",
    "hos_guid": null
  },
  {
    "psychia_couseling_id": 3,
    "name": "รายครอบครัว",
    "hos_guid": null
  }
]
```
