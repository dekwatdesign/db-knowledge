# `person_thyroid_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| thyroid_result | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | thyroid_result | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "thyroid_result": 1,
    "name": "ปกติ",
    "hos_guid": null
  },
  {
    "thyroid_result": 2,
    "name": "ผิดปกติ",
    "hos_guid": null
  },
  {
    "thyroid_result": 3,
    "name": "ไม่ได้ตรวจ",
    "hos_guid": null
  }
]
```
