# `tb_dot`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_dot_id | int(11) | NO | PRI | 0 |  |  |
| tb_register_id | int(11) | YES |  | NULL |  |  |
| parent_type_id | int(11) | YES |  | NULL |  |  |
| clinicmember_tb_advisor_type_id | int(11) | YES |  | NULL |  |  |
| tb_dot_pname | int(11) | YES |  | NULL |  |  |
| tb_dot_fname | varchar(50) | YES |  | NULL |  |  |
| tb_dot_lname | varchar(50) | YES |  | NULL |  |  |
| tb_dot_address | varchar(255) | YES |  | NULL |  |  |
| tb_dot_tel | varchar(100) | YES |  | NULL |  |  |
| tb_dot_email | varchar(100) | YES |  | NULL |  |  |
| tb_dot_picture | longblob | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_dot_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
