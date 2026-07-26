# `house_invest`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_invest_id | int(11) | NO | PRI | 0 |  |  |
| house_invest_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_invest_name | house_invest_name | yes | 1 |
| PRIMARY | house_invest_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "house_invest_id": 1,
    "house_invest_name": "001 ทำประโยชน์เอง",
    "hos_guid": "{99DA69B4-F542-11DE-BFF4-00215E472B30}"
  },
  {
    "house_invest_id": 2,
    "house_invest_name": "002 ให้เช่า",
    "hos_guid": "{99DA6BB2-F542-11DE-BFF4-00215E472B30}"
  }
]
```
