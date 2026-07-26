# `cancer_nursenote_feellevel`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| feellevel_id | int(11) | NO | PRI | 0 |  |  |
| Feellevel_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | feellevel_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "feellevel_id": 1,
    "Feellevel_name": "Alert",
    "hos_guid": null
  },
  {
    "feellevel_id": 2,
    "Feellevel_name": "Drawsiness",
    "hos_guid": null
  },
  {
    "feellevel_id": 3,
    "Feellevel_name": "Stupor",
    "hos_guid": null
  },
  {
    "feellevel_id": 4,
    "Feellevel_name": "Restless or Confuse",
    "hos_guid": null
  },
  {
    "feellevel_id": 5,
    "Feellevel_name": "Semi conscious",
    "hos_guid": null
  },
  {
    "feellevel_id": 6,
    "Feellevel_name": "Deep coma",
    "hos_guid": null
  }
]
```
