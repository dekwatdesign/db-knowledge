# `er_dch_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_dch_type | int(11) | NO | PRI | 0 |  |  |
| name | varchar(50) | YES | MUL | NULL |  |  |
| ovstost | char(2) | YES |  | NULL |  |  |
| er_flag | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | er_dch_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "er_dch_type": 1,
    "name": "กลับบ้าน",
    "ovstost": "99",
    "er_flag": "H",
    "hos_guid": null
  },
  {
    "er_dch_type": 2,
    "name": "ส่งต่อสถานพยาบาลอื่น",
    "ovstost": "54",
    "er_flag": "R",
    "hos_guid": null
  },
  {
    "er_dch_type": 3,
    "name": "Admitted",
    "ovstost": null,
    "er_flag": "A",
    "hos_guid": null
  },
  {
    "er_dch_type": 4,
    "name": "เสียชีวิต",
    "ovstost": null,
    "er_flag": "D",
    "hos_guid": null
  },
  {
    "er_dch_type": 5,
    "name": "รับไว้สังเกตุอาการ",
    "ovstost": null,
    "er_flag": "O",
    "hos_guid": null
  }
]
```
