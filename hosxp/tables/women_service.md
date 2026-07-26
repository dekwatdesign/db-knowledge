# `women_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| women_service_id | int(11) | NO | PRI | 0 |  |  |
| women_service_name | varchar(150) | YES | UNI | NULL |  |  |
| export_code | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_women_service_name | women_service_name | yes | 1 |
| PRIMARY | women_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "women_service_id": 1,
    "women_service_name": "วางแผนครอบครัว",
    "export_code": null,
    "hos_guid": null
  },
  {
    "women_service_id": 2,
    "women_service_name": "ตรวจมะเร็งเต้านม",
    "export_code": null,
    "hos_guid": null
  },
  {
    "women_service_id": 3,
    "women_service_name": "ตรวจมะเร็งปากมดลูก",
    "export_code": null,
    "hos_guid": null
  }
]
```
