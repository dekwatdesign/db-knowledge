# `wbc_development_assess`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| wbc_development_assess_id | int(11) | NO | PRI | 0 |  |  |
| wbc_development_assess_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_wbc_development_assess_name | wbc_development_assess_name | yes | 1 |
| PRIMARY | wbc_development_assess_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "wbc_development_assess_id": 1,
    "wbc_development_assess_name": "ปกติ",
    "hos_guid": "{4CF5E923-E5DD-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "wbc_development_assess_id": 2,
    "wbc_development_assess_name": "สงสัยช้า",
    "hos_guid": "{4CF5F018-E5DD-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "wbc_development_assess_id": 3,
    "wbc_development_assess_name": "ล่าช้า",
    "hos_guid": "{4CF5F577-E5DD-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
