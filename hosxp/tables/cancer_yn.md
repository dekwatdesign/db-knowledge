# `cancer_yn`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_yn_id | int(11) | NO | PRI | 0 |  |  |
| cancer_yn_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_yn_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "cancer_yn_id": 1,
    "cancer_yn_name": "YES",
    "hos_guid": null
  },
  {
    "cancer_yn_id": 2,
    "cancer_yn_name": "NO",
    "hos_guid": null
  }
]
```
