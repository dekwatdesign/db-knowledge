# `ckup_prog`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_prog_id | int(11) | NO | PRI | 0 |  |  |
| ckup_prog_name | varchar(100) | YES |  | NULL |  |  |
| ckup_prog_price | double(15,3) | YES |  | NULL |  |  |
| ckup_prog_usr | varchar(100) | YES |  | NULL |  |  |
| ckup_prog_upd | varchar(20) | YES |  | NULL |  |  |
| ckup_prog_code | varchar(10) | YES |  | NULL |  |  |
| ckup_prog_icode | varchar(7) | YES |  | NULL |  |  |
| ckup_prog_date | date | YES |  | NULL |  |  |
| ckup_prog_year | varchar(5) | YES |  | NULL |  |  |
| ckup_prog_active | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| ckup_prog_income | char(3) | YES |  | NULL |  |  |
| ckup_split_lab_form | char(1) | YES |  | NULL |  |  |
| ckup_split_detail | char(1) | YES |  | NULL |  |  |
| ckup_check_order | char(1) | YES |  | NULL |  |  |
| ckup_split_lab_option | char(3) | YES |  | NULL |  |  |
| ckup_receive_charge | char(1) | YES |  | NULL |  |  |
| ckup_prog_use_sex | char(1) | YES |  | NULL |  |  |
| ckup_prog_sex_id | char(1) | YES |  | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| ckup_prog_use_paidst | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ckup_prog_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
