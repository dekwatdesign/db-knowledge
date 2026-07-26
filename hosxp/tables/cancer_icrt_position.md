# `cancer_icrt_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_icrt_position_id | int(11) | NO | PRI | 0 |  |  |
| cancer_icrt_position_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_icrt_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "cancer_icrt_position_id": 1,
    "cancer_icrt_position_name": "point A",
    "hos_guid": null
  },
  {
    "cancer_icrt_position_id": 2,
    "cancer_icrt_position_name": "surface",
    "hos_guid": null
  },
  {
    "cancer_icrt_position_id": 3,
    "cancer_icrt_position_name": "0.5 trum surface",
    "hos_guid": null
  }
]
```
