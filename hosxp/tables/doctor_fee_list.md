# `doctor_fee_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| df_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| fee_date | date | YES | MUL | NULL |  |  |
| fee_amount | double(15,3) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| approve_money | char(1) | YES |  | NULL |  |  |
| approve_staff | varchar(25) | YES |  | NULL |  |  |
| original_fee | double(15,3) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| approve_date | date | YES |  | NULL |  |  |
| doctor_fee_type_id | int(11) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| begin_time | time | YES |  | NULL |  |  |
| end_time | time | YES |  | NULL |  |  |
| approve_amount | double(15,3) | YES |  | NULL |  |  |
| df_unit | double(15,3) | YES |  | NULL |  |  |
| df_user_code | varchar(30) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_an | an | no | 1 |
| ix_ix_fee_date | fee_date | no | 1 |
| ix_ix_hn | hn | no | 1 |
| ix_ix_vn | vn | no | 1 |
| PRIMARY | df_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
