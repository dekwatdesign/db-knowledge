# `labour_sac_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| labour_sac_type_id | int(11) | NO | PRI | 0 |  |  |
| labour_sac_type_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_labour_sac_type_name | labour_sac_type_name | yes | 1 |
| PRIMARY | labour_sac_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "labour_sac_type_id": 1,
    "labour_sac_type_name": "MI",
    "hos_guid": "{1CFBC979-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_sac_type_id": 2,
    "labour_sac_type_name": "MR",
    "hos_guid": "{1CFBD045-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_sac_type_id": 3,
    "labour_sac_type_name": "ML",
    "hos_guid": "{1CFBD57B-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "labour_sac_type_id": 4,
    "labour_sac_type_name": "อื่นๆ",
    "hos_guid": "{1CFBDA37-E5DA-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
