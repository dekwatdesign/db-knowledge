# `er_refer_hosptype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_refer_hosptype_id | int(11) | NO | PRI | 0 |  |  |
| er_refer_hosptype_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_er_refer_hosptype_name | er_refer_hosptype_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | er_refer_hosptype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "er_refer_hosptype_id": 1,
    "er_refer_hosptype_name": "โรงพยาบาลศูนย์",
    "hos_guid": null
  },
  {
    "er_refer_hosptype_id": 2,
    "er_refer_hosptype_name": "โรงพยาบาลมหาวิทยาลัย",
    "hos_guid": null
  },
  {
    "er_refer_hosptype_id": 3,
    "er_refer_hosptype_name": "โรงพยาบาลทั่วไป (จังหวัด)",
    "hos_guid": null
  },
  {
    "er_refer_hosptype_id": 4,
    "er_refer_hosptype_name": "โรงพยาบาลจิตเวช",
    "hos_guid": null
  },
  {
    "er_refer_hosptype_id": 5,
    "er_refer_hosptype_name": "โรงพยาบาลชุมชน",
    "hos_guid": null
  },
  {
    "er_refer_hosptype_id": 6,
    "er_refer_hosptype_name": "สถานีอนามัย",
    "hos_guid": null
  }
]
```
