# `ipt_doctor_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_doctor_list_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| doctor | varchar(10) | YES |  | NULL |  |  |
| remark | varchar(150) | YES |  | NULL |  |  |
| incharge_date | date | YES |  | NULL |  |  |
| incharge_time | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| finish_date | date | YES |  | NULL |  |  |
| finish_time | time | YES |  | NULL |  |  |
| ipt_doctor_type_id | int(11) | YES |  | NULL |  |  |
| active_doctor | char(1) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_doctor | an | no | 1 |
| ix_an_doctor | doctor | no | 2 |
| ix_an_doctor_a | an | no | 1 |
| ix_an_doctor_a | doctor | no | 2 |
| ix_an_doctor_a | active_doctor | no | 3 |
| ix_an_doctor_a_index | active_doctor | no | 1 |
| ix_an_doctor_a_index | an | no | 2 |
| ix_an_doctor_a_index | doctor | no | 3 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_doctor_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
