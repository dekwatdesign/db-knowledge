# `rpt_505_name`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name1 | varchar(250) | YES |  | NULL |  |  |
| name2 | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "name1": "Thyphoid, parathyphoid fever and other salmonella infections",
    "name2": "0",
    "hos_guid": null
  },
  {
    "id": 2,
    "name1": "Other intestinal infections diseases",
    "name2": "0",
    "hos_guid": null
  },
  {
    "id": 3,
    "name1": "Tuberculosis",
    "name2": "0",
    "hos_guid": null
  },
  {
    "id": 4,
    "name1": "Leprosy",
    "name2": "0",
    "hos_guid": null
  },
  {
    "id": 5,
    "name1": "Viral emcephalitis",
    "name2": "0",
    "hos_guid": null
  },
  {
    "id": 6,
    "name1": "Dengue hemorrhagic fever and other mosquitoborne viral hemorrhagic fever",
    "name2": "0",
    "hos_guid": null
  },
  {
    "id": 7,
    "name1": "Viral hepatitis",
    "name2": "0",
    "hos_guid": null
  },
  {
    "id": 8,
    "name1": "Human immunodeficiency virus [HIV] diseases",
    "name2": "0",
    "hos_guid": null
  }
]
```
