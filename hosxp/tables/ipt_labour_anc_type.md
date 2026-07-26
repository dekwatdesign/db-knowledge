# `ipt_labour_anc_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_labour_anc_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_labour_anc_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ipt_labour_anc_type_name | ipt_labour_anc_type_name | yes | 1 |
| PRIMARY | ipt_labour_anc_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ipt_labour_anc_type_id": 1,
    "ipt_labour_anc_type_name": "ครบตามเกณฑ์",
    "hos_guid": null
  },
  {
    "ipt_labour_anc_type_id": 2,
    "ipt_labour_anc_type_name": "ไม่ครบตามเกณฑ์",
    "hos_guid": null
  },
  {
    "ipt_labour_anc_type_id": 3,
    "ipt_labour_anc_type_name": "ไม่ฝากครรภ์",
    "hos_guid": null
  }
]
```
