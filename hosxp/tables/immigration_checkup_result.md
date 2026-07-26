# `immigration_checkup_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| immigration_checkup_result_id | int(11) | NO | PRI | 0 |  |  |
| immigration_checkup_result_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_immigration_checkup_result_name | immigration_checkup_result_name | yes | 1 |
| PRIMARY | immigration_checkup_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "immigration_checkup_result_id": 1,
    "immigration_checkup_result_name": "ปกติ",
    "hos_guid": "",
    "hospcode": null
  }
]
```
