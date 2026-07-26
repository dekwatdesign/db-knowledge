# `adr_preventable_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adr_preventable_check_id | int(11) | NO | PRI | 0 |  |  |
| adr_preventable_check_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_adr_preventable_check_name | adr_preventable_check_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | adr_preventable_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "adr_preventable_check_id": 1,
    "adr_preventable_check_name": "ใช่",
    "hos_guid": null
  },
  {
    "adr_preventable_check_id": 2,
    "adr_preventable_check_name": "ไม่ใช่",
    "hos_guid": null
  }
]
```
