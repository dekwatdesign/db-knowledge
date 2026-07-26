# `village_store_location_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_store_location_type_id | int(11) | NO | PRI | 0 |  |  |
| village_store_location_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_store_location_type_name | village_store_location_type_name | yes | 1 |
| PRIMARY | village_store_location_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "village_store_location_type_id": 1,
    "village_store_location_type_name": "เทศบาล",
    "hos_guid": "{91CC70E6-E5DC-11DF-BBCF-F3CA1C2D0000}",
    "hospcode": null
  }
]
```
