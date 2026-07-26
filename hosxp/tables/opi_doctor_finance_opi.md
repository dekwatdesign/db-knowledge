# `opi_doctor_finance_opi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| opd_opi_fn_tr_list_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | opd_opi_fn_tr_list_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "hos_guid": "{21373CFA-D25F-49BA-B543-D7C33AA6E835}",
    "vn": "671218133004",
    "opd_opi_fn_tr_list_id": 4334
  }
]
```
