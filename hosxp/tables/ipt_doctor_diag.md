# `ipt_doctor_diag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_doctor_diag_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| diag_text | text | YES |  | NULL |  |  |
| diag_datetime | datetime | YES |  | NULL |  |  |
| ovst_doctor_diag_st_id | int(11) | YES |  | NULL |  |  |
| diagtype | char(1) | YES |  | NULL |  |  |
| final_diag | char(1) | YES |  | NULL |  |  |
| audit_ok | char(1) | YES |  | NULL |  |  |
| audit_datetime | datetime | YES |  | NULL |  |  |
| audit_doctor_code | varchar(15) | YES |  | NULL |  |  |
| audit_diag_text | text | YES |  | NULL |  |  |
| audit_diagtype | char(1) | YES |  | NULL |  |  |
| inspect_doctor_code | varchar(15) | YES |  | NULL |  |  |
| diagai_suggest_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_final_diag | an | no | 1 |
| ix_an_final_diag | final_diag | no | 2 |
| PRIMARY | ipt_doctor_diag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
