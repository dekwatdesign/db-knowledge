# `labour_stage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| labour_stage_id | int(11) | NO | PRI | 0 |  |  |
| labour_stage_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_labour_stage_name | labour_stage_name | yes | 1 |
| PRIMARY | labour_stage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "labour_stage_id": 1,
    "labour_stage_name": "ก่อนคลอด",
    "hos_guid": "{1D502C52-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_stage_id": 2,
    "labour_stage_name": "ขณะคลอด",
    "hos_guid": "{1D502FEE-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_stage_id": 3,
    "labour_stage_name": "หลังคลอด",
    "hos_guid": "{1D503270-E5DA-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
