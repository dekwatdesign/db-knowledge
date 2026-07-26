# `opd_finance_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| dx_name1 | varchar(150) | YES |  | NULL |  |  |
| dx_name2 | varchar(150) | YES |  | NULL |  |  |
| oper_name1 | varchar(150) | YES |  | NULL |  |  |
| oper_name2 | varchar(150) | YES |  | NULL |  |  |
| claim_code | varchar(25) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "vn": "660118130000",
    "doctor": "325",
    "dx_name1": "โรคช่องปากและฟัน",
    "dx_name2": "ตรวจฟัน",
    "oper_name1": null,
    "oper_name2": null,
    "claim_code": null,
    "hos_guid": null
  }
]
```
