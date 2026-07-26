# `anc_service_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_service_type_id | int(11) | NO | PRI | 0 |  |  |
| anc_service_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anc_service_type_name | anc_service_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | anc_service_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "anc_service_type_id": 1,
    "anc_service_type_name": "ตรวจก่อนคลอด",
    "hos_guid": null
  },
  {
    "anc_service_type_id": 2,
    "anc_service_type_name": "ตรวจหลังคลอด",
    "hos_guid": null
  }
]
```
