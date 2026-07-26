# `cancer_nursenote_mtne`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| mtne_id | int(11) | NO | PRI | 0 |  |  |
| mtne_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | mtne_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "mtne_id": 1,
    "mtne_name": "สังเกตุและประเมินสภาพผู้ป่วย",
    "hos_guid": null
  },
  {
    "mtne_id": 2,
    "mtne_name": "ดูแลทางเดินหายใจ",
    "hos_guid": null
  },
  {
    "mtne_id": 3,
    "mtne_name": "รายงานแพทย์",
    "hos_guid": null
  }
]
```
