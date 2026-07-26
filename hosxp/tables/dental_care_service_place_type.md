# `dental_care_service_place_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_care_service_place_type_id | int(11) | NO | PRI | 0 |  |  |
| dental_care_service_place_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dental_care_service_place_type_name | dental_care_service_place_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dental_care_service_place_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "dental_care_service_place_type_id": 1,
    "dental_care_service_place_type_name": "ในสถานบริการ",
    "hos_guid": null
  },
  {
    "dental_care_service_place_type_id": 2,
    "dental_care_service_place_type_name": "นอกสถานบริการ",
    "hos_guid": null
  }
]
```
