# `wbc_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| wbc_service_id | int(11) | NO | PRI | 0 |  |  |
| wbc_service_name | varchar(150) | YES | UNI | NULL |  |  |
| wbc_service_code | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_wbc_service_name | wbc_service_name | yes | 1 |
| PRIMARY | wbc_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "wbc_service_id": 1,
    "wbc_service_name": "ดูแลทารกครั้งที่ 1",
    "wbc_service_code": "BABY1",
    "hos_guid": null
  },
  {
    "wbc_service_id": 2,
    "wbc_service_name": "ดูแลทารกครั้งที่ 2",
    "wbc_service_code": "BABY2",
    "hos_guid": null
  }
]
```
