# `sss_chronic_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| detail_id | int(11) | NO | PRI | 0 |  |  |
| id | int(11) | YES |  | NULL |  |  |
| min_icd | varchar(10) | YES | MUL | NULL |  |  |
| max_icd | varchar(10) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_max_icd | max_icd | no | 1 |
| ix_min_icd | min_icd | no | 1 |
| PRIMARY | detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "detail_id": 1,
    "id": 1,
    "min_icd": "E10",
    "max_icd": "E139",
    "hos_guid": null
  },
  {
    "detail_id": 2,
    "id": 2,
    "min_icd": "I10",
    "max_icd": "I159",
    "hos_guid": null
  },
  {
    "detail_id": 3,
    "id": 3,
    "min_icd": "K73",
    "max_icd": "K749",
    "hos_guid": null
  },
  {
    "detail_id": 4,
    "id": 3,
    "min_icd": "B18",
    "max_icd": "B189",
    "hos_guid": null
  },
  {
    "detail_id": 5,
    "id": 4,
    "min_icd": "I50",
    "max_icd": "I509",
    "hos_guid": null
  },
  {
    "detail_id": 6,
    "id": 5,
    "min_icd": "I60",
    "max_icd": "I699",
    "hos_guid": null
  },
  {
    "detail_id": 7,
    "id": 6,
    "min_icd": "C00",
    "max_icd": "D099",
    "hos_guid": null
  },
  {
    "detail_id": 8,
    "id": 7,
    "min_icd": "B20",
    "max_icd": "B249",
    "hos_guid": null
  }
]
```
