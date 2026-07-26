# `provis_mstatus`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(1) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "code": "1",
    "name": "โสด",
    "hos_guid": null
  },
  {
    "code": "2",
    "name": "คู่",
    "hos_guid": null
  },
  {
    "code": "3",
    "name": "หม้าย",
    "hos_guid": null
  },
  {
    "code": "4",
    "name": "หย่า",
    "hos_guid": null
  },
  {
    "code": "5",
    "name": "แยก",
    "hos_guid": null
  },
  {
    "code": "6",
    "name": "สมณะ",
    "hos_guid": null
  },
  {
    "code": "9",
    "name": "ไม่ทราบ",
    "hos_guid": null
  }
]
```
