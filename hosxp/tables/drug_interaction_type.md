# `drug_interaction_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| name | name | yes | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "id": 1,
    "name": "Drug - Drug Interaction",
    "hos_guid": null
  },
  {
    "id": 2,
    "name": "Drug - Food Interaction",
    "hos_guid": null
  },
  {
    "id": 3,
    "name": "Unknown Drug Interaction",
    "hos_guid": null
  }
]
```
