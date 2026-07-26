# `ipt_income_auto_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| icode | varchar(7) | NO | PRI |  |  |  |
| charge_date | date | NO | PRI | 0000-00-00 |  |  |
| charge | char(1) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| service_type | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| charge_ok | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| charge_date | charge_date | no | 1 |
| icode | icode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_ix_an_icode_date | an | no | 1 |
| ix_ix_an_icode_date | icode | no | 2 |
| ix_ix_an_icode_date | charge_date | no | 3 |
| ix_opi_guid | opi_guid | no | 1 |
| ix_service_type_date | an | no | 1 |
| ix_service_type_date | service_type | no | 2 |
| ix_service_type_date | charge_date | no | 3 |
| ix_service_type_date_index | an | no | 1 |
| ix_service_type_date_index | charge_date | no | 2 |
| ix_service_type_date_index | service_type | no | 3 |
| PRIMARY | an | yes | 1 |
| PRIMARY | charge_date | yes | 2 |
| PRIMARY | icode | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
