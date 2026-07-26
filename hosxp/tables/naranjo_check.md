# `naranjo_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| naranjo_check_id | int(11) | NO | PRI | 0 |  |  |
| naranjo_check_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_naranjo_check_name | naranjo_check_name | yes | 1 |
| PRIMARY | naranjo_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "naranjo_check_id": 1,
    "naranjo_check_name": "ใช่",
    "hos_guid": null
  },
  {
    "naranjo_check_id": 2,
    "naranjo_check_name": "ไม่ใช่",
    "hos_guid": null
  },
  {
    "naranjo_check_id": 3,
    "naranjo_check_name": "ไม่ทราบ",
    "hos_guid": null
  }
]
```
