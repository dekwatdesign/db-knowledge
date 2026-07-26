# `er_regist_oper`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_regist_oper_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| er_oper_code | int(11) | YES | MUL | NULL |  |  |
| oper_qty | tinyint(4) | YES |  | NULL |  |  |
| oper_cost | double(15,3) | YES |  | NULL |  |  |
| doctor | varchar(6) | YES |  | NULL |  |  |
| begin_time | time | YES |  | NULL |  |  |
| end_time | time | YES |  | NULL |  |  |
| rec_no | int(11) | YES |  | NULL |  |  |
| vn_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| doctor_investigation_report_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_er_oper_code | er_oper_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_opi_guid | opi_guid | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_guid | vn_guid | no | 1 |
| PRIMARY | er_regist_oper_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
