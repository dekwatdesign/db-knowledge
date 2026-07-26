# `handicapped_hhc_allowance_place`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_hhc_allowance_place_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_hhc_allowance_place_name | char(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_hhc_allowance_place_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "handicapped_hhc_allowance_place_id": 1,
    "handicapped_hhc_allowance_place_name": "อบต.",
    "hos_guid": null
  },
  {
    "handicapped_hhc_allowance_place_id": 2,
    "handicapped_hhc_allowance_place_name": "เทศบาล",
    "hos_guid": null
  }
]
```
