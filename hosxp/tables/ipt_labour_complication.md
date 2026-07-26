# `ipt_labour_complication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_labour_complication_id | int(11) | NO | PRI | 0 |  |  |
| ipt_labour_id | int(11) | YES |  | NULL |  |  |
| labour_complication_id | int(11) | YES |  | NULL |  |  |
| labour_stage_id | int(11) | YES |  | NULL |  |  |
| complication_note | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_labour_complication_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "ipt_labour_complication_id": 1,
    "ipt_labour_id": 58,
    "labour_complication_id": 11,
    "labour_stage_id": 1,
    "complication_note": "cpd",
    "hos_guid": null
  }
]
```
