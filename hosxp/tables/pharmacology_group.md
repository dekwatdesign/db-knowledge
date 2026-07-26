# `pharmacology_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pharmacology_group_id | int(11) | NO | PRI | 0 |  |  |
| pharmacology_group_name | varchar(150) | YES |  | NULL |  |  |
| outline | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | pharmacology_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pharmacology_group_id": 1,
    "pharmacology_group_name": " ACETYLCHOLINESTERASE INHIBITOR",
    "outline": null
  },
  {
    "pharmacology_group_id": 2,
    "pharmacology_group_name": " ANTIDIABETICS DRUG",
    "outline": null
  },
  {
    "pharmacology_group_id": 3,
    "pharmacology_group_name": "ALPHA & BETA BLOCKER",
    "outline": null
  },
  {
    "pharmacology_group_id": 4,
    "pharmacology_group_name": "AMINOGLYCOSIDE",
    "outline": null
  },
  {
    "pharmacology_group_id": 5,
    "pharmacology_group_name": "AMOEBICIDES",
    "outline": null
  },
  {
    "pharmacology_group_id": 6,
    "pharmacology_group_name": "ANALGESIC AND TROMBOLYTICS AND FIBRINOLYTIC AGENT",
    "outline": null
  },
  {
    "pharmacology_group_id": 7,
    "pharmacology_group_name": "ANALGESICS",
    "outline": null
  },
  {
    "pharmacology_group_id": 8,
    "pharmacology_group_name": "ANALGESICS / ANTIPYRETICS",
    "outline": null
  }
]
```
