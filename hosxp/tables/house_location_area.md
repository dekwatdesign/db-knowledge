# `house_location_area`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| location_area_id | int(11) | NO | PRI | 0 |  |  |
| location_area_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_location_area_name | location_area_name | yes | 1 |
| PRIMARY | location_area_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "location_area_id": 1,
    "location_area_name": "เทศบาล",
    "hos_guid": null
  },
  {
    "location_area_id": 2,
    "location_area_name": "อบต.",
    "hos_guid": null
  }
]
```
