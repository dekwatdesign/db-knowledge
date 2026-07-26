# `physic_chronic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_chronic_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | physic_chronic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "physic_chronic_id": 1,
    "name": "Acute",
    "hos_guid": null
  },
  {
    "physic_chronic_id": 2,
    "name": "Chronic",
    "hos_guid": null
  },
  {
    "physic_chronic_id": 3,
    "name": "Sub-Acute",
    "hos_guid": null
  }
]
```
