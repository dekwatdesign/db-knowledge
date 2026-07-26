# `allergy_relation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| allergy_relation_id | int(11) | NO | PRI | 0 |  |  |
| relation_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_relation_name | relation_name | yes | 1 |
| PRIMARY | allergy_relation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "allergy_relation_id": 1,
    "relation_name": "Certain",
    "hos_guid": null
  },
  {
    "allergy_relation_id": 2,
    "relation_name": "Probable",
    "hos_guid": null
  },
  {
    "allergy_relation_id": 3,
    "relation_name": "Possible",
    "hos_guid": null
  },
  {
    "allergy_relation_id": 4,
    "relation_name": "Unlikely",
    "hos_guid": null
  },
  {
    "allergy_relation_id": 5,
    "relation_name": "Unclassifled",
    "hos_guid": null
  },
  {
    "allergy_relation_id": 6,
    "relation_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
