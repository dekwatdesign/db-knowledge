# `pp_special_service_place_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pp_special_service_place_type_id | int(11) | NO | PRI | 0 |  |  |
| pp_special_service_place_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_pp_special_service_place_type_name | pp_special_service_place_type_name | yes | 1 |
| PRIMARY | pp_special_service_place_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "pp_special_service_place_type_id": 1,
    "pp_special_service_place_type_name": "ในสถานบริการ",
    "hos_guid": null
  },
  {
    "pp_special_service_place_type_id": 2,
    "pp_special_service_place_type_name": "นอกสถานบริการ",
    "hos_guid": null
  }
]
```
