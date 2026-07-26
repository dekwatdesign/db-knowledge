# `budget_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| budget_type_id | int(11) | NO | PRI | 0 |  |  |
| budget_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_budget_type_name | budget_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | budget_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "budget_type_id": 1,
    "budget_type_name": "เงิน งปม.",
    "hos_guid": null
  },
  {
    "budget_type_id": 2,
    "budget_type_name": "เงิน บำรุง",
    "hos_guid": null
  }
]
```
