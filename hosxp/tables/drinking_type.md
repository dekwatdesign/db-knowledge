# `drinking_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drinking_type_id | int(11) | NO | PRI | 0 |  |  |
| drinking_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| nhso_code | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drinking_type_name | drinking_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | drinking_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "drinking_type_id": 1,
    "drinking_type_name": "ไม่ดื่ม",
    "hos_guid": null,
    "nhso_code": null
  },
  {
    "drinking_type_id": 2,
    "drinking_type_name": "ดื่ม",
    "hos_guid": null,
    "nhso_code": null
  },
  {
    "drinking_type_id": 3,
    "drinking_type_name": "เคยดื่ม แต่เลิกแล้ว",
    "hos_guid": null,
    "nhso_code": null
  }
]
```
