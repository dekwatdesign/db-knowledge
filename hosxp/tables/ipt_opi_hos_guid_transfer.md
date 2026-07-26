# `ipt_opi_hos_guid_transfer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| an | char(9) | YES | MUL | NULL |  |  |
| ipt_opi_finance_transfer_list_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| ipt_opi_fn_tr_list_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_ipt_opi_finance_transfer_list_id | ipt_opi_finance_transfer_list_id | no | 1 |
| ix_ipt_opi_finance_transfer_list_id_index | ipt_opi_fn_tr_list_id | no | 1 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
