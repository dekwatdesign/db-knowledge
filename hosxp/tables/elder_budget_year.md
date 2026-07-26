# `elder_budget_year`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_budget_year_id | int(11) | NO | PRI | 0 |  |  |
| elder_budget_year_name | char(4) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_budget_year_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "elder_budget_year_id": 3262,
    "elder_budget_year_name": "2555",
    "hos_guid": null
  },
  {
    "elder_budget_year_id": 3272,
    "elder_budget_year_name": "2554",
    "hos_guid": null
  },
  {
    "elder_budget_year_id": 3279,
    "elder_budget_year_name": "2553",
    "hos_guid": null
  },
  {
    "elder_budget_year_id": 3280,
    "elder_budget_year_name": "2551",
    "hos_guid": null
  },
  {
    "elder_budget_year_id": 3283,
    "elder_budget_year_name": "2550",
    "hos_guid": null
  },
  {
    "elder_budget_year_id": 3301,
    "elder_budget_year_name": "2549",
    "hos_guid": null
  },
  {
    "elder_budget_year_id": 3302,
    "elder_budget_year_name": "2556",
    "hos_guid": null
  }
]
```
