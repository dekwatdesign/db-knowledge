# `dxa_disease_physical_exam`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dxa_disease_physical_exam_id | int(11) | YES |  | NULL |  |  |
| dxa_disease_id | int(11) | YES |  | NULL |  |  |
| dxa_physical_exam_id | int(11) | YES |  | NULL |  |  |
| dxa_physical_exam_score | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dxa_disease_physical_exam_id": 20,
    "dxa_disease_id": 16,
    "dxa_physical_exam_id": 13,
    "dxa_physical_exam_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_physical_exam_id": 14,
    "dxa_disease_id": 14,
    "dxa_physical_exam_id": 7,
    "dxa_physical_exam_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_physical_exam_id": 44,
    "dxa_disease_id": 32,
    "dxa_physical_exam_id": 30,
    "dxa_physical_exam_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_physical_exam_id": 44,
    "dxa_disease_id": 32,
    "dxa_physical_exam_id": 30,
    "dxa_physical_exam_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_physical_exam_id": 57,
    "dxa_disease_id": 40,
    "dxa_physical_exam_id": 37,
    "dxa_physical_exam_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_physical_exam_id": 56,
    "dxa_disease_id": 40,
    "dxa_physical_exam_id": 29,
    "dxa_physical_exam_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_physical_exam_id": 52,
    "dxa_disease_id": 37,
    "dxa_physical_exam_id": 33,
    "dxa_physical_exam_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_physical_exam_id": 30,
    "dxa_disease_id": 22,
    "dxa_physical_exam_id": 20,
    "dxa_physical_exam_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
