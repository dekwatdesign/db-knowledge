# `cancer_rate_unit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_rate_unit_id | int(11) | NO | PRI | 0 |  |  |
| cancer_rate_unit_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_rate_unit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "cancer_rate_unit_id": 1,
    "cancer_rate_unit_name": "cc/hr",
    "hos_guid": null
  },
  {
    "cancer_rate_unit_id": 2,
    "cancer_rate_unit_name": "drop/min",
    "hos_guid": null
  }
]
```
